import express from 'express';

/*import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';*/
import { getPosts, createPost}from '../controllers/posts.js';

const router = express.Router();
router.get('/', getPosts);
router.get('/', createPost);

export default router;