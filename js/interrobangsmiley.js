"use strict";

(function(exports) {
  function interrobang(smiley, exclaim, question, string) {
    return (smiley(exclaim(question(string))));
  };

  exports.interrobang = interrobang;
})(this);
