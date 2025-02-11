import site from './site.js';
const route = (app) => {
    app.use('/', site);
}

export default route;