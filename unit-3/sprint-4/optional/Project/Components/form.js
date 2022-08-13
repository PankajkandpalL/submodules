
function navbar(){
    return `<div>Home</div>
    <div id="main">
        <div><a href="delete.html">Delete Account</a></div>
        <div><a href="update.html">Update Account</a></div>
        <div><a href="index.html">Create Account</a></div>
        <div><a href="login.html">Login</a></div>
    </div>`
}

function frm(){
    return `
    <label for="" id="sign">Sign Up</label><br><br><br>
    <label for="">Full Name</label><br>
    <input type="text" required id="name" placeholder="Type Your Name"><br><br>
    <label for="">Email</label><br>
    <input type="email" required id="email" placeholder="example@masai.com"><br><br>
    <label for="">Password</label><br>
    <input type="password" required id="password" placeholder="Enter Password"><br><br><br>
    <input type="submit" value="SUBMIT">
    `
}
function frmm(){
    return `
    <label for="" id="sign">Delete Account</label><br><br><br>
    <label for="">Email</label><br>
    <input type="email" required id="email" placeholder="example@masai.com"><br><br>
    <label for="">Password</label><br>
    <input type="password" required id="password" placeholder="Enter Password"><br><br><br>
    <input type="submit" value="Delete This Account">
    `
}

function fr(){
    return `<label for="" id="sign">Existing Account Details</label><br><br><br>
    <label for="">Enter Your Email</label><br>
    <input type="email" required id="email" placeholder="Enter Your Existing Email"><br><br>
    <label for="">Password</label><br>
    <input type="password" required id="password" placeholder="Enter Current Password"><br><br><br>
    <input type="submit" value="Confirm">`
}

function frr(){

    return `<label for="" id="sign">Update Password</label><br><br><br>
    <label for="">Enter Your Email</label><br>
    <input type="email" required id="email" placeholder="Enter Your Email"><br><br>
    <label for="">Password</label><br>
    <input type="password" required id="pass" placeholder="Enter new Password"><br><br><br>
    <input type="button" id="btn" value="Confirm">`
}

function lfr(){
    return `<label for="" id="sign">Log In</label><br><br><br>
    <label for="">Enter Your Email</label><br>
    <input type="email" required id="email" placeholder="Enter Your Existing Email"><br><br>
    <label for="">Password</label><br>
    <input type="password" required id="password" placeholder="Enter Password"><br><br><br>
    <input type="submit" value="Login">`
}

export {navbar,frm,frmm,fr,frr,lfr}