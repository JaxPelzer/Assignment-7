const mongoose = require('mongoose');
const schema = mongoose.Schema;

const STUDENT = new mongoose.Schema({
    fname:
    {
        type: String,
        required: true
    },
    lname:
    {
        type: String,
        required: true
    },
    studentID:
    {
        type: String,
        required: true
    },
    dateEntered:
    {
        type: Date,
        required: true,
        default: Date.now
    },
});

mongoose.model("STUDENT", STUDENT);