import { Router } from 'express';
import CourseController from '../app/controllers/CourseController.js';

const router = Router();

router.get('/create', CourseController.create());

router.post('/store', CourseController.store());

router.get('/:slug', CourseController.course());

router.get('/', CourseController.home());

export default router;
