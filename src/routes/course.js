import { Router } from 'express';
import CourseController from '../app/controllers/CourseController.js';

const router = Router();

router.get('/create', CourseController.create());
router.get('/:slug', CourseController.course());
router.get('/edit/:id', CourseController.editCourse());

router.post('/store', CourseController.store());
router.put('/update/:id', CourseController.updateCourse());
router.patch('/:id/restore', CourseController.restore());
router.delete('/:id', CourseController.delete());
router.delete('/:id/force', CourseController.deleteForce());

router.get('/', CourseController.home());

export default router;
