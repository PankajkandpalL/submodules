import {nav,displaydata,append,news,s1,s2,s3,s4,s5} from '../components/sn.js'

  document.getElementById("navbar").innerHTML=nav();

  let user = JSON.parse(localStorage.getItem("user"));

  displaydata(user)

  news(user.country);

  document.querySelector("#in").addEventListener("click", s1)

  document.querySelector("#us").addEventListener("click", s2)

  document.querySelector("#ch").addEventListener("click", s3)

  document.querySelector("#uk").addEventListener("click", s4)

  document.querySelector("#nz").addEventListener("click", s5)
