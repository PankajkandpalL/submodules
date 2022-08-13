/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/

import {f} from "../components/form.js"

  document.querySelector("#user-form").innerHTML=f();

  let form = document.getElementById("form");
  form.addEventListener("submit", sub)

  class person{
    constructor(pp,n,e,c)
    {
      this.name = n;
      this.image = pp;
      this.email = e;
      this.country = c;
    }
  }

  function sub(){

    event.preventDefault();

    let pp = form.user_pic.value;
    let nam = form.user_name.value;
    let e = form.user_email.value;
    let country = form.user_country.value;
    
    let obj = new person(pp,nam,e,country)

    localStorage.setItem("user", JSON.stringify(obj));

    form.user_pic.value=null
    form.user_name.value=null
    form.user_email.value=null

  }