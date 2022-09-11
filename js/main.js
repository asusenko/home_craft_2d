var gameName = "Home Craft 2D";

var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");

ctx.strokeStyle = "lightgrey";

var blockSize = 50;
var rows = 12;
var columns = 20;
var blocks = [];

//blocks.push('234sdfsdf');
//alert (blocks[0]);

for (var j = 0; j < rows; j++) {
    var y = j * blockSize;
    for (var i = 0; i < columns; i++){
        var x = i * blockSize;
        ctx.beginPath();
        ctx.rect(x, y, blockSize, blockSize);
        ctx.stroke();   
    }
}




var drawNameOfTheGame = function () {
    ctx.font = "25px Comic Sans MS";
    ctx.fillStyle = "Grey";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText(gameName, 10, 10)
  };

  drawNameOfTheGame();

var monetki = 0;  
  var drawCoins = function () {
    ctx.font = "25px Arial";
    ctx.fillStyle = "orange";
    ctx.textAlign = "right";
    ctx.textBaseline = "top";
    ctx.fillText("Monetki: " + monetki, 1000, 10);
  };
  drawCoins();

  $(  "#canvas1" ).on( "mousemove", function( event ) {
    var parentOffset = $(this).parent().offset();
    var relX = event.pageX - parentOffset.left;
    var relY = event.pageY - parentOffset.top;
    $( "#log" ).text( "pageX: " + relX + ", pageY: " + relY );
  });