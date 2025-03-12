import Course from '../models/Course/index.js';
import convertObject from '../../utils/mongoose.js';
const convert = convertObject.covertMongooses;
const convertOne = convertObject.convertMongoose;

class CourseController {
    home() {
        return (req, res, next) => {
            Course.find({})
                .then((courses) => {
                    res.render('courses\\home', { courses: convert(courses) });
                })
                .catch(next);
        };
    }

    course() {
        return (req, res, next) => {
            Course.findOne({ slug: req.params.slug })
                .then((course) => {
                    return res.render('courses\\index', {
                        slug: convertOne(course),
                    });
                })
                .catch(next);
        };
    }

    create() {
        return (req, res, next) => {
            res.render('courses\\create');
        };
    }

    store() {
        return async (req, res, next) => {
            const formData = req.body;
            formData.image = `https://i.ytimg.com/vi/${formData.videoId}/maxresdefault.jpg`;
            const newCourse = new Course({ ...formData });
            await Course.create(formData)
                .then(() => {
                    res.redirect('/courses');
                })
                .catch(next);
        };
    }

    editCourse() {
        return (req, res, next) => {
            Course.findById(req.params.id)
                .then((course) => {
                    res.render('courses/edit', { data: convertOne(course) });
                })
                .catch(next);
        };
    }

    updateCourse() {
        return (req, res, next) => {
            Course.findOne({ _id: req.params.id })
                .updateOne(req.body)
                .then(res.redirect('/me/stored/courses'));
        };
    }

    restore() {
        return (req, res, next) => {
            Course.restore({ _id: req.params.id })
                .then(res.redirect('back'))
                .catch(next);
        };
    }

    delete() {
        return async (req, res, next) => {
            try {
                await Course.delete({ _id: req.params.id });
                res.redirect('back');
            } catch (error) {
                next();
            }
        };
    }

    deleteForce() {
        return async (req, res, next) => {
            try {
                await Course.deleteOne({ _id: req.params.id });
                res.redirect('back');
            } catch (error) {
                next();
            }
        };
    }
}

export default new CourseController();
