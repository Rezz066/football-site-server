const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config();

const {PORT} = process.env || 7070

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})