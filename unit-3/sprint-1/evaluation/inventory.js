//here, if the user clicks on the Add more products button he will get redirected to the index page where he can again add a new product by filling up the details
document.querySelector("#add_more_product").addEventListener("click", re)

function re(){
  window.location.href="index.html"
}


// here , I am getting the products data which user was filling in th form.
var arr=JSON.parse(localStorage.getItem("products"))

//here , I have appended that products data into the browser page.
displaydata(arr)

function displaydata(data){

  document.querySelector("#all_products").innerHTML="";

  var div=document.createElement("div")
  div.style.display="grid"
  div.style.gridTemplateColumns="1fr 1fr 1fr 1fr"
  div.style.gridTemplateRows="auto"
  div.style.gap="20px"
  div.style.margin="auto"
  div.style.width="70%"

  data.forEach(function(el,index){

    var mdiv=document.createElement("div")
    mdiv.style.borderRadius="10px"
    // mdiv.style.border="1px solid red"
    mdiv.style.boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"

    var img=document.createElement("img")
    img.setAttribute("src", el.image)
    img.style.height="250px"
    img.style.width="100%"
    img.style.borderTopLeftRadius="10px"
    img.style.borderTopRightRadius="10px"

    var bdiv=document.createElement("div")
    bdiv.style.padding="10px"

    var h3=document.createElement("h3")
    h3.innerText=el.type;
    bdiv.append(h3)

    var p=document.createElement("p")
    p.innerText=el.desc;
    bdiv.append(p)

    var price=document.createElement("h2")
    price.innerText="₹"+el.price
    bdiv.append(price)

    var btn=document.createElement("button")
    btn.style.cursor="pointer"
    btn.innerText="Remove"
    btn.setAttribute("id","remove_product")
    btn.addEventListener("click", function(){
      del(el,index)
    })
    bdiv.append(btn)

    mdiv.append(img,bdiv)
    div.append(mdiv)
  
  })

    document.querySelector("#all_products").append(div)
}

//this is the delete function when the user will click on the remove  button provided with every card.
function del(el,index){
    arr.splice(index, 1)
    localStorage.setItem("products", JSON.stringify(arr))
    
    displaydata(arr)
}
