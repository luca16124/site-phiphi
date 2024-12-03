import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss';

function Contact() {
  const form = useRef();
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult("Envoi en cours....");

    emailjs
      .sendForm('service_picahvg', 'template_z0e57xk', form.current, {
        publicKey: 'xDTu0jneuqn2bGav5',
      })
      .then(
        () => {
          setResult("Formulaire soumis avec succès!");
          // Réinitialiser le formulaire après l'envoi réussi
          form.current.reset();
        },
        (error) => {
          console.log('Échec de l\'envoi', error.text);
          setResult("Une erreur est survenue. Veuillez réessayer.");
        },
      );
  };

  return (
    <section className='contactPage'>
      <div className="contact">
        <h2>Contactez-moi</h2>
        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nom <span className="required">*</span></label>
            <input
              type="text"
              id="name"
              name="user_name" // Nom utilisé par Email.js
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email <span className="required">*</span></label>
            <input
              type="email"
              id="email"
              name="user_email" // Nom utilisé par Email.js
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Téléphone</label>
            <input
              type="tel"
              id="phone"
              name="user_phone" // Nom utilisé par Email.js, si besoin
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Objet</label>
            <input
              type="text"
              id="subject"
              name="subject" // Nom utilisé par Email.js
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message <span className="required">*</span></label>
            <textarea
              id="message"
              name="message" // Nom utilisé par Email.js
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Envoyer</button>
        </form>
        <span>{result}</span> {/* Afficher le résultat ici */}
      </div>
    </section>
  );
}

export default Contact;