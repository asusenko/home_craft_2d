var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");

ctx.strokeStyle = "lightgrey";

var imageArray = new Array(10);

for (var i = 1; i < 5; i++) {
  grassImage = new Image();
  grassImage.src = 'img/'+ i +'.png';
  imageArray[i] = grassImage;
}

var blocks = new Array(rows);		// В таблице rows строк
for(var i = 0; i < rows; i++)
    blocks[i] = new Array(columns);		// В каждой строке columns столбцов

var refreshMap = function () {
    for (var j = 0; j < rows; j++) {
        var y = j * blockSize;
        for (var i = 0; i < columns; i++){
            var x = i * blockSize;
            ctx.beginPath();
            ctx.rect(x, y, blockSize, blockSize);
            ctx.stroke();
              if (blocks[j][i] > 0) {
                  ctx.drawImage(imageArray[blocks[j][i]], x, y);
              } else {
                ctx.fillStyle = "white";
                  ctx.fillRect(x, y, blockSize, blockSize);
              }    
        }
    }
};
refreshMap();

var drawNameOfTheGame = function () {
    ctx.font = "25px Comic Sans MS";
    ctx.fillStyle = "Grey";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText(gameName, 10, 10)
  };
  drawNameOfTheGame();

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
  
  $( "#canvas1" ).click(function(event) {
    var parentOffset = $(this).parent().offset();
    var relX = event.pageX - parentOffset.left;
    var relY = event.pageY - parentOffset.top; 
    var blockX = Math.floor(relX / blockSize);
    var blockY = Math.floor(relY / blockSize);
    
    if (blocks[blockY][blockX] > 0) {
        blocks[blockY][blockX] = 0;
    } else {
        blocks[blockY][blockX] = currentTexture;
    }
    refreshMap();
    drawNameOfTheGame();
    drawCoins();
    //alert( "X-->" + blockX + "Y-->" + blockY) ;
  });

  $( "#canvas1" ).dblclick(function(event) {
    var parentOffset = $(this).parent().offset();
    var relX = event.pageX - parentOffset.left;
    var relY = event.pageY - parentOffset.top;
    var blockX = Math.floor(relX / blockSize);
    var blockY = Math.floor(relY / blockSize);
    blocks[blockY][blockX] = 2;
    refreshMap();
    drawNameOfTheGame();
    drawCoins();
   // alert( "X-->" + blockX + "Y-->" + blockY) ;
  });

  $( "#canvas2" ).click(function(event) {
    var parentOffset = $(this).parent().offset();
    var relX = event.pageX - parentOffset.left;
    var relY = event.pageY - parentOffset.top; 
    var blockX = Math.floor(relX / blockSize);
    var blockY = Math.floor(relY / blockSize);
    if ((blockX > 0) && (blockX < 5)){
      currentTexture = blockX;
    }
    // if (blocks[blockY][blockX] > 0) {
    //     blocks[blockY][blockX] = 0;
    // } else {
    //     blocks[blockY][blockX] = currentTexture;
    // }
    // refreshMap();
    // drawNameOfTheGame();
    // drawCoins();
    //alert( "X-->" + blockX + "Y-->" + blockY) ;
  });