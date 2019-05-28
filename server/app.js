const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use((req, res, next) => {
  
  next();
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Sever started on PORT: ${port}`))

