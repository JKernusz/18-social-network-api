const { Schema } = require("mongoose");
const moment = require("moment");

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        ref: "Thoughts",
        required: true
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) =>  moment(timestamp).format('MMMM Do YYYY, h:mm:ss a'),

    },
    updatedAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) =>  moment(timestamp).format('MMMM Do YYYY, h:mm:ss a'),
    },
},  {
    toJSON: {
        virtuals: true,
        getters: true,
    },
    timestamps: true,
});

module.exports = reactionSchema;