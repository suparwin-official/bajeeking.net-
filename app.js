import { login, register, getUser, logout } from "./auth.js";

/* LOGIN HANDLER */
window.handleLogin = function(){
  let u = document.getElementById("user").value;
  let p = document.getElementById("pass").value;

  if(login(u, p)){
    alert("Login success");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials");
  }
};

/* REGISTER HANDLER */
window.handleRegister = function(){
  let userData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    whatsapp: document.getElementById("whatsapp").value,
    telegram: document.getElementById("telegram").value,
    username: document.getElementById("user").value,
    password: document.getElementById("pass").value
  };

  register(userData);
};

/* LOAD DASHBOARD USER */
window.loadUser = function(){
  let user = getUser();

  if(!user){
    window.location.href = "login.html";
    return;
  }

  document.getElementById("username").innerText = user.name;
  document.getElementById("email").innerText = user.email;
};
