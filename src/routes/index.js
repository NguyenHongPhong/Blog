import siteRouter from './site.js';
import courseRouter from './course.js';

const route = (app) => {
    app.use('/courses', courseRouter);
    app.use('/', siteRouter);
};

export default route;
