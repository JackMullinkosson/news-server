const express = require('express');
const reversoRoutes = require('./routes/reversoRoutes');
const extractRoutes = require('./routes/extractRoutes');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/reverso', reversoRoutes);

app.use('/extract', extractRoutes)

const PORT = 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
