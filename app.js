const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const userRouter = require('./routes/users');
const app = express();

const middleWare = require ('./app/middlewares/log');
app.use(middleWare);
app.use(express.json()); 

dotenv.config();



const PORT = process.env.PORT || 4000;


app.use('/api/users', userRouter);
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('Internal Server Error');
})

module.exports = app;
app.listen(PORT, () => {
    console.log(`Server berhasil di runing di port ${PORT}`);
});
