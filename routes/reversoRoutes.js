const express = require('express');
const Reverso = require('reverso-api');

const reverso = new Reverso();
const router = express.Router();

router.get('/', async (req, res) => {
  res.json('hello world');
});

router.get('/:word', async (req, res) => {
  try {
    const { language } = req.query;
    const selectedWord = req.params.word;
    const contextResponse = await reverso.getContext(
      selectedWord,
      'english',
      language
    );
    res.json(contextResponse);
  } catch (err) {
    res.status(500).json({ type: 'error', message: err.message });
  }
});

module.exports = router;
