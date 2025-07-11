import mongoose from "mongoose";

const DummySchema = new mongoose.Schema({

    name: {type: String, required: true, default: "name"},
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean,
});

export const Dummy = mongoose.model('Dummy', DummySchema);
