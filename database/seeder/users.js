const bcrypt = require("bcrypt");
const User = require('../../schema/userSchema')
// generate salt to hash password
const salt = bcrypt.genSalt(10);

const DefaultUsers = {
	name: "hussain",
	email: "hussainarif622@gmail.com",
	password: "password"
};

User.find()
	.then((result) => {
		result.filter(u => u.name == DefaultUsers.name).length === 0 
			? seedUser() 
			: console.log("user already seed."); 
	})

seedUser = async () => {
	// now we set user password to hashed password
	DefaultUsers.password = await bcrypt.hash(DefaultUsers.password, salt);
	let newUser = new User(DefaultUsers);
	newUser.save()
		.then((user) => console.log("default user has been created.\n",user))
		.catch((err) => console.log("something get wrong while seeding user data.\n",err));
}