function nav(){

    return `<div>HOME</div>
    <div id="side">
      <div>SignIn</div>
      <div>Login</div>
      <div>Help</div>
      <div>About Us</div>
  </div>`

}


function append(data,con){
    
    data.forEach((el) => {
      
        let mdiv = document.createElement("div");

        let img = document.createElement("img")
        img.setAttribute("src", el.image)
        img.style.width = "100%"
        img.style.height="300px"

        let p = document.createElement("h2")
        p.innerText = el.category
        p.style.textAlign = "center";
        p.style.color = "red"

        let p1 = document.createElement("p")
        p1.innerText = el.title;

        mdiv.append(img,p,p1);

        con.append(mdiv);
    });

  }

export {nav,append};