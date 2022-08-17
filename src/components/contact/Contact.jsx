import React from 'react'
import './contact.css'

const Contact = () => {
    return (
        <section class="contact" id="contact">
            <div class="container">
                <div class="center">
                    <h3>Let's talk about everything</h3>
                    <p>Don't like forms? Use another methods.</p>
                    <div class="action">
                        <form name="contactForm">
                            <input type="text" name="name" placeholder="Name" required />
                            <input type="email" name="email" placeholder="Enter Email" required />
                            <textarea name="message" placeholder="Enter Your Message" rows="4" cols="80"></textarea>
                            <div class="">
                                <input type="submit" value="Submit" onclick="sentMessage()" />
                            </div>
                        </form>
                    </div>
                    <div class="other-contacts">
                        <h4>Use another methods:</h4>
                        <div class="contact-options">
                            <a href="mailto:contact.teamrkg@gmail.com"><i class='bx bxl-gmail'></i></a>
                            <a href="http://m.me/rkgservice" target="_blank"><i class='bx bxl-messenger'></i></a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact