module.exports = {

  friendlyName: 'Find by id',

  description: 'Find a post with the specific id.',

  inputs: {
    postId: {
      type: 'number',
      required: true
    }
  },

  exits: {
    valid: {
      description: ''
    },
    invalid: {
      description: 'List of error when fail to find posts.'
    }
  },

  fn: async function (inputs, exits) {
    const filteredPost = await Post.filter(p => {return p.id == inputs.postId})

    if (filteredPost.length > 0) {
      exits.send({valid: {result: filteredPost[0]}})
    } else {
      exits.send({invalid: {error: 'Failed to load posts.'}})
    }
    return;
  }
};
