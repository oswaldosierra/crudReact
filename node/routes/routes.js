import express from "express";
import { createBlog, deleteBlog, getAllBlogs, getBlog, updatedBlog } from "../controllers/BlogController.js";
const router = express.Router();

router.get('/', getAllBlogs);
router.get('/:id', getBlog);
router.post('/', createBlog);
router.put('/:id', updatedBlog);
router.delete('/:id', deleteBlog);

export default router;
