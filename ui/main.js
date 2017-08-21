console.log('Loaded!');
var element = document.getElementById("main-text");
element.innerHTML = "New value";
//Move the image
var img =document.getElementById("madi");
var marginLeft = 0;
function moveRight () {
    marginLeft+=10;
    img.style.marginleft = marginLeft+"px";
    console.log("done");
}
img.onclick = function () {
    var interval = setInterval(moveRight, 100);
};