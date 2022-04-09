const router = require('express').Router();
require('./mongoose');
const users = require('./users');

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});

// GET default
router.get('/', (req, res) => {
    res.send(`<h1>Group 3</h1>
        <p>Steffano Immanuel Rondonuwu</p>
        <p>Anastasya Alicia Sumayku</p>
        <p>Enrique Giovanny Imanuel Sheriman</p>
        <p>Gilby Ezra Albert Koloay</p>
        <p>Stevali Mercella Item</p>
    `);
});

// GET all users
router.get('/users', async (req, res) => {
    try {
        const result = await users.find();

        res.send({
            status: 'success',
            message: 'GET all users',
            result: result,
        });
    } catch(e) {
        res.send({
            status: 'error',
            message: e.message,
        });
    } 
});

// GET user using ID
router.get('/users:id', async (req, res) => {
    try {
        let id = req.params.id;
        id = id.split('');
        id.shift();
        id = id.join('');
        // console.log(`${req.params.id} | ${id}`);

        const result = await users.findById(id);

        res.send({
            status: (typeof(result) === 'object') ? 'success' : 'warning',
            message: (typeof(result) === 'object') ? 'GET user using ID (found 1 data)' : 'Data not found',
            result: (typeof(result) === 'object') ? result : null,
        });
    } catch(e) {
        res.send({
            status: 'error',
            message: e.message,
        });
    } 
});

// POST users
router.post('/users', urlencodedParser, async (req, res) => {
    try {
        // console.log(`Data: 
        // ${req.body.name}
        // ${req.body.age}
        // ${req.body.status}`);

        const result = await users.create({
            name: req.body.name,
            age: req.body.age,
            status: req.body.status,
        });
        
        res.send({
            status: (typeof(result) === 'object') ? 'success' : 'warning',
            message: (typeof(result) === 'object') ? 'Insert 1 data' : 'Data could not be inserted.',
            result: (typeof(result) === 'object') ? result : null,
        });
    } catch(e) {
        res.send({
            status: 'error',
            message: e.message,
        });
    }
});

// PUT users using ID
router.put('/users:id', urlencodedParser, async (req, res) => {
    try {
        let id = req.params.id;
        id = id.split('');
        id.shift();
        id = id.join('');

        const result = await users.updateOne({_id: id}, {
            name: req.body.name,
            age: req.body.age,
            status: req.body.status,
        });
        
        res.send({
            status: (typeof(result) === 'object') ? 'success' : 'warning',
            message: (typeof(result) === 'object') ? 'Updated 1 data' : 'Data could not be updated.',
            result: (typeof(result) === 'object') ? result : null,
        });
    } catch(e) {
        res.send({
            status: 'error',
            message: e.message,
        });
    }
});

// DELETE user using ID
router.delete('/users:id', async (req, res) => {
    try {
        let id = req.params.id;
        id = id.split('');
        id.shift();
        id = id.join('');

        const result = await users.deleteOne({_id: id});

        res.send({
            status: (typeof(result) === 'object') ? 'success' : 'warning',
            message: (typeof(result) === 'object') ? 'GET user using ID (found 1 data)' : 'Data not found',
            result: (typeof(result) === 'object') ? result : null,
        });
    } catch(e) {
        res.send({
            status: 'error',
            message: e.message,
        });
    } 
});



module.exports = router;
