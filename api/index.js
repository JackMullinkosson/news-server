const Reverso = require('reverso-api');
const express = require('express');

const reverso = new Reverso();
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/reverso', async (req, res) => {
  res.json('hello world')
});

app.get('/reverso/:word', async (req, res) => {
  try {
    const { language } = req.query;
    const selectedWord = req.params.word;
    const contextResponse = await reverso.getContext(
      selectedWord,
      'english',
      language
    );
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.json(contextResponse);
  } catch (err) {
    res.status(500).json({ type: 'error', message: err.message });
  }
});


const PORT = 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
