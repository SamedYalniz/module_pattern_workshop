var assert = require('chai').assert;
var smiley = require('../../js/smiley.js').smiley;

describe("smiley", function() {
	it("should return a :) smiley",
		function() {
			assert.equal(smiley(":)"), ":)");
		});
});
