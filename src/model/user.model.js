const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    recipes: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Recipe"
        }
    ],
},
{
    timestamps: { createdAt: "Date_Created", updatedAt: "Date_Updated" }
}
);

module.exports = mongoose.model("User", userSchema);