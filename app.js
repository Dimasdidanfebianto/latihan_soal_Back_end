const express = require('express');
const dotenv = require('dotenv');
const userRouter = require('./routes/users');
const app = express();

const middleWare = require ('./app/middlewares/log');
app.use(middleWare);

dotenv.config();

const PORT = process.env.PORT || 4000;


app.use('/api/users', userRouter);

module.exports = app;
app.listen(PORT, () => {
    console.log(`Server berhasil di runing di port ${PORT}`);
});
