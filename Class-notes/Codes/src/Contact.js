import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faInbox,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div className="Contact-con">
      <div className="contact-jun">
        <div className="contact-main">
          <div className="contact-txt">
            <h1>Send Us A Message</h1>
            <div className="firstbox">
              <div className="secondbx">
                <div className="thirdbx">
                  <p>TELL US YOUR NAME *</p>
                </div>
                <div className="input-cn">
                  <input
                    placeholder="First name"
                    type="text"
                    name="text"
                    class="input"
                  />
                  <input
                    placeholder="Last name"
                    type="text"
                    name="text"
                    class="input"
                  />
                </div>
              </div>
              <div className="thirdbx">
                <p>ENTER YOUR PHONE EMAIL</p>
                <div className="input-btns">
                  <input
                    placeholder="Phone Number"
                    type="phone number"
                    name="number"
                    class="input"
                  />
                </div>
              </div>
              <div className="thirdbx">
                <p>ENTER YOUR CELL PHONE *</p>
                <div className="input-btns">
                  <input
                    placeholder="Phone Number"
                    type="phone number"
                    name="number"
                    class="input"
                  />
                </div>
              </div>
              <div className="thirdbx">
                <p>MESSAGE *</p>
                <div className="input-btns">
                  <div className="textarea">
                    <textarea
                      placeholder="Write us a message....."
                      name="text"
                      class="input"
                      className="message-style"
                    />
                  </div>
                </div>
              </div>
              <div className="send-btn">
                <button>SEND MESSAGE</button>
              </div>
            </div>
          </div>
          <div className="contact-info">
            <div className="main-con">
              <div className="sec-con">
                <div className="class-con">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <h1>Address</h1>
                </div>
                <p>
                  Moda Center 8th floor, 379 hudson st,
                  <br /> New York 10018 US.{" "}
                </p>
              </div>
              <div className="sec-cons">
                <div className="class-con">
                  <FontAwesomeIcon icon={faPhone} />
                  <h1>Lets Talk</h1>
                </div>
                <p>+23481000002 </p>
              </div>
              <div className="sec-cons">
                <div className="class-con">
                  <FontAwesomeIcon icon={faInbox} />
                  <h1>General Support</h1>
                </div>
                <p>contact@example.com </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
