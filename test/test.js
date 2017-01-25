var math = require('../index.js');
var assert = require('assert');

describe('Math test',function(){
	
	it('#should add two numbers',function(){
		assert.equal(math.add(2,2),4);
	});
});
