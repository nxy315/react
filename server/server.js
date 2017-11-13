const express = require('express');
const userRouter = require('./user');
const app = express();

app.use('/user', userRouter);

app.listen(8099, () => {
    console.log('listen at port 8099')
});