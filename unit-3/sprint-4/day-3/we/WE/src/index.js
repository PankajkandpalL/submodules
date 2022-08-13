import nav from "../components/navbar.js";

import '../styles/style.css'

import axios from 'axios'


let navbar_div = document.querySelector("#navbar");

navbar_div.innerHTML = nav();


async function fect(){
    let data = await axios.get('https://fakestoreapi.com/products/category/electronics')
    console.log(data)
}


fect();