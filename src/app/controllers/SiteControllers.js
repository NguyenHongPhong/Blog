import Course from '../models/Course/index.js';
import MongosseConvert from '../../utils/mongoose.js';
const { covertMongooses } = MongosseConvert;

class SiteControllers {
    home() {
        return (req, res, next) => {
            res.render('home');
        };
    }

    search() {
        return (req, res) => res.render('search');
    }
}

export default new SiteControllers();
