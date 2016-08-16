var assert = require('chai').assert;

var question = require("../../js/question").question;
var exclaim = require("../../js/exclaim").exclaim;
var interrobang = require("../../js/interrobangsmiley").interrobang;
var smiley = require("../../js/smiley").smiley;

describe("interrobang", function() {
  it("should add two question marks, an exclamation mark and a smiley to passed string", function() {
    assert.equal(interrobang(smiley, exclaim, question, "hello"), "hello??!:)");
  });
});
