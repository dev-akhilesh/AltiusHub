const express = require('express');
const connectDB = require('./database/');

const app = express();
const port = process.env.PORT || 8080
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Working');
})

// Connect to mongoDB
connectDB();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
