const mongoose = require("mongoose");

const Hospital = mongoose.model(
    "Hospital",
    new mongoose.Schema(
        {
            hospName: String,
            hospLocation: String,
            status: { type: String, enum: ["active", "inactive"] }
        },
        { timestamps: true }
    )
);

module.exports = Hospital;