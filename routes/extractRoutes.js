const { extract } = require('@extractus/article-extractor')
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.json('hello extractions');
});

router.get('/article', async (req, res) => {
    const { link } = req.query;
  
    try {
      const article = await extract(link);
      res.send(article);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error extracting article');
    }
  });
  

  module.exports = router;