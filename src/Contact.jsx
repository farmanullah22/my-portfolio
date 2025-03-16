import React from "react";
import "./index.css"


 const Contact = () => {
  return(
    <>
        <section className="contactlog">
            <h2 className="contact-header">Contact___</h2>
          <div className="contact-content">

          <div className="contact">
            <div className="first_name">
            <span>First Name </span>
            <input type="text" placeholder="Full Name" />
            </div>
            <div className="last_name">
            <span>Last Name </span>
            <input type="text" placeholder="Last Name" />
            </div>
            <div className="email">
            <span>Email </span>
            <input type="email" placeholder="Email" />
            </div>
            <div className="contact">
            <span>Contact </span>
            <input type="text" />
            </div>
            <div className="message">
            <span>Message </span> 
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
            </div>
            <div className="submit">
              <button>Submit</button>
              </div>
              
          </div>
          <div className="location">
            
          </div>
          </div>
        </section>


        {/* Footer Section */}

        <footer className="footer">
      <div className="footer-container">
        {/* Left: About Section */}
        <div className="footer-about">
          <h3>About Us</h3>
          <p>Providing top legal services and <br /> expert consultation. Your trust is our priority.</p>
        </div>

        {/* Center: Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Right: Contact and Social Media */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 789</p>
          <p>Location: Your City, Country</p>
          <div className="footer-socials">
            <a href="#">&#x1F426;</a> {/* Twitter */}
            <a href="#">&#x1F4F7;</a> {/* Instagram */}
            <a href="#">&#x1F4E7;</a> {/* Email */}
            <a href="#">&#x1F4F1;</a> {/* Phone */}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2025 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
    </>
  )
 };

 export default Contact;