import mongoose from 'mongoose';
import { nanoid } from 'nanoid';
import mongooseDelete from 'mongoose-delete';

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, maxLength: 255 },
        description: { type: String, maxLength: 600 },
        image: { type: String, maxLength: 255 },
        slug: {
            type: String,
            default: function () {
                return this.name;
            },
            maxLength: 100,
        },
        videoId: { type: String },
    },
    {
        timestamps: true,
    }
);

Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });

Course.pre('save', async function (next) {
    const existingCourse = await mongoose
        .model('Course')
        .findOne({ name: this.name });
    console.log(existingCourse ? 'existed' : 'Not exist');
    this.slug = existingCourse ? `${this.name}-${nanoid(5)}` : this.name;
    next();
});

export default mongoose.model('Course', Course);
