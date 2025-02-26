import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState<string>(''); // Set initial state
  const [email, setEmail] = useState<string>(''); // Set initial state
  const [message, setMessage] = useState<string>(''); // Set initial state

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef<HTMLFormElement | null>(null); // Correctly typing the form ref

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate inputs
    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name && email && message) { // Simplified condition
      const templateParams = {
        from_name: name, // Matches your EmailJS template variable
        reply_to: email, // Matches your EmailJS template variable
        message: message, // Maps to your template's message field
      };

      console.log(templateParams);
      emailjs.send('service_jaqlpyv', 'template_dxnhjac', templateParams, '6vb1lpn5i31rQ0b6GdDwX')
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
            // Reset form fields or show a success message
            setName('');
            setEmail('');
            setMessage('');
          },
          (error) => {
            console.log('FAILED...', error);
            // Optionally show an error message to the user
          }
        );
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got an opportunity? Let's collaborate and make it happen!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail} // Use form's onSubmit instead of button click
          >
            <div className='form-flex'>
              <TextField
                required
                id="outlined-required-name"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                InputProps={{
                  style: { backgroundColor: 'white', color: 'black' }, // Ensures text visibility
                }}
              />
              <TextField
                required
                id="outlined-required-email"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
                InputProps={{
                  style: { backgroundColor: 'white', color: 'black' }, // Ensures text visibility
                }}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
              InputProps={{
                style: { backgroundColor: 'white', color: 'black' }, // Ensures text visibility
              }}
            />
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              type="submit" // Ensure this is a submit button
              style={{ backgroundColor: '#5000ca', color: 'white' }} // Button styles
            >
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
