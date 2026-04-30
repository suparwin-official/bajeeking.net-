/* AUTH SYSTEM (LocalStorage Demo Backend) */

export function register(userData){
  let users = JSON.parse(localStorage.getItem("users")) || [];

  let exists = users.find(u => u.username === userData.username);

  if(exists){
    alert("User already exists");
    return false;
  }

  users.push(userData);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Account created successfully");
  return true;
}

export function login(username, password){
  let users = JSON.parse(localStorage.getItem("users")) || [];

  let user = users.find(u => u.username === username && u.password === password);

  if(user){
    localStorage.setItem("currentUser", JSON.stringify(user));
    return true;
  }

  return false;
}

export function logout(){
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
}

export function getUser(){
  return JSON.parse(localStorage.getItem("currentUser"));
}
