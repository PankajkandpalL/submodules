// On clicking remove button the item should be removed from DOM as well as localstorage.

document.querySelector("#confirm_checkout").addEventListener("click", go)

function go(){
  window.location.href="checkout.html"
}

var arr=JSON.parse(localStorage.getItem("coffee")) || [];

displaydata(arr)

total(arr)

function total(arr){

var sum = arr.reduce(function(ac,el){
  
  return ac+el.price;

},0)

  document.querySelector("#total_amount").innerText=sum;

}






function displaydata(data){

document.querySelector("#bucket").innerHTML="";

data.forEach(function(el,index){

      let div = document.createElement("div")
      let img = document.createElement("img")
      img.setAttribute("src", el.image)
      img.style.height="300px"
      img.style.width="300px"

      let h2 = document.createElement("h2")
      h2.innerText = el.title;
      h2.style.textAlign="center"

      let price = document.createElement("p")
      price.innerText= "₹ "+el.price;
      price.style.textAlign="center"

      let buttond = document.createElement("div")
      buttond.style.display="flex"
      buttond.style.justifyContent="center"
      buttond.style.alignItems="center"
      let button = document.createElement("button")
      button.innerText="Remove"
      button.setAttribute("id", "remove_coffee") 
      button.addEventListener("click", function(){
        bucket(el,index);
      })
      buttond.append(button)

      div.append(img,h2,price,buttond)
      document.querySelector("#bucket").append(div)
    })
}


function bucket(el,index){

arr.splice(index,1)
localStorage.setItem("coffee", JSON.stringify(arr))

displaydata(arr)
total(arr)
window.location.reload();

}
