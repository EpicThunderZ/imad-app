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
var button = document.getElementById("Counter");
var counter=0;
button.onclick = function () {
    //Make a request to the counter endpoint
    // Capture the respones and store it in a variaable
    //Render the variable in the correct span
    counter++;
    var span=document.getElementById("Count");
    span.innerHTML = counter.toString();
}