const Bear = require('../index.js');

const assert = require('assert');

describe('Bear',function(){
	var bear=new Bear();
	var result=bear.growl();

it('#should growl',function(){
	assert.equal(result,'The any bear says grr');
	});
});
