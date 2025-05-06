const express = require('express');
const bodyParser = require('body-parser');
const bukuRoutes = require('./routes/bukuRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/buku', bukuRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
