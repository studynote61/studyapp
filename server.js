const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

let questions;

// Read questions from questions.json
fs.readFile('questions.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    questions = JSON.parse(data);
});

app.get('/api/questions', (req, res) => {
    res.json(questions);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
