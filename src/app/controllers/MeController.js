import Course from '../models/Course/index.js';
import convertObject from '../../utils/mongoose.js';
const convert = convertObject.covertMongooses;

class MeController {
    storeCourses() {
        return (req, res, next) => {
            Promise.all([
                Course.find({}),
                Course.countDocumentsWithDeleted({ deleted: true }),
            ])
                .then(([courses, countDeleted]) => {
                    return res.render('me/courses', {
                        countDeleted,
                        courses: convert(courses),
                        helpers: {
                            sumIndex(a, b) {
                                return a + b;
                            },
                        },
                    });
                })
                .catch(next);
        };
    }

    trashCourses() {
        return (req, res, next) => {
            Course.findWithDeleted({ deleted: true })
                .then((courses) => {
                    res.render('me/trash-courses', {
                        courses: convert(courses),
                        helpers: {
                            sumIndex(a, b) {
                                return a + b;
                            },
                        },
                    });
                })
                .catch(next);
        };
    }
}

export default new MeController();
