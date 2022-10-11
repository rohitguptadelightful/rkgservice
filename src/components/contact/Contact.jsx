import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import { FaFacebookMessenger } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const Contact = () => {
    const serviceId = process.env.REACT_APP_YOUR_SERVICE_ID;
    const templateId = process.env.REACT_APP_YOUR_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_YOUR_PUBLIC_KEY;
    const [message, setMessage] = useState("");
    const [sent, setSent] = useState("none");

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                setMessage("Message Sent Successfully!");
                setSent("sent");
                setTimeout(() => { setSent("none"); }, 3000);
                form.current.reset();

            }, (error) => {
                console.log(error.text);
                setMessage("Something worng, try after somtime!");
                setSent("alert");
                setTimeout(() => { setSent("none"); }, 3000);
            });
    };

    return (
        <section id="contact">
            <div className="contact-container">
                <h3>Let's talk about everything</h3>
                <p>Don't like forms? Use another methods.</p>
                <div className="action">
                    <form ref={form} onSubmit={sendEmail} name="contactForm">
                        <input type="text" name="name" placeholder="Name" required />
                        <input type="email" name="email" placeholder="Enter Email" required />
                        <textarea name="message" placeholder="Enter Your Message" rows="4" cols="80"></textarea>
                        <div>
                            <div className={sent}>{message}</div>
                            <input className="btn" type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
                <div className="other-contacts">
                    <h4>Use another methods:</h4>
                    <div className="contact-options">
                        <a href="mailto:contact.teamrkg@gmail.com"><MdEmail /></a>
                        <a href="http://m.me/rkgservice" target="_blank" rel='noreferrer'><FaFacebookMessenger /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact