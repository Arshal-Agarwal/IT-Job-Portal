const mongoose = require("mongoose");

const applicantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            "Please enter a valid email address"
        ]
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String
    },
    qualifications: {
        type: String
    },
    techStack: {
        type: [String]
    },
    experience: {
        type: Number,
        default: 0
    },
    projectPortfolio: [
        {
            projectName: {
                type: String,
                required: true
            },
            projectLink: {
                type: String
            },
            description: {
                type: String
            }
        }
    ],
    isVerified: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Applicant", applicantSchema);