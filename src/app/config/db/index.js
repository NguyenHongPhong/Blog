import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
        console.log('Connected succesfully!!!');
    } catch (error) {
        console.log('Connect failed!!!');
    }
}

export default { connect };
