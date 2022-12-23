

//!  121822.0830        VARIABLES    





//!  121822.0826        FUNCTIONS

const init = function () {
  main();
};

const main = function () {
  function bigBrother() {
    function littleBrother() {
      return "it is me!";
    }
    return littleBrother();
    function littleBrother() {
      return "no me!";
    }
  }

  // Before running this code, what do you think the output is?
  bigBrother();
};






window.onload = function () {
  init();
};
