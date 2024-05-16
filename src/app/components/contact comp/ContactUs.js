import SectionTitle from "../SectionTitle";
import styles from "./contact.module.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_rt6igit', 'template_nbjpmee', form.current, {
          publicKey: 'aaCqLsjtAESGY3MaO',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            alert("MESSAGE SENT SUCCESSFULLY!");
          },
          (error) => {
            console.log('FAILED...', error.text);
            alert("MESSAGE NOT SENT!");
          },
        );
    };

    return (
        <section id="contact" className="section-1">
            <div className="container2">
                <SectionTitle heading="GET IN TOUCH"/>

                <div className="row contact-row">
                    <div className="col-lg-8 m-15px-tb">
                        <div className={styles.contactForm}>
                           <h4>SAY SOMETHING</h4>

                           <form ref={form} onSubmit={sendEmail} className="row contact-row">
                              <div className="col-md-6"><input type="text" className={styles.formInput} name="from_name" placeholder="Name *" required/></div>
                              <div className="col-md-6"><input type="email" className={styles.formInput} name="from_email" placeholder="E-mail *" required/></div>
                              <div className="col-12"><input type="text" className={styles.formInput} name="subject" placeholder="Subject *" required/></div>
                              <div className="col-md-12"><textarea className={styles.formInput} name="message" placeholder="Your message *" rows="3" required></textarea></div>
                              <div className="col-md-12"><button className={styles.btn2} type="submit" value="send">Send Message</button></div>
                           </form>
                        </div>
                    </div>

                    <div className="col-lg-4 m-15px-tb">

                      <div className={styles.contactInfo}>
                        <div className={styles.icon}><i class="fa fa-regular fa-location-dot"></i></div>
                        <div className={styles.ContactText}>
                            <h6>Our Address</h6>
                            <p>Akai Efa, Calabar, Cross Rivers State, Nigeria</p>
                        </div>
                      </div>

                      <div className={styles.contactInfo}>
                        <div className={styles.icon}><i class="fa fa-regular fa-phone"></i></div>
                        <div className={styles.ContactText}>
                            <h6>Our Phone</h6>
                            <p>Office: +234 7046175040 <br /> Office: +234 9043022923 </p>
                        </div>
                      </div>

                      <div className={styles.contactInfo}>
                        <div className={styles.icon}><i class="fa fa-regular fa-envelope"></i></div>
                        <div className={styles.ContactText}>
                            <h6>Our Email</h6>
                            <p>kooffreh2015@gmail.com <br /> paulkooffreh@gmail.com</p>
                        </div>
                      </div>

                    </div>

                </div>

            </div>

        </section>
    );
}