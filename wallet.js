let balance = 0;

function update(){
  document.getElementById("balance").innerText = balance;
}

function deposit(){
  let amt = Number(document.getElementById("dep").value);
  if(amt > 0){
    balance += amt;
    update();
  }
}

function withdraw(){
  let amt = Number(document.getElementById("wit").value);
  if(amt <= balance){
    balance -= amt;
    update();
  } else {
    alert("Not enough balance");
  }
}
