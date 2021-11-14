const mongoose = require('mongoose');
const schema = mongoose.Schema;

const COURSE = new mongoose.Schema({
    courseID:
    {
        type: String,
        required: true
    },
    courseName:
    {
        type: String,
        required: true
    },
    courseInstructor:
    {
        type: String,
        required: true
    },
    courseCredits:
    {
        type: Number,
        required: true
    },
    dateEntered:
    {
        type: Date,
        required: true,
        default: Date.now
    },
});
mongoose.model("COURSE", COURSE);