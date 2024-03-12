const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('I have officially completed the "Create a continuous Pipeline Tutorial" on 3-11-24'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
