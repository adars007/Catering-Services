import React from "react";
import "./ContactUs.css"; // Import the CSS file for styling

const ContactUs = () => {
  return (
    <div className="contact-us-container" id="contact">
      <div className="background-image"></div>
      <h1>Contact Us</h1>
      <p>
        Your Event, It’s Our Responsibility To Make Your Special Day A Delicious
        & Memorable Experience!
      </p>
      <div className="contact-details">
        <div className="contact-card">
          <h2>Devesh</h2>
          <p>Phone: 9966867399</p>
        </div>
        <div className="contact-card">
          <h2>Ashish</h2>
          <p>Phone: 7278003587</p>
        </div>
        <div className="contact-card">
          <h2>Ajay</h2>
          <p>Phone: 8920340968</p>
        </div>
      </div>
      <form className="contact-form">
        <h2>Contact Us Form</h2>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Message:
          <textarea name="message" required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
