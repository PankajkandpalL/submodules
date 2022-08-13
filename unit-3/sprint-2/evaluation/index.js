// Add the coffee to local storage with key "coffee"

main();

async function main(){

  const url = `https://masai-mock-api.herokuapp.com/coffee/menu`

  let user = await fetch(url)
  let data = await user.json();

  append(data)
  // console.log(data)
}

function append(data){

    let type = data.type;
    // console.log(type);

    let arr=data.menu.data;

    

    arr.forEach(function(el){
      let div = document.createElement("div")

      let img = document.createElement("img")
      img.setAttribute("src", el.image)
      img.style.height="300px"
      img.style.width="300px"
      img.style.borderTopRightRadius="10px"
      img.style.borderTopLeftRadius="10px"

      let h2 = document.createElement("h2")
      h2.innerText = el.title;
      h2.style.fontStyle="italic"
      h2.style.textAlign="center"

      let price = document.createElement("p")
      price.innerText= "₹ "+el.price;
      price.style.textAlign="center"

      let buttond = document.createElement("div")
      buttond.style.display="flex"
      buttond.style.justifyContent="center"
      buttond.style.alignItems="center"
      let button = document.createElement("button")
      button.innerText="ADD TO BUCKET"
      button.setAttribute("id", "add_to_bucket") 
      button.addEventListener("click", function(){
        bucket(el);
      })
      buttond.append(button)

      div.append(img,h2,price,buttond)
      document.querySelector("#menu").append(div)
    })

}

var arr=JSON.parse(localStorage.getItem("coffee")) || []

let divc=document.querySelector("#coffee_count")
divc.innerText=arr.length;

function bucket(el){

  arr.push(el)
  localStorage.setItem("coffee", JSON.stringify(arr));
  window.location.reload();
  

}

