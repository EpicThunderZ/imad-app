/*
console.log('Loaded!');
var element = document.getElementById("main-text");
element.innerHTML = "New value";
//Move the image
var img =document.getElementById("madi");
var marginLeft = 0;
function moveRight () {
    marginLeft+=2;
    img.style.marginLeft = marginLeft+"px";
    console.log("done");
}
img.onclick = function () {
    var interval = setInterval(moveRight, 50);
};
*/
//Counter Code
var button = document.getElementById("counter");
button.onclick = function() {
    counter++;
    var span=document.getElementById("count");
    span.innerHTML = counter.toString();
    
};
    