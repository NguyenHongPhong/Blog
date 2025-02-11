import { Router } from 'express';
import SiteControllers from '../app/controllers/SiteControllers.js';
const router = Router();

router.get('/', SiteControllers.home());

router.get('/:slug', SiteControllers.search());



export default router;