import mongoose from 'mongoose';

//1 - create a schema for the note
//2 - model based off of that schema

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },

    },

    {timestamps: true, } // createdAt and updatedAt fields will be automatically added by Mongoose
);

const Note = mongoose.model('Note', noteSchema);

export default Note;