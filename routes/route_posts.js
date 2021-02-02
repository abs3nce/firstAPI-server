const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//get
router.get("/", async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json(err);
    }
});

router.get("/:postID", async (req, res) => {
    const post = await Post.findById(req.params.postID);

    try {
        res.json(post);
    } catch (error) {
        res.json(error);
    }
});

//post
router.post("/", async (req, res) => {
    const post = new Post({
        title: req.body.title,
        desc: req.body.desc,
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json(err);
    }
});

//delete
router.delete("/:postID", async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.postID);
        res.json(post);
    } catch (error) {
        res.json(error);
    }
});

router.delete("/", async (req, res) => {
    try {
        const posts = await Post.remove();
        res.json(post);
    } catch (error) {
        res.json(error);
    }
});

module.exports = router;
