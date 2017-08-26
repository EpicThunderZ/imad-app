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
    //Create a request objeact
    var request = new XMLHttpRequest();
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readystate === XMLHttpRequest.DONE) {
            if(request.status===200) {
                var counter = request.responseText;
                var span=document.getElementById("count");
                span.innerHTML = counter.toString();

            }
        }
        
    }
    
    //Make the request
    request.open('GET', 'http://janak31415et.imad.hasura-app.io/counter', true);
    request.send(null);
};
    