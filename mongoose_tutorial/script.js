const mongoose = require('mongoose');
const User = require('./User');

mongoose.connect("mongodb://user_latihan:123456@localhost:27017",
() => {
    console.log("Connected to database.");
}, (e) => {
    console.log(`Error. ${e}`);
});

run();
async function run() {
    try {
        // const user = await User.create({
        //     name: "Kyle", 
        //     age: 26,
        //     email: "TEST@test.com",
        //     hobbies: ["Weight Lifting", "Bowling"],
        //     address: {
        //         street: "Main St.",
        //     }
        // });
        
        // // user.createdAt = 5;
        // // await user.save();

        // console.log(user);



        const user = await User.
            // findById("624e7f96bc68623e0b7261e9");
            // findOne({name: "Kyle"});
            // exists({name: "Kyle"});
            // deleteOne({name: "Kyle"});
            // where("name").equals("Kyle");
            // where("age")
            // .gt(12)
            // .lt(21)
            // .where("name")
            // .equals("Kyle")
            // .limit(1)
            // .select("age")
            // .populate("bestFriend")
            // user[0].bestFriend = "624e7d9abb03329ffeefe6b1";
            // await user[0].save();
            // findByName("Kyle");
            // where().byName("Kyle");
            findOne({name: "Kyle", email: "test@test.com"});

        console.log(user);
        await user.save();
        console.log(user);
        // user.sayHi();
        console.log(user.namedEmail);
    }
    catch(e) {
        console.log(e.message);
    }
    
    // user.name = "Sally";
    // user.save();

    // const user = new User({
    //     name: "Kyle", 
    //     age: 26,
    // });
    // await user.save();
}
