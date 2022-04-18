require('dotenv').config();
const express = require('express');
const userRt = require('./routers/userRt');
const loginRt = require('./routers/loginRt');
const categoryRt = require('./routers/categoryRt');
const errorMdw = require('./middlewares/errorMdw');

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRt);
app.use('/login', loginRt);
app.use('/categories', categoryRt);
app.use(errorMdw);

const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));
