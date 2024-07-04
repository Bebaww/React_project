import React from "react";
import './Userinfo.css';
import location from './assets/pin.png';
import email from './assets/email.png';
import web from './assets/globe.png';
import phone from './assets/smartphone-call.png';
import inst_icon from './assets/icons/instagram.png';
import google_icon from './assets/icons/google.png';
import linked_icon from './assets/icons/linkedin.png';
import twit_icon from './assets/icons/twitter.png';
import telegram_icon from './assets/icons/telegram.png';
import face_icon from './assets/icons/facebook-app-symbol.png';
function Info() {
    return (
        <main>
            <section className="contact-info">
                <div className="info">
                    <div className="icon"><img src={location} /></div>
                    <div className="social">Location</div>
                    <div className="address"> Bethel</div>
                </div>
                <div className="info">
                    <div className="icon"><img src={phone} /></div>
                    <div className="social">Mobile Number</div>
                    <div className="address">+251989012309</div>
                </div>
                <div className="info">
                    <div className="icon"><img src={email} /></div>
                    <div className="social">E-mail Address</div>
                    <div className="address">acesono53@gmail.com</div>
                </div>
                <div className="info">
                    <div className="icon"><img src={web} /></div>
                    <div className="social">Website</div>
                    <div className="address">www.abcdefg.com</div>
                </div>
            </section>
            <div className="button">CONNECT WITH ME</div>
            <div className="icons">
                <img src={face_icon} alt="" />
                <img src={inst_icon} alt="" />
                <img src={linked_icon} alt="" />
                <img src={twit_icon} alt="" />
                <img src={google_icon} alt="" />
                <img src={telegram_icon} alt="" />
            </div>
            <div className="social-handler">@abuma__h</div>
            <div className="website">www.abcdefg.com</div>
        </main>
    );
}
export default Info