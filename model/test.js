const { Schema, model } = require("mongoose");

const testSchema = Schema({
  question: {
    type: String,
    required: [true, "Question is required"],
  },
  answers: {
    type: Array,
    required: [true, "Options is required"],
  },
  rightAnswer: {
    type: String,
    required: [true, "Answer is required"],
  },
});

const Theory = model("qa-theory", testSchema);
const Practice = model("qa-practice", testSchema);

module.exports = {
  Theory,
  Practice,
};
