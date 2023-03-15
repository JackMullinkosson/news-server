const express = require('express');
const reversoRoutes = require('./routes/reversoRoutes');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/reverso', reversoRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
