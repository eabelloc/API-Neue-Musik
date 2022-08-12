const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, required: true },
    gender: { type: String, enum: ["male", "female", "other"] },
    year: { type: String, required: true },
    origin: { type: String, required: true },
    images: { type: String, required: true },
    biography: { type: String, required: true },
    style: { type: String, required: true },
    myFavouriteWork: { type: String, required: true }
});

module.exports = mongoose.model('composers', schema);
