const mongoose = require("mongoose");

const PM = mongoose.model(
    "PM",
    new mongoose.Schema({
        deviceID: String,
        directory: String,
        date: Date,
    },
        { timestamps: true }
    )
);

module.exports = PM;