
  document.querySelector("#confirm").addEventListener("click", all)

  function all(){

    alert("Your order is accepted")


    setTimeout(function(){
      alert("Your order is being Prepared ")
    },3000)
    
    setTimeout(function(){
        alert("Your order is being packed ")
    },8000)
    
    
    
    setTimeout(function(){
      alert("Your order is out for delivery ")
    },10000)
    
    
    
    setTimeout(function(){
          alert("Order delivered")
    },12000)



  }
