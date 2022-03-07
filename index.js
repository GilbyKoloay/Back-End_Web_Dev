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

// PUT users name
app.put('/users/:name', (req, res) => {
    const {name} = req.body;
    
    if(users.filter(r => r.name.toLowerCase() === req.params.name.toLowerCase()).length === 0) {
        res.status(400).send(JSON.stringify({
            message: "Masukkan data yang akan diubah."
        }));
    }
    else if(name.length < 0 || !name.match(/[0-z]/i)) {
        res.status(400).send(JSON.stringify({
            message: "Masukkan data untuk mengubah data yang sudah ada."
        }));
    }
    else {
        users.forEach(r => {
            if(r.name.toLowerCase() === req.params.name.toLowerCase()) {
                r.name = name;
            }
        });

        res.send(users);
    }
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

// penanganan error
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send(JSON.stringify({
        status: 'error',
        message: "terjadi kesalahan pada server."
    }));
});

// Routing 404 handling
app.use((req, res, next) => {
    res.status(404).send(JSON.stringify({
        status: 'error',
        message: "resource tidak ditemukan.",
    }));
});

app.listen(port, () => console.log(`Server is running at http://localhost:${port}.`));

