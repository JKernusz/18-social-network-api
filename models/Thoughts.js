const reactionSchema = require("./Reaction");
const { Schema, model } = require("mongoose");
const moment = require("moment");

const thoughtSchema = new Schema(
  {
    Thoughttext: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },

    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => moment(timestamp).format('MMMM Do YYYY, h:mm:ss a'),
    },
    updatedAT: {
      type: Date,
      default: Date.now,
      get: (timestamp) => moment(timestamp).format('MMMM Do YYYY, h:mm:ss a'),
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    timestamps: true,
  }
);

const Thoughts = model("Thoughts", thoughtSchema);

thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
  });

  module.exports = Thoughts;
