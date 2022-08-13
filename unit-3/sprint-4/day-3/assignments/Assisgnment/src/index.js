import { nav,append } from "../components/navbar.js";
import '../styles/style.css'
import axios from 'axios'

document.querySelector("#navbar").innerHTML = nav();


async function ap(){
   
    let con = document.querySelector("#container");
    let data = await axios.get('https://fakestoreapi.com/products/category/electronics')
    append(data.data,con)
  }

  ap();
  
  

  
