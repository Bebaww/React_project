import React from "react";
import './page.css'
export default function Main()
{
    return(
        <div className="allmain">
 <div className="fandl">

<div className="fnamediv">
    <input type="name" placeholder="First Name" className="firstname"></input>
</div>
<div className="lnamediv">
    <input type="name" placeholder="Last Name" className="lastname"></input>
</div>

</div>


<div className="emaildiv">
    <input type="email" placeholder="ab@gmail.com" className="email"></input>
</div>
<div className="passdiv">
    <input type="password" placeholder="password" className="password"></input>
    <button className="passshow">show</button>
</div>
<div className="confpassdiv">
    <input type="password" placeholder="confirm password" className="password"></input>
    <button className="passshow">show</button>

</div>
<div className="agreediv">
    <input type="checkbox"  className="agree"></input>
    <p>I agree with <span>privacy</span> and <span>policy</span></p>
</div>
<div className="signupbuttondiv">
    <button className="signbutton">sign up</button>
</div>
        </div>
      
       
       
    )
}