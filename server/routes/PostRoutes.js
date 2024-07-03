import express from 'express'
import { getPosts, createPost } from '../controllers/PostController.js'

// create a router instance
const router = express.Router()

//http:/localhost:5000/posts will be redirected to this controller


router.get("/", getPosts);
router.post("/", createPost);

//export the router to be used as a controller
export default router