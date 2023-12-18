import express from 'express'
import multer from 'multer';
import { fileUploadController } from '../controllers/fileUploadController.js';

const router = express.Router()

router.post('/upload', multer({ dest: 'uploads/' }).single('file'),fileUploadController);

export default router