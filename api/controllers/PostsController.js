'use strict'

module.exports = {
    posts: async function(req, res) {
        try {
            const posts = await Post.find()
            res.send(posts)
        } catch (err) {
            res.serverError(err.toString())
        }
    },

    // create: function(req, res) {
    //     const title = req.body.title
    //     const postBody = req.body.postBody

    //     sails.log.warn("Title : " + title)
    //     sails.log.warn("Post body : " + postBody)

    //     Post.create({title: title, body: postBody}).exec(function(err) {
    //         if (err) {
    //             return res.serverError(err.toString())
    //         }
    //         sails.log.warn('Finished creating post object.')
    //         return res.redirect('/home')
    //     })
    // },

    update: async function(req, res) {
        const postId = req.param('postId')
        const title = req.body.title
        const postBody = req.body.postBody

        await Post.update({id: postId}).set({title: title, body: postBody})

        res.send('Post with id : ' + postId + 'has been delete successfully.')
    },

    findById: function(req, res) {
        const postId = req.param('postId')
        const filteredPosts = Post.filter(p => {return p.id == postId})
        
        if (filteredPosts.length > 0) {
            res.send(filteredPosts[0])
        } else {
            res.send("Failed to find the post by id : " + postId)
        }
    },

    // delete: async function(req, res) {
    //     const postId = req.param('postId')

    //     await Post.destroy({id: postId})

    //     res.send('Post with id : ' + postId + 'has been delete successfully.')
    // }
}