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
function loadLoginForm() {
    var loginHTML=
    `
    <H3>Login</H3>
   <div>
        <input type="text" id="username" placeholder="username"/>
        <input type="password" id="password"/>
        <br>
        <input type="submit" id="submit_btn"/>
        <button id="register_btn">Register</button>
    </div>
    `;
}
var submit = document.getElementById("submit_btn");
submit.onclick = function () {
    //Create a request object
    var request = new XMLHttpRequest();
    submit.value="Submitting";
    submit.disabled=true;
    //Capture the response and store it in a variable
     request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              // Take some action
              if (request.status === 200) {
                  submit.disabled=false;
                  submit.value="Submit";
                  alert('Success!');
               } else if(request.status===403 || request.status===400 ) {
                   alert('Username/Password invalid');
                   submit.disabled=false;
                  submit.value="Submit";
               } else if (request.status===500) {
                   alert('Something went wrong on the server.');
                   submit.disabled=false;
                  submit.value="Submit";
               } else{
                   alert('Something went wrong on the server.');
                   submit.disabled=false;
                  submit.value="Submit";
               }
               loadLogin();
            }
        };
    
        var username=document.getElementById('username').value;
        var password = document.getElementById('password').value;
        request.open('POST', 'http://janak31415et.imad.hasura-app.io/login', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({username: username, password: password}));  
    };

function loadLoggedInUser (username) {
    var loginArea = document.getElementById('login_area');
    loginArea.innerHTML = `
        <h3> Hi <i>${username}</i></h3>
        <a href="/logout"><button>Logout</button></a>
    `;
}
function loadLogin () {
    // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                loadLoggedInUser(this.responseText);
            } else {
                loadLoginForm();
            }
        }
    };
    
    request.open('GET', '/check-login', true);
    request.send(null);
}

var register = document.getElementById("register_btn");
register.onclick = function () {
    //Create a request object
    var request = new XMLHttpRequest();
    register.value="registering";
    register.disabled=true;
    //Capture the response and store it in a variable
     request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              // Take some action
              if (request.status === 200) {
                  alert('User created!');
                  register.disabled=false;
                    register.value="Register";
               } else {
                   alert('Username/Password already in use or something went wrong on the server');
               }
            }
        };
    
        var username=document.getElementById('username').value;
        var password = document.getElementById('password').value;
        request.open('POST', 'http://janak31415et.imad.hasura-app.io/create-user', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({username: username, password: password}));  
    };

loadLogin();
