var assert = require('chai').assert;
var smiley = require('../../js/smiley.js').smiley;
describe("smiley", function() {
	it("should add :) to a string",
		function() {
			assert.equal(smiley("hello"), "hello:)");
		});
});
