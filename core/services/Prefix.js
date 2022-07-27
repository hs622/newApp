

module.exports = (prefix, app, ...routes) => {
	routes.forEach((route) => app.use(prefix, route));
};