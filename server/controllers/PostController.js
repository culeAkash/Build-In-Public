// controllers help us to segregate logic from the route file to controller to keep thr route file cleaner
import PostModel from "../models/PostModel.js";



export const getPosts = async (req, res) => {
    try {
        const posts = await PostModel.find()
        console.log(posts);
        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

export const createPost = async (req, res) => {
    const body = req.body;
    const newPost = new PostModel(body);

    try {
        await newPost.save();
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({
            message: error.message
        })
    }
}