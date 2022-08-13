import {displaydata,news1} from '../components/sn.js'

let user = JSON.parse(localStorage.getItem("user"));

displaydata(user)

let c = JSON.parse(localStorage.getItem("cc"));

news1(c)
