/*
//Counter code
var button = document.getElementById('counter');
button.onclick = function() {
    
    //Create a request object
    var request = new XMLHttpRequest();
    console.log('clicked');

    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            //Take some action
            if(request.status === 200) {
                var counter = request.responseText;
                console.log(counter);
                var span=document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        //Not Done Yet
    };
    
    //Make the request
    request.open('GET', 'http://janak31415et.imad.hasura-app.io/counter', true);
    request.send(null);
};


//Submit Name
var submit = document.getElementById("submit_btn");
submit.onclick = function () {
    //Create a request object
    var request = new XMLHttpRequest();
    console.log('clicked');

    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            //Take some action
            if(request.status === 200) {
                //Capture a list of names and render it as a list
    var names = request.responseText;
    names= JSON.parse(names);
    var list = "";
    for(var i=0; i<names.length; i++) {
        list+='<li>'+names[i] + '</li>';
    

    }
    var ul = document.getElementById("namelist");
    ul.innerHTML=list;
            }
        }
        //Not Done Yet
    };
    
    //Make the request
    var nameInput = document.getElementById("name");
var name = nameInput.value;
    request.open('GET', 'http://janak31415et.imad.hasura-app.io/submit-name?name='+name, true);
    request.send(null);
    //Make a request to the server and send the name
    
    

    };
*/
//Submit username/password to login
var submit = document.getElementById("submit_btn");
submit.onclick = function () {
    //Create a request object
    var request = new XMLHttpRequest();
    console.log('clicked');

    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            //Take some action
            if(request.status === 200) {
               console.log('User logged on.');
               alert('Logged in successfully.');
            } else if(request.status === 400 || request.status===403) {
                console.log('Credentials entered are wrong');
                alert('Username/password is incorrect.');
            } else if(request.status === 500) {
                alert('Something went wrong on the server.');
            }
        }
        //Not Done Yet
    };
    
    //Make the request
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log(username);
    console.log(password);
    request.open('POST', 'http://janak31415et.imad.hasura-app.io/login', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({username: username, password: password}));
    //Make a request to the server and send the name
    
    

    };
    
var reg = document.getElementById("register_btn");
reg.onclick = function () {
    //Create a request object
    var request = new XMLHttpRequest();
    console.log('clicked reg');

    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            //Take some action
            if(request.status === 200) {
               console.log('User Created.');
               alert('User Created.');
            } else if(request.status === 400 || request.status===403) {
                console.log('400 OR 403 ERROR');
                alert('400 OR 403 ERROR');
            } else if(request.status === 500) {
                alert('The username/password entered is already in use.');
            }
        }
        //Not Done Yet
    };
    
    //Make the request
    var Rusername = document.getElementById("username").value;
    var Rpassword = document.getElementById("password").value;
    console.log(Rusername);
    console.log(Rpassword);
    request.open('POST', 'http://janak31415et.imad.hasura-app.io/create-user', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({username: Rusername, password: Rpassword}));
    //Make a request to the server and send the name
    
    

    };