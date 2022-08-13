let form = document.querySelector("form");
form.addEventListener("submit", sub)

class user{
  constructor(n,e,a,am){
    this.name=n;
    this.email=e;
    this.address=a;
    this.wallet=Number(am); 
  }
}

function sub(){
  event.preventDefault();

  let name = form.name.value;
  let email = form.email.value;
  let address = form.address.value;
  let amount = form.amount.value;

  let obj = new user(name,email,address,amount);

  localStorage.setItem("user",JSON.stringify(obj));

  form.name.value="";
  form.email.value="";
  form.address.value="";
  form.amount.value="";

}

