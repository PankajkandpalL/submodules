

let getdata=async(url)=>{

    // let con = document.querySelector("body")  

    let user = await fetch(url)

    let data = await user.json();

    return data;

}


 let append = (data,con) =>{

    data.forEach(({title,image}) => {
        
        let mdiv = document.createElement("div")

        let img=document.createElement("img")
        img.setAttribute("src", image)
        img.style.width="200px"
        img.style.height="200px"

        let p = document.createElement("p")
        p.innerText=title;

        mdiv.append(img,p);
        
        con.append(mdiv);

    });

 }







function navbar(){

    return `<div id="navbar">
    <div>
        <h1>Home</h1>
    </div>
    <div id="nav">
        <div>USER</div>
        <div><a href="electronics.html">ELECTRONICS</a></div>
        <div><a href="jewelery.html">JEWELERY</a></div>
    </div>
</div>`;

}

export {navbar,getdata,append};

// document.querySelector("body").innerHTML=navbar();
