const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { User, Score, Question } = require('./schema');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(cors());

async function DBconnection() {
  try {
    await mongoose.connect('mongodb://localhost:27017/QuizDB1');
    app.listen(port, function () {
      console.log(`Connected to DB,Listening to port : ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
DBconnection();

app.get('/', function (request, response) {
  response.send('Welcome to Learning APP');
});

// User signup
app.post('/signup', async function (request, response) {
  try {
    const { username, emailid, password } = request.body;

    const existingUser = await User.findOne({ emailid });
    if (existingUser) {
      return response.status(409).json({ error: 'User with this email already exists. Please login.' });
    }

    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return response.status(409).json({ error: 'Username is already taken. Please choose another one.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailid)) {
      return response.status(400).json({ error: 'Invalid email format.' });
    }

    if (password.length < 6) {
      return response.status(400).json({ error: 'Password must be at least 6 characters long.' });
    }

    const encryptedUserPassword = await bcrypt.hash(password, 10);

    await User.create({
      username,
      emailid,
      password: encryptedUserPassword,
    });

    response.status(201).json({ status: 'success', msg: 'User added successfully.' });
  } catch (error) {
    console.error('Error during signup:', error);
    response.status(500).json({ status: 'failure', msg: "Couldn't signup. Please try again later.", error: error.message });
  }
});

// User login
app.post('/login', async (request, response) => {
  try {
    const { emailid, password } = request.body;
    if (!(emailid && password)) {
      return response.status(400).json({ error: 'Email and password are required.' });
    }

    const user = await User.findOne({ emailid });
    if (!user) {
      return response.status(400).json({ error: 'User not found.' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return response.status(400).json({ error: 'Password is incorrect.' });
    }

    console.log('Login Successful!!!');
    response.status(200).json({ message: 'Login successful', username: user.username });
  } catch (error) {
    console.error('Error during login:', error);
    return response.status(500).json({ error: 'An unexpected error occurred during login.' });
  }
});

// Save score
app.post('/savescore', async (request, response) => {
  try {
    const { emailid, score, topic } = request.body;
    if (!(emailid && score && topic)) {
      return response.status(400).json({ error: 'Email, score, and topic are required.' });
    }

    await Score.create({ emailid, score, topic });

    response.status(201).json({ message: 'Score saved successfully.' });
  } catch (error) {
    console.error('Error saving score:', error);
    response.status(500).json({ error: 'An error occurred while saving the score.' });
  }
});

// Update lives
app.post('/updateLives', async (req, res) => {
  try {
    const { emailid, lives, lastLifeLost } = req.body;
    if (!(emailid && lives !== undefined && lastLifeLost)) {
      return res.status(400).json({ error: 'Email, lives, and lastLifeLost are required.' });
    }

    const user = await User.findOneAndUpdate(
      { emailid },
      { lives, lastLifeLost },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    res.status(200).json({ message: 'Lives updated successfully.', user });
  } catch (error) {
    console.error('Error updating lives:', error);
    res.status(500).json({ error: 'An error occurred while updating lives.' });
  }
});

app.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'An error occurred while fetching users.' });
  }
});


// Get user lives
app.get('/getLives', async (req, res) => {
  try {
    const { emailid } = req.query;
    if (!emailid) {
      return res.status(400).json({ error: 'Email is required.' });
    }

    const user = await User.findOne({ emailid });
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    res.status(200).json({ lives: user.lives, lastLifeLost: user.lastLifeLost });
  } catch (error) {
    console.error('Error fetching user lives:', error);
    res.status(500).json({ error: 'An error occurred while fetching user lives.' });
  }
});

app.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }
    res.status(200).json({ message: 'User deleted successfully.' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'An error occurred while deleting the user.' });
  }
});

module.exports = app;
