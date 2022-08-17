import React from 'react'
import './popup.css'
import { ImCross } from 'react-icons/im'

function Popup() {
    return (
        <div class="popup-section" id="#popup-section">
            <div class="cross-icon" onclick="closePopup()">
                <ImCross />
            </div>
            <div class="popup">
                <h3>The Power of Social Media</h3>
                <p>The eBook will be sent to your email.</p>
                <div class="action">
                    <form name="popupForm">
                        <div class="text-div">
                            <input type="text" name="firstName" placeholder="First Name" required />
                            <input type="text" name="lastName" placeholder="Last Name" />
                        </div>
                        <div class="email-div">
                            <input type="email" name="email" placeholder="Enter Your Email" required />
                        </div>
                        <div class="">
                            <input type="submit" value="Get eBook" onclick="downloadEbook()" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Popup