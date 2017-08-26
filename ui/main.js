
var button = document.getElementById("counter");

button.onclick = function() {
    //Create a request objeact
    var request = new XMLHttpRequest();
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readystate === XMLHttpRequest.DONE) {
            if(request.status===200) {
                var counter = request.responseText;
                var span=document.getElementById('count');
                span.innerHTML = counter.toString();

            }
        }
        
    };
    
    //Make the request
    request.open('GET', 'http://janak31415et.imad.hasura-app.io/counter', true);
    request.send(null);
};
    