const express = require('express');
const db = require('./db');
const cors = require("cors");
const router = require('./router');
const app = express();
require ("dotenv").config()
const PORT = process.env.PORT;



app.use(express.json());
app.use(cors({
    origin: 'https://react-dental-clinic.vercel.app',
}));
app.use(cors(router));

app.get('/health', (req, res) => {
    return res.send('healthy');
});


db.then(() =>
    {
        app.listen(PORT, () => {
            console.log('Server is running on port: ' + PORT);
        })
    }
).catch((error) => {
    console.error('Error starting server', error.message);
})

module.exports = app;