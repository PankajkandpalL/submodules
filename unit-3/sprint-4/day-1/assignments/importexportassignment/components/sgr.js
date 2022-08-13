async function random(url){

    // let con = document.querySelector("#randomdiv")

    let user = await fetch(url);
    let data = await user.json();

    return data;

}


function recipeofthedayappend(data,con){

    data.forEach(({strArea,strCategory,strInstructions,strMealThumb,strYoutube}) => {
       
        let mdiv = document.createElement("div");

        let img = document.createElement("img");
        img.setAttribute("src",strMealThumb);
        img.style.width="100%"
        img.style.height="400px"

        let h1 = document.createElement("h1");
        h1.innerText=strCategory;
        h1.style.textAlign="center";
        
        let h5=document.createElement("h5")
        h5.style.color="green"
        h5.innerText=strInstructions;

        let p = document.createElement("p");
        p.innerText ="For More deatils visit: " + strYoutube;
        p.style.color="red";

        mdiv.append(img,h1,h5,p);
        con.append(mdiv)


    });

}


function randomappend(data,con){


    for(var i=0;i<20;i++)
    {
        let mdiv = document.createElement("div");

        let div = document.createElement("div")
        // div.style.overflow="hidden"
        div.style.height="100px"
        div.setAttribute("id", "rscroll")

        let p1 = document.createElement("p")
        p1.innerText=data[i].strDescription;
        div.append(p1)

        let  p2 = document.createElement("h3")
        p2.innerText=data[i].strIngredient;
        p2.style.color="red"

        mdiv.append(div,p2);

        con.append(mdiv);
    }

}



async function search(q){

    // let ap=document.querySelector("#appen");
    
    // let con = document.querySelector("#searchrecom");
    

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${q}`

    let user = await fetch(url);
    let data = await user.json();

    return data;

}



function appendrecom(data,con){

    con.style.display="block"

    con.innerHTML="";

    data.forEach(({strMeal,strCategory,strMealThumb}) => {
        
        let mdiv = document.createElement("div")
        mdiv.style.display="flex"
        mdiv.style.justifyContent="space-between"
        mdiv.style.alignItems="center";
        // mdiv.addEventListener("click", function(strMealThumb,strCategory){

        //     let div = document.createElement("div")
        //     let img = document.createElement("img")
        //     img.setAttribute("src", strMealThumb)
        //     img.style.width="200px"
        //     img.style.height="200px"

        //     let pp = document.createElement("p")
        //     pp.innerText = strCategory;
        //     pp.style.textAlign="center"

        //     div.append(img,pp)
        //     ap.append(div)

        // })

        // let pdiv=document.createElement("div")

        let p = document.createElement("p")
        p.innerText=strMeal;

        let p1 = document.createElement("p")
        p1.innerText=strCategory;

        mdiv.append(p,p1)

        con.append(mdiv)

    });

}
    async function appe(q2){


        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${q2}`

        let user = await fetch(url);
        let data = await user.json();

        return data;

    }

    
    function appendsearch(data,con2){

        document.querySelector("#searchrecom").style.display="none";
        con2.innerHTML="";

        data.forEach(({strMealThumb,strMeal}) => {
            
            let mdiv = document.createElement("div")

            let img = document.createElement("img")
            img.setAttribute("src", strMealThumb)
            img.style.height="200px"
            img.style.width="200px"

            let h3 = document.createElement("h3")
            h3.innerText=strMeal;
            h3.style.color = "green"
            h3.style.textAlign="center"

            mdiv.append(img,h3)

            con2.append(mdiv);


        });

    }





export {random,recipeofthedayappend,randomappend,search,appendrecom,appe,appendsearch}