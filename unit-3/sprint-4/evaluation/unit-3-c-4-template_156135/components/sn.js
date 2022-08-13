function nav(){
    return `  <div id="search">
    <input type="text" placeholder="Search..." id="search_box">
 </div>
 <div id="links">
    <div id="in">India</div>
    <div id="us">Usa</div>
    <div id="ch">China</div>
    <div id="uk">UK</div>
    <div id="nz">New Zealand</div>
 </div>`
}

function displaydata(obj){

    let img = document.createElement("img")
    img.setAttribute("src", obj.image)
    img.style.width="100%"
    img.setAttribute("id", "user_image")

    let h2 = document.createElement("h2")
    h2.innerText=obj.name;
    h2.style.textAlign="center"
    h2.setAttribute("id", "user_name")

    let h3 = document.createElement("h3")
    h3.innerText = obj.email;
    h3.style.textAlign="center"
    h3.setAttribute("id", "user_email")

    let p = document.createElement("h1");
    p.style.textAlign="center"
    p.setAttribute("id", "user_country");

    if(obj.country=="in")
    {
      p.innerText="India"
    }
    else if(obj.country=="ch")
    {
      p.innerText="China"
    }
    else if(obj.country=="nz")
    {
      p.innerText="New Zealand"
    }
    else if(obj.country=="us")
    {
      p.innerText="Usa"
    }
    else if(obj.country=="uk")
    {
      p.innerText = "UK"
    }

    document.querySelector("#sidebar").append(img,h2,h3,p)
    

  }

    function append(data){

    document.getElementById("news_result").innerHTML="";

    data.forEach(({title,author,urlToImage}) => {
      
      let mdiv = document.createElement("div")
      mdiv.style.display="flex"
      mdiv.style.border="1px solid black"
      mdiv.style.marginBottom="20px"
      mdiv.setAttribute("class","news")

      let img = document.createElement("img")
      img.setAttribute("src", urlToImage)
      img.style.width= "200px"
      // img.style.height="80px"

      let pdiv=document.createElement("div")

      let p = document.createElement("p")
      p.innerText=title;

      let h3 = document.createElement("h3")
      h3.innerText=author;
      pdiv.append(p,h3)

      mdiv.append(img,pdiv)

      document.getElementById("news_result").append(mdiv);

    });

  }

  
  function s1(){

    let i = "in";
    localStorage.setItem("cc", JSON.stringify(i))
    window.location.href="news.html"

  }

  function s2(){

    let i = "us";
    localStorage.setItem("cc", JSON.stringify(i))
    window.location.href="news.html"

  }

  function s3(){

    let i = "ch";
    localStorage.setItem("cc", JSON.stringify(i))
    window.location.href="news.html"

  }

  function s4(){

    let i = "uk";
    localStorage.setItem("cc", JSON.stringify(i))
    window.location.href="news.html"

  }

  
  function s5(){

    let i = "nz";
    localStorage.setItem("cc", JSON.stringify(i))
    window.location.href="news.html"

  }

  async function news(user){

    const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${user}`

    let us = await fetch(url)
    let data = await us.json();
    // console.log(data.articles)
    append(data.articles)

  }

  async function news1(user){

    const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${user}`

    let us = await fetch(url)
    let data = await us.json();
    // console.log(data.articles)
    append1(data.articles)

  }

  function append1(data){

    document.getElementById("detailed_news").innerHTML="";

    data.forEach(({title,author,urlToImage}) => {
      
      let mdiv = document.createElement("div")
      mdiv.style.display="flex"
      mdiv.style.border="1px solid black"
      mdiv.style.marginBottom="20px"

      let img = document.createElement("img")
      img.setAttribute("src", urlToImage)
      img.style.width= "200px"
      // img.style.height="80px"

      let pdiv=document.createElement("div")

      let p = document.createElement("h3")
      p.innerText=title;

      let h3 = document.createElement("h4")
      h3.innerText=author;
      pdiv.append(p,h3)

      mdiv.append(img,pdiv)

      document.getElementById("detailed_news").append(mdiv);

    });

  }



  

export {nav,displaydata,append,news,s1,s2,s3,s4,s5,news1}