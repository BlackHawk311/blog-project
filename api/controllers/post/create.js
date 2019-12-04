module.exports = {

  friendlyName: 'Create',

  description: 'Create post.',

  inputs: {
    title: {
      type: 'string',
      required: true
    },
    postBody: {
      type: 'string',
      required: true
    }
  },

  exits: {
    invalid: {
      description: 'Error when fail to create a post.'
    }
  },

  fn: async function (inputs) {
    sails.log.warn("Title :" + inputs.title)
    sails.log.warn("Body :" + inputs.postBody)
    
    await Post.create({title: inputs.title, body: inputs.postBody})
    sails.log.warn("New post created.")
    return;
  }
};
