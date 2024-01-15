import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { AnimateKeyframes } from 'react-simple-animate';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear the error message when the user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    let formValid = true;

    if (!formData.name.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: 'Name is required.',
      }));
      formValid = false;
    }

    if (!formData.email.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Email is required.',
      }));
      formValid = false;
    }

    if (!formData.message.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: 'Message is required.',
      }));
      formValid = false;
    }

    // If any field is empty, stop the submission
    if (!formValid) {
      return;
    }

    // Clear the form data after submission if needed
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

 
  return (
       <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={[
                      "opacity:3",
                      "opacity:0"
                    ]}
                    iterationCount="1"
                  >
      <h1 className='contact-heading'>Contact</h1>
      
      <div className='contact-container'>
        <div className="contact-items-left">
          <div className="location">
            <span className="whatdoIdoIcons lnr lnr-map-marker"></span>
            <h4 className='contact-p'>Pakistan</h4>
          </div>
          <div className="mail">
            <span className="whatdoIdoIcons lnr lnr-envelope"></span>
            <Link to='waliullah@gmail.com' className='contact-mail'>
              <h4 className='contact-p'>ayesharani6788@gmail.com</h4>
            </Link>
          </div>
          <div className="freelance">
            <span className="whatdoIdoIcons lnr lnr-checkmark-circle"></span>
            <h4 className='contact-p'>Freelance Available</h4>
          </div>
        </div>
        <div className="contact-items-right">
          <div className="map">
            <iframe
              title="Peshawar, Pakistan"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?q=Peshawar,Pakistan&key=AIzaSyDVuhz31KMKFIKDsMGZnpfXhPwtB0RsQQw"
              allowFullScreen
            ></iframe>
          </div>

          <form action="https://formsubmit.co/ayesharani6788@gmail.com" method="POST">
          <div className='form'>
            <h3>How can I  <span className='h3'> help You?</span> </h3>
            <div className='contact-form'>
        <div className='controlswrapper'>
          <div className='name-wrapper'>
            <input
              required
              name='name'
              className='input'
              type={'text'}
              value={formData.name}
              onChange={handleInputChange}
            />
            <label htmlFor='name' className='nameLabel'>
              Name
            </label>
            <p className={`error-message ${errors.name ? 'show-arrow' : ''}`}>{errors.name}</p>
          </div>
          <div className='emailwrapper'>
            <input
              required
              name='email'
              className='input'
              type={'text'}
              value={formData.email}
              onChange={handleInputChange}
            />
            <label htmlFor='email' className='emailLabel'>
              Email
            </label>
            <p className={`error-message ${errors.email ? 'show-arrow' : ''}`}>{errors.email}</p>
          </div>
          <div className='subjectwrapper'>
            <input
              required
              name='subject'
              className='input'
              type={'text'}
              value={formData.subject}
              onChange={handleInputChange}
            />
            <label htmlFor='subject' className='subjectLabel'>
              Subject
            </label>
            <p className={`error-message ${errors.subject ? 'show-arrow' : ''}`}>{errors.subject}</p>
          </div>
        </div>
        <div className='descriptionwrapper'>
          <textarea
            required
            name='message'
            className='description'
            type={'text'}
            value={formData.message}
            onChange={handleInputChange}
          />
          <label htmlFor='description' className='descriptionLabel'>
            Message
          </label>
          <p className={`error-message ${errors.message ? 'show-arrow' : ''}`}>{errors.message}</p>
        </div>
      </div>
     
      <div className='bttn'>
        <button className='btn'  onClick={handleSubmit}>
          Send a Message
        </button>
      </div>
     
      </div>
      </form>
      </div>
    </div>
    </AnimateKeyframes>
  
  );
};

export default Contact;