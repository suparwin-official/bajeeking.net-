function login(){
  let stored = JSON.parse(localStorage.getItem("bajeeking_user"));

  let u = document.getElementById("login_user").value;
  let p = document.getElementById("login_pass").value;

  if(stored && u === stored.username && p === stored.password){
    localStorage.setItem("logged_in", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid login");
  }
}
