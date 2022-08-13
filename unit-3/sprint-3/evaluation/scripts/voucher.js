

  let obj = JSON.parse(localStorage.getItem("user"));

  display(obj)

  function display(obj){
    let bal = document.querySelector("#wallet_balance");
    bal.innerText=obj.wallet;
  }


  async function upper(){
    
      const url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`

      let data = await fetch(url)
      let user = await data.json();

      console.log(user[0].vouchers);
      append(user[0].vouchers);

  }
  upper();


    function append(data){

      data.forEach(({name,image,price}) => {
        
        let mdiv=document.createElement("div")
        mdiv.setAttribute("class", "voucher")

        let img=document.createElement("img")
        img.setAttribute("src", image);
        img.style.width="300px"
        img.style.height="300px"

        let p = document.createElement("p")
        p.innerText = name;
        p.style.textAlign="center";

        let h5 = document.createElement("h5");
        h5.innerText = price;
        h5.style.textAlign="center";

        let bdiv = document.createElement("div")
        bdiv.style.display="flex";
        bdiv.style.justifyContent="center";
        bdiv.style.alignItems="center";

        let btn = document.createElement("button");
        btn.setAttribute("class","buy_voucher")
        btn.innerText="BUY"
        btn.addEventListener("click", function(){
        buyy(name,image,price);
        })
        bdiv.append(btn);

        mdiv.append(img,p,h5,bdiv)
       document.querySelector("#voucher_list").append(mdiv)

      });
    }


    let arr=JSON.parse(localStorage.getItem("purchase")) || []

    function buyy(name,image,price){
      
      if(obj.wallet>=price)
      {
        let p = obj.wallet - Number(price)

        obj.wallet = p;

        localStorage.setItem("user",JSON.stringify(obj));

        alert("Hurray! purchase successful");
        display(obj);
      }
      else
      {
        alert("Sorry! insufficient balance")
      }

      let obbj ={
          name:name,
          image:image,
          price:price
      }


      arr.push(obbj);
      localStorage.setItem("purchase", JSON.stringify(arr));




    }
