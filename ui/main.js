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

loadLogin();
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
    console.log("Loading login status")
    // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                loadLoggedInUser(this.responseText);
            } else if(request.status===400) {
                loadLoginForm();
            } else{
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
    register.value="Registering";
    register.disabled=true;
    //Capture the response and store it in a variable
             request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              // Take some action
              if (request.status === 200) {
                  alert('User created successfully');
                  register.value = 'Registered!';
                  register.disabled=false;
              } else {
                  alert('Could not register the user');
                  register.value = 'Register';
                register.disabled=false;
              }
          }
        };

        var username=document.getElementById('username').value;
        var password = document.getElementById('password').value;
        request.open('POST', 'http://janak31415et.imad.hasura-app.io/create-user', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({username: username, password: password}));
    };