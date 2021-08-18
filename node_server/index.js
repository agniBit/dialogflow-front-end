const express = require('express');
const routes = require('./routes');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.set({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': '*',
    });
    next()
})


app.use('/api', routes);

app.listen(9876, () => console.log('server is Up and running\nlocalhost:9876'));
