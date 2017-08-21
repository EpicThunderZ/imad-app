console.log('Loaded!');
var element = document.getElementById("main-text");
element.innerHTML = "New value";
//Move the image
var img =document.getElementById("madi");
function moveRight () {
    var marginLeft = 0;
    marginLeft-=10;
    img.style.marginleft = marginLeft+"px";
}
img.onclick = function () {
    var interval = setInterval(moveRight, 100);
};