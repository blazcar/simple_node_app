const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1> My first node app at PLU </h1>');
});

app.listen(5000, () => {
    console.log('App is listening on port 3000');
})
