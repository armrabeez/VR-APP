const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const url ='mongodb://localhost/vahiclesDB';
const app = express();

mongoose.connect(url, {useNewUrlParser : true});
const con = mongoose.connection

con.on('open', () =>{
    console.log('Connected....'); 
});

app.use(express.json());
app.use(cors({
    origin:"*"
}))
const vehicles= require('./routes/vehicle');
app.use('/vehicles', vehicles);

app.listen(3000, () =>{
    console.log('Server is Started..');
});

