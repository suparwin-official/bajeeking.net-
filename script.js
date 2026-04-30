// USERS DATABASE
let users = JSON.parse(localStorage.getItem("users")) || [];

/* =======================
   SIGNUP
======================= */
function signup(){
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if(!username || !password){
    alert("Username & Password required");
    return;
  }

  let exist = users.find(u => u.username === username);

  if(exist){
    alert("User already exists!");
    return;
  }

  let newUser = {
    name,
    email,
    phone,
    username,
    password,
    balance: 0
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registration successful!");
  window.location.href = "login.html";
}

/* =======================
   LOGIN
======================= */
function login(){
  let username = document.getElementById("login_user").value;
  let password = document.getElementById("login_pass").value;

  let user = users.find(
    u => u.username === username && u.password === password
  );

  if(user){
    localStorage.setItem("currentUser", JSON.stringify(user));
    alert("Login successful!");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid username or password");
  }
}

/* =======================
   FORGOT PASSWORD
======================= */
function forgotPassword(){
  let username = document.getElementById("fp_user").value;
  let newPassword = document.getElementById("fp_pass").value;

  let user = users.find(u => u.username === username);

  if(!user){
    alert("User not found");
    return;
  }

  user.password = newPassword;

  localStorage.setItem("users", JSON.stringify(users));

  alert("Password updated!");
  window.location.href = "login.html";
}

/* =======================
   GET USER
======================= */
function getUser(){
  return JSON.parse(localStorage.getItem("currentUser"));
}

/* =======================
   LOGOUT
======================= */
function logout(){
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
}
