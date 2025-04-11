const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  emailid: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

// Define the Score schema
const scoreSchema = new mongoose.Schema({
  emailid: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
});

const Score = mongoose.model('Score', scoreSchema);

// Define the Question schema
const questionSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  questionArray: [{
    questions: {
      type: String,
      required: true
    },
    options: [{
      option: {
        type: String,
        required: true
      },
      isCorrect: {
        type: Boolean,
        required: true
      },
      id: {
        type: Number,
        required: true
      }
    }],
    correctAnswer: {
      type: String,
      required: true
    }
  }]
});

const Question = mongoose.model('Question', questionSchema);

module.exports = { User, Score, Question };
