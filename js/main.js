var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");

ctx.strokeStyle = "lightgrey";

var blockSize = 50;
var rows = 12;
var columns = 20;

for (var j = 0; j < rows; j++) {
    var y = j * blockSize;
    for (var i = 0; i < columns; i++){
        var x = i * blockSize;
        ctx.beginPath();
        ctx.rect(x, y, blockSize, blockSize);
        ctx.stroke();   
    }
}
