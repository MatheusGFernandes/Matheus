const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://Omnistack:omnistack9@omnistack-1qryn.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
});

app.use(cors());
app.use('/files', express.static(path.resolve(__dirname, '..', '/uploads')));
app.use(express.json());
app.use(routes);


app.listen(3333);