module.exports = {

  friendlyName: 'Delete',

  description: 'Delete post.',

  inputs: {
    postId: {
      type: 'number',
      required: true
    }
  },

  exits: {
    invalid: {
      description: 'List of errors when the delete action fails.'
    }
  },

  fn: async function (inputs) {
    sails.log.warn("Trying to delete post with id: " + inputs.postId)

    const record = await Post.destroy({id: inputs.postId}).fetch()
    if (record.length == 0) {
      sails.log.warn("Failed to delete post with id: " + inputs.postId)
      throw({invalid: {error: 'Post with id: ' + inputs.postId + ' does not exist.'}})
    }
    sails.log.warn("Succeded to delete post with id: " + inputs.postId)
    return record;
  }
};
