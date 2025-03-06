import Course from '../models/Course/index.js';
import convertObject from '../../utils/mongoose.js';
const convert = convertObject.covertMongooses;
const convertOne = convertObject.convertMongoose;

class MeController {
    storeCourses() {
        return (req, res, next) => {
            Course.find({})
                .then((courses) => {
                    return res.render('me/courses', {
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
