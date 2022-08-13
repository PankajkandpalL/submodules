function rename(){

    return ` <nav>
    <div> FOOD APP </div>
    <div>
    <div><a href="login.html">LOGIN</a></div>
    <div><a href="signup.html">SIGN UP</a></div>
    </div>
  </nav> <br><br><br>
<form id="form">
    <label for="" id="sign">Log In</label><br><br><br>
    <label for="">Full Name</label><br>
    <input type="text" id="name" placeholder="Type Your Name"><br><br>
    <label for="">Email</label><br>
    <input type="email" id="email" placeholder="example@masai.com"><br><br>
    <label for="">Password</label><br>
    <input type="password" id="password" placeholder="Enter Password"><br><br><br>
    <input type="submit" value="SUBMIT">
</form>`


}

function re(){

    return `  <nav>
    <div> FOOD APP </div>
    <div>
    <div><a href="login.html">LOGIN</a></div>
    <div><a href="signup.html">SIGN UP</a></div>
    </div>
  </nav> <br><br><br>
<form id="form">
    <label for="" id="sign">Sign Up</label><br><br><br>
    <label for="">Full Name</label><br>
    <input type="text" id="name" placeholder="Type Your Name"><br><br>
    <label for="">Email</label><br>
    <input type="email" id="email" placeholder="example@masai.com"><br><br>
    <label for="">Password</label><br>
    <input type="password" id="password" placeholder="Enter Password"><br><br><br>
    <input type="button" id="btn" value="SUBMIT">
</form>`


}


export {rename,re};