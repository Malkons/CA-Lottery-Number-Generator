// Need to generate random numbers based on the lottery played in California
$(document).ready(function() {
  // Arrays to hold lotto numbers
  var powerBall = [];
  var megaMillions = [];
  var superLotto = [];
  var fantasyFive = [];

  function powerBallf() {
    // Powerball-picks 5 unique numbers from 1-69,
    while (powerBall.length < 5) {
      var pBranLottoNum = Math.floor(Math.random() * 69) + 1;
      // checks for duplicate random numbers.
      if (powerBall.indexOf(pBranLottoNum) === -1) {
        powerBall.push(pBranLottoNum);
        console.log(powerBall);
      }
    } // end of powerBall Loop

    for (i = 0; i < powerBall.length; i++) {
      var div = $("<div>");
      var img = $("<img>");
      div.addClass("image");
      img.attr("src", "./assets/images/pingPongBallTrans.png");
      img.appendTo(div);
      $("<p>"+ powerBall[i] + "</p>").appendTo(div); 
      $("#powerBall").append(div);
    }

    // One number 1-26, from a second group of numbers.
    powerBallMegaNum = Math.floor(Math.random() * 26) + 1;
    var div = $("<div>");
    var img = $("<img>");
    var ptag = $("<p>", {class: "mega"});
    div.addClass("image");
    ptag.text(powerBallMegaNum);
    img.attr("src","./assets/images/pingPongBallRedTrans.png");
    img.appendTo(div);
    ptag.appendTo(div);
    $("#powerBall").append(div);
    console.log(powerBallMegaNum);
  } // end of powerBallf function

  function megaMillionsf() {
    // MegaMillions-picks 5 unique numbers from 1-70.
    while (megaMillions.length < 5) {
      var mMranLottoNum = Math.floor(Math.random() * 70) + 1;
      // checks for duplicate random numbers.
      if (megaMillions.indexOf(mMranLottoNum) === -1) {
        megaMillions.push(mMranLottoNum);
        console.log(megaMillions);
      }
    } // end of megaMillions Loop

    for (i = 0; i < megaMillions.length; i++) {
      var div = $("<div>");
      var img = $("<img>");
      div.addClass("image");
      img.attr("src", "./assets/images/pingPongBallTrans.png");
      img.appendTo(div);
      $("<p>"+ megaMillions[i] + "</p>").appendTo(div); 
      $("#megaMillions").append(div);
    }

    // One number 1-25, from a second group of numbers.
    megaMillionsMegaNum = Math.floor(Math.random() * 25) + 1;
    var div = $("<div>");
    var img = $("<img>");
    var ptag = $("<p>", {class: "mega"});
    div.addClass("image");
    ptag.text(megaMillionsMegaNum);
    img.attr("src","./assets/images/pingPongBallRedTrans.png");
    img.appendTo(div);
    ptag.appendTo(div);
    $("#megaMillions").append(div);
    console.log(megaMillionsMegaNum);
  } // end of megaMillionsf function

  function superLottof() {
    // SuperLottoPlus-pick 5 unique numbers from 1-47.
    while (superLotto.length < 5) {
      var sLranLottoNum = Math.floor(Math.random() * 47) + 1;
      // checks for duplicate random numbers.
      if (superLotto.indexOf(sLranLottoNum) === -1) {
        superLotto.push(sLranLottoNum);
        console.log(superLotto);
      }
    } // end of superLotto Loop

    for (i = 0; i < superLotto.length; i++) {
      var div = $("<div>");
      var img = $("<img>");
      div.addClass("image");
      img.attr("src", "./assets/images/pingPongBallTrans.png");
      img.appendTo(div);
      $("<p>"+ superLotto[i] + "</p>").appendTo(div); 
      $("#superLotto").append(div);
    }

    // one number 1-27, from a second group of numbers.
    superLottoMegaNum = Math.floor(Math.random() * 27) + 1;
    var div = $("<div>");
    var img = $("<img>");
    var ptag = $("<p>", {class: "mega"});
    div.addClass("image");
    ptag.text(superLottoMegaNum);
    img.attr("src","./assets/images/pingPongBallRedTrans.png");
    img.appendTo(div);
    ptag.appendTo(div);
    $("#superLotto").append(div);
    console.log(superLottoMegaNum);
  } // end of superLottof function

  function fantasyFivef() {
    // Fantasy5-pick 5 unique numbers from 1-39.
    while (fantasyFive.length < 5) {
      var fFranLottoNum = Math.floor(Math.random() * 39) + 1;
      // checks for duplicate random numbers.
      if (fantasyFive.indexOf(fFranLottoNum) === -1) {
        fantasyFive.push(fFranLottoNum);
        console.log(fantasyFive);
      }
    } // end of Fantasy5 Loop

    for (i = 0; i < fantasyFive.length; i++) {
      var div = $("<div>");
      var img = $("<img>");
      div.addClass("image");
      img.attr("src", "./assets/images/pingPongBallTrans.png");
      img.appendTo(div);
      $("<p>"+ fantasyFive[i] + "</p>").appendTo(div); 
      $("#fantasyFive").append(div);
    }
  } // end of fantasyFivef function

  //Buttons
  $("#allNewBtn").on("click", function() {
    powerBall = [];
    megaMillions = [];
    superLotto = [];
    fantasyFive = [];
    $("#powerBall").empty();
    $("#megaMillions").empty();
    $("#superLotto").empty();
    $("#fantasyFive").empty();
    powerBallf();
    megaMillionsf();
    superLottof();
    fantasyFivef();
  });

  $("#powerBallBtn").on("click", function() {
    powerBall = [];
    $("#powerBall").empty();
    powerBallf();
  });

  $("#megaMillionsBtn").on("click", function() {
    megaMillions = [];
    $("#megaMillions").empty();
    megaMillionsf();
  });

  $("#superLottoBtn").on("click", function() {
    superLotto = [];
    $("#superLotto").empty();
    superLottof();
  });

  $("#fantasyFiveBtn").on("click", function() {
    fantasyFive = [];
    $("#fantasyFive").empty();
    fantasyFivef();
  });
}); // end of document ready
