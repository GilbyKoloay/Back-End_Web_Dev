const mongoose = require('mongoose');
const users = require('./users');

// mongoose.connect("mongodb://user_latihan:123456@localhost:27017/db_latihan", () => {
mongoose.connect("mongodb://localhost:27017/db_latihan", () => {
    console.log(`Connected to database.`);
}, (e) => {
    console.log(`Failed to connect to database. ${e}`);
});

// run();
// async function run() {
//     console.log(`Running`);
//     try {
//         const result = await users.find();
//         console.log(result);
//     } catch(e) {
//         console.log(e.message);
//     }
// }
