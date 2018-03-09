const mongoose = require("mongoose");
const User = require("./user");
const Quizz = require("./quizz");
const Schema = mongoose.Schema;

const matchSchema = new Schema(
    {
        _quizzId: {
            type: Schema.Types.ObjectId,
            ref: "Quizz"
        },
        _userRequester: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        _userCandidate: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        status: {
            type: "string",
            default: "pending",
            enum: ["pending", "granted", "refused"]
        },
        average: {
            type: Number,
            min: 0,
            max: 1
        },
        // musicAnswer: {
        //     type: String,
        //     required: true
        // },
        // musicSuccess: {
        //     type: Boolean,
        //     required: true
        // },
        // movieAnswer: {
        //     type: String,
        //     required: true
        // },
        // movieSuccess: {
        //     type: Boolean,
        //     required: true
        // },
        // qualityAnswer: {
        //     type: String,
        //     required: true
        // },
        // qualitySuccess: {
        //     type: Boolean,
        //     required: true
        // },
        // defectAnswer: {
        //     type: String,
        //     required: true
        // },
        // defectSuccess: {
        //     type: Boolean,
        //     required: true
        // }
    },
    {
        timestamps: true
    }
);

const Match = mongoose.model("Match", matchSchema);
module.exports = Match;
