

  let wallet=document.querySelector("#balance")
  wallet.innerText=JSON.parse(localStorage.getItem("user")).wallet;

  let arr = JSON.parse(localStorage.getItem("purchase"))

  display(arr)

  function display(data){

    data.forEach(({name,image,price}) => {
      
      let mdiv=document.createElement("div")
        mdiv.setAttribute("class", "voucher")

        let img=document.createElement("img")
        img.setAttribute("src", image);
        img.style.width="400px"
        img.style.height="400px"

        let p = document.createElement("p")
        p.innerText = name;
        p.style.textAlign="center";

        let h5 = document.createElement("h5");
        h5.innerText = price;
        h5.style.textAlign="center";

        mdiv.append(img,p,h5)
       document.querySelector("#purchased_vouchers").append(mdiv)


    });


  }


