import siteRouter from './site.js';
import courseRouter from './course.js';
import meRouter from './me.js';
const route = (app) => {
    app.use('/me', meRouter);
    app.use('/courses', courseRouter);
    app.use('/', siteRouter);
};

export default route;
