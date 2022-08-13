async function fetxh(url){

    let user = await fetch(url)
    let data = await user.json();
    return data;

}

export {fetxh}