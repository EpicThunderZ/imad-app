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
var counter=0;
button.onclick = function () {
    //Make a request to the counter endpoint
    var request = new XMLHttpRequest();
    // Capture the respones and store it in a variaable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            //tAKE ACTION
        
            if(request.status === 200) {
               var counter = request.responseText;
               var span=document.getElementById("count");
               span.innerHTML = counter.toString();
            }
        }
    };
    //Make the request
    request.open('GET', 'http://janak31415et.imad.hasura.io/counter', true);    
    request.send(null);
};    