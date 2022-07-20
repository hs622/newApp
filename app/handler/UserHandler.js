const USERS = [
	{ id: 1, name: "zain ali", age: 24},
	{ id: 2, name: "hussain ali", age: 26},
	{ id: 3, name: "hassan ali", age: 26},
	{ id: 4, name: "zubair ali", age: 27},
];

module.exports.getUsers = (request, response) => {
	response.send(USERS).end();
}
	
module.exports.getUser = (request, response) => {
	if(parseInt(request.params.id)) {
		let user = USERS.find(u => u.id === parseInt(request.params.id))
		if(!user) response.status(404).send("The user with the given ID was not found.");
		response.send(user).end();
	}
}

module.exports.setUser = (request, response) => {
	const user = {
		id: users.length + 1,
		name: request.body.name,
		age: request.body.age
	};

	USERS.push(user);
	response.send(user);
}
