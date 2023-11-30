const reactionSchema = require("./Reaction");
const { Schema, model } = require("mongoose");

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
      get: (timestamp) => moment(timestamp).toLocaleDateString(),
    },
    updatedAT: {
      type: Date,
      default: Date.now,
      get: (timestamp) => moment(timestamp).toLocaleDateString(),
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
    reactionSchema: [reactionSchema],
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
    return this.reactionSchema.length;
  });

  module.exports = Thoughts;
