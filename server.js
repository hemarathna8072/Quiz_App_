const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get('/questions', (req, res) => {
  fs.readFile(path.join(__dirname, 'questions.json'), 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading file' });
    }
    res.json(JSON.parse(data));
  });
});

app.post('/questions', (req, res) => {
  const newQuestion = req.body;

  fs.readFile(path.join(__dirname, 'questions.json'), 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading file' });
    }

    let questions = JSON.parse(data);

    let categoryExists = false;
    questions = questions.map(category => {
      if (category.category === newQuestion.category) {
        categoryExists = true;
        category.questionArray.push(newQuestion.question);
      }
      return category;
    });

    if (!categoryExists) {
      questions.push({
        category: newQuestion.category,
        questionArray: [newQuestion.question]
      });
    }

    fs.writeFile(path.join(__dirname, 'questions.json'), JSON.stringify(questions, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error writing file' });
      }
      res.status(200).json({ message: 'Question saved successfully!' });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
