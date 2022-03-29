const router = require('express').Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({extended: false});

const client = require('./connection');
const { ObjectId } = require('mongodb');



// GET - Default
router.get('/', (req, res) => {
    res.send(`
        <h1>Group 3</h1>
        <p>Steffano Immanuel Rondonuwu</p>
        <p>Anastasya Alicia Sumayku</p>
        <p>Enrique Giovanny Imanuel Sheriman</p>
        <p>Gilby Ezra Albert Koloay</p>
        <p>Stevali Mercella Item</p>
    `);
});



// GET - users
router.get('/users', async (req, res) => {
    const result = await client.db('db_latihan').collection('users').find().toArray();
    res.send({
        status: 'success',
        message: "GET all users.",
        data: result
    });
});



// GET - user's id
router.get('/users/:id', async (req, res) => {
    try {
        const result = await client.db('db_latihan').collection('users').find({_id: ObjectId(req.params.id)}).toArray();
        
        if(result.length > 0) {
            res.send({
                status: 'success',
                message: "GET single user (using id).",
                data: result
            });
        }
        else {
            res.send({
                status: 'warning',
                message: "data not found.",
            });
        }
    }
    catch(error) {
        res.send({
            status: 'error',
            message: error.message,
        });
    }
});



// POST - user
router.post('/users', urlencodedParser, async (req, res) => {
    try {
        const data = {
            name: req.body.name,
            age: req.body.age,
            status: req.body.status
        };

        const result = await client.db('db_latihan').collection('users').insertOne(data, (error, result) => {
            if(error) {
                res.send({
                    status: 'failed',
                    message: error.message
                });
            }
            else {
                res.send({
                    status: 'success',
                    message: 'one data inserted.',
                    addedData: data
                });
            }
        });
    }
    catch(error) {
        res.send({
            status: 'error',
            message: error.message,
        });
    }
});



// PUT - user
router.put('/users/:id', urlencodedParser, async (req, res) => {
    try {
        const data = {
            $set: {
                name: req.body.name,
                age: req.body.age,
                status: req.body.status
            }
        };

        const result = await client.db('db_latihan').collection('users').updateOne({_id: ObjectId(req.params.id)}, data, (error, result) => {
            if(error) {
                res.send({
                    status: 'failed',
                    message: error.message
                });
            }
            else {
                res.send({
                    status: 'success',
                    message: 'one data updated.',
                    addedData: data
                });
            }
        });
    }
    catch (error) {
        res.send({
            status: 'error',
            message: error.message,
        });
    }
});



// DELETE - user
router.delete('/users/:id', async (req, res) => {
    try {
        const result = await client.db('db_latihan').collection('users').deleteOne({_id: ObjectId(req.params.id)}, (error, result) => {
            if(error) {
                res.send({
                    status: 'failed',
                    message: error.message
                });
            }
            else {
                res.send({
                    status: 'success',
                    message: 'one data deleted.'
                });
            }
        });
    }
    catch(error) {
        res.send({
            status: 'error',
            message: error.message,
        });
    }
});

module.exports = router;
