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

/*
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
function loadLoginForm() {
    var loginHtml = `
         <h3>Login/Register to unlock awesome features</h3>
        <input type="text" id="username" placeholder="Username" />
        <input type="password" id="password" placeholder="Password"/>
        <br/><br/>
        <input type="submit" id="submit_btn" value="Login" />
        <input type="submit" id="register_btn" value="Register" />
        `;
    document.getElementById('login_area').innerHTML = loginHtml;

*/

//Submit username/password to login
var loginArea=document.getElementById('login_area');
var submit = document.getElementById("submit_btn");
submit.onclick = function () {
    //Create a request object
    var request = new XMLHttpRequest();

    //Capture the response and store it in a variable
     request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              // Take some action
              if (request.status === 200) {
                  alert('Success!');
                  login_area.innerHTML='<button id="logoutB">Logout</button>';
               } else if(request.status===403 || request.status===400 ) {
                   alert('Username/Password invalid');
               } else if (request.status===500) {
                   alert('Something went wrong on the server.');
               }
            }
        };
    
        var username=document.getElementById('username').value;
        var password = document.getElementById('password').value;
        request.open('POST', 'http://janak31415et.imad.hasura-app.io/login', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({username: username, password: password}));  
    };

  var logout=document.getElementById('logoutB');
  logout.onclick = function () {
    //Create a request object
    var request = new XMLHttpRequest();

    //Capture the response and store it in a variable
     request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              // Take some action
              if (request.status === 200) {
                  alert('Logged out!');
               } else if(request.status===403 || request.status===400 ) {
                   alert('Try again');
               } else if (request.status===500) {
                   alert('Something went wrong on the server.');
               }
            }
        };
        request.open('POST', 'http://janak31415et.imad.hasura-app.io/logout', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({username: username, password: password}));  
    };
