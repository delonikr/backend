const express = require('express'); 
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/user', require('./routes/user'));

app.listen(3000, () => console.log('Server berjalan di port 3000'));
