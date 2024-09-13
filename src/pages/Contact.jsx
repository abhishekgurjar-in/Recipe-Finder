import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Prepare the contact details object
    const contactDetails = { name, email, message };
    
    // Save contact details to local storage
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    savedContacts.push(contactDetails);
    localStorage.setItem('contacts', JSON.stringify(savedContacts));

    // Log the form data
    console.log('Form submitted:', contactDetails);
    
    // Clear form fields
    setName('');
    setEmail('');
    setMessage('');
    
    // Show popup
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      
      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Thank you!</h2>
            <p>Your message has been submitted successfully.</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
