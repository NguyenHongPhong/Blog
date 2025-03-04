export default {
    covertMongooses: (courses) => {
        return courses.map((course) => course.toObject());
    },
    convertMongoose: (course) => {
        return course ? course.toObject() : course;
    },
};
