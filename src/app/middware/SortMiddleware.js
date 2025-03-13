export default function SortMiddleware(req, res, next) {
    res.locals.sort = {
        type: 'default',
    };

    if (req.query.hasOwnProperty('sort')) {
        Object.assign(res.locals.sort, {
            type: req.query.type,
            column: req.query.column,
        });
    }

    next();
}
