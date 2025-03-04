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
                    res.redirect('/courses/');
                })
                .catch(next);
        };
    }
}

export default new CourseController();
