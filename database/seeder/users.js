const User = require('../../schema/userSchema')

const DefaultUsers = {
	name: "hussain",
	email: "hussainarif622@gmail.com",
	password: "password",
	dob: "1995-10-07",
	gender: "male"
};

User.find()
	.then((result) => {
		result.filter(u => u.name == DefaultUsers.name).length === 0 
			? seedUser() 
			: console.log("user already seed.");
	})

seedUser = async () => {
	let newUser = new User(DefaultUsers);
	newUser.save()
		.then((user) => console.log("default user has been created.\n",user))
		.catch((err) => console.log("something get wrong while seeding user data.\n",err));
}