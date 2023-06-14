const express = require('express');
const db = require('./db');
const cors = require("cors");
const router = require('./router');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(router);
app.use(cors());

app.get('/health', (req, res) => {
    return res.send('healthy');
});


db .then(() =>
    {
        app.listen(PORT, () => {
            console.log('Server is running on port: ' + PORT);
        })
    }
).catch((error) => {
    console.error('Error starting server', error.message);
})