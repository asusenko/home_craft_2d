var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");

ctx.strokeStyle = "lightgrey";

for (var j = 0; j < 12; j++) {
    var y = j * 50;
    for (var i = 0; i < 20; i++){
        var x = i * 50;
        ctx.beginPath();
        ctx.rect(x, y, 50, 50);
        ctx.stroke();   
    }
}
