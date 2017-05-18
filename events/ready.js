const chalk = require('chalk');
module.exports = client => {
	console.log(chalk.green.black("I'm online!"));

	client.user.setGame("Best Girl");
}