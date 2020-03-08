const HomePage = require('../../pages/todo.po.js');

describe('angularjs homepage todo list', function() {
	homePage = new HomePage();
	homePage.visit();

	it('should add a todo', function() {
		homePage.add_todo();
		homePage.verify_todo();
	});
});