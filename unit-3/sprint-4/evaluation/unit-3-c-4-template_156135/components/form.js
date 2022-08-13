function f(){
    return ` <form id="form">
    <input type="url" id="user_pic" placeholder="Enter Your Pic Url"><br><br>
    <input type="text" id="user_name" placeholder="Enter Your Name"><br><br>
    <input type="email" id="user_email" placeholder="Enter Your Email Id Here"><br><br>
    <select id="user_country">
      <option value="in">India</option>
      <option value="ch">China</option>
      <option value="nz">Newzeland</option>
      <option value="us">USA</option>
      <option value="uk">UK</option>
    </select><br><br>
    <input type="submit" value="Submit" id="submit">
</form>`
}

export {f}