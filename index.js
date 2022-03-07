const express = require('express');

const app = express();
const port = 3000;

// GET Default
app.get('/', (req, res) => {
    res.send(`
        <h1>Group 3</h1>
        <p>Steffano Immanuel Rondonuwu</p>
        <p>Anastasya Alicia Sumayku</p>
        <p>Enrique Giovanny Imanuel Sheriman</p>
        <p>Gilby Ezra Albert Koloay</p>
        <p>Stevali Mercella Item</p>
    `);
});

// DELETE users name
app.delete('/users/:name', (req, res) => {
    if(users.filter(r => r.name.toLowerCase() === req.params.name.toLowerCase()).length === 0) {
        res.send(JSON.stringify({
            message: "Data user tidak ditemukan."
        }));
    }
    else {
        users = users.filter(r => r.name.toLowerCase() !== req.params.name.toLowerCase());
        res.send(users);
    }
});

// Error handling
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send(JSON.stringify({
        status: 'error',
        message: "terjadi kesalahan pada server."
    }));
});

app.listen(port, () => console.log(`Server is running at http://localhost:${port}.`));

