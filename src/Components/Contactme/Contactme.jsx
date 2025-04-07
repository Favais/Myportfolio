import React from 'react'
import './Contactme.css'
import Socialicon from '../../assets/Socialicon.png'
import Redditicon from '../../assets/redditicon.png'
import Twittericon from '../../assets/twitter.png'
import Discordicon from '../../assets/discord.png'

const Contactme = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "077cedcb-ec5c-41d5-a122-fa5cdadf140c");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
        }
    };
    return (
        <div id='contactme' className='contactme'>
            <div className="contactme-container">
                <div className="contact-form">
                    <form onSubmit={onSubmit} className="input-area">
                        <input type="text" placeholder='Name' name='name' />
                        <input type="email" placeholder='Email' name='email' />
                        <input type="text" placeholder='Your website(if exists)' name='website' />
                        <textarea name="message" placeholder='How can i Help?* ' id=""></textarea>
                        <button type='submit' className='getintouch'>Get In Touch</button>
                    </form>
                    <div className="socials">
                        <button><img src={Socialicon} alt="" /></button>
                        <button><img src={Redditicon} alt="" /></button>
                        <button><img src={Twittericon} alt="" /></button>
                        <button><img src={Discordicon} alt="" /></button>
                    </div>
                </div>
                <div className="contact-details">
                    <div className="contact-details-container">
                        <div className="writeupone">
                            <div className="writeuponehead">
                                <h1>Let's <span>talk</span> for </h1>
                                <h1>Something special</h1>
                            </div>
                            <p>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
                        </div>
                        <div className="writeuptwo">
                            <h4>Oghagbonfav@gmail.com</h4>
                            <h4>+2348071464609</h4>
                        </div>
                    </div>
                </div>
            </div>

        </div >

    )
}

export default Contactme
