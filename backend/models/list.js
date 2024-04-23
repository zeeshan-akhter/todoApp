    const mongoose = require("mongoose");

    //now we will create schemas
    const listSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    user: [
        {
        type: mongoose.Types.ObjectId,
        ref: "User",
        },
    ],
    },
    { timestamps: true });

    module.exports = mongoose.model("List", listSchema); //Here the "List" acts a as a reference in user model ,
    // so the names should be same.
