var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext("2d");

setTimeout("paintStar()", 500);

function paintStar() {
    refreshControlPanel();
    //ctx2.drawImage(imageArray[1], 0, 0); 
    //ctx2.drawImage(imageArray[2], 50, 0);
}




var refreshControlPanel = function () {
    for (var j = 0; j < 1; j++) {
        var y = j * blockSize;
        for (var i = 0; i < 5; i++){
            var x = i * blockSize;
            ctx2.beginPath();
            ctx2.rect(x, y, blockSize, blockSize);
            ctx2.stroke();
            if (imageArray[i] != null){
                ctx2.drawImage(imageArray[i], x, y);
            }
        }
    }
};
