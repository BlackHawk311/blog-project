'use strict'

module.exports = async function(req, res) {
    const allPosts = await Post.find()

    res.view('pages/home',
        {allPosts}
    )
    // res.end()
}