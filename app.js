const express = require('express');
const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => { 

    res.sendFile(__dirname + '/index.html');
})
app.get('/detay/:id', (req, res) => {

    res.sendFile(__dirname + '/detay.html');   
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});