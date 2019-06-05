const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

//Routes
const userRoute = require('./routes/user');
const profileRoute = require('./routes/profile');
const projectRoute = require('./routes/project');
const jobRoute = require('./routes/job');
const educationRoute = require('./routes/education');

//DB
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portfolio', {useNewUrlParser: true});

//Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  req.container = global.container;
  next();
});
app.use('/api/user', userRoute);
app.use('/api/profile', profileRoute);
app.use('/api/project', projectRoute);
app.use('/api/job', jobRoute);
app.use('/api/education', educationRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Sever started on PORT: ${port}`))

