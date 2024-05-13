import SectionTitle from "../SectionTitle";
import styles from "./contact.module.css";

export default function ContactUs() {
    return (
        <section id="contact" className="section-1">
            <div className="container2">
                <SectionTitle heading="GET IN TOUCH"/>

                <div className="row contact-row">
                    <div className="col-lg-8 m-15px-tb">
                        <div className={styles.contactForm}>
                           <h4>SAY SOMETHING</h4>

                           <form className="row contact-row">
                              <div className="col-md-6"><input type="text" className={styles.formInput} placeholder="Name *"/></div>
                              <div className="col-md-6"><input type="email" className={styles.formInput} placeholder="E-mail *"/></div>
                              <div className="col-12"><input type="text" className={styles.formInput} placeholder="Subject *"/></div>
                              <div className="col-md-12"><textarea className={styles.formInput} placeholder="Your message *" rows="3"></textarea></div>
                              <div className="col-md-12"><button className={styles.btn2} type="submit">Send Message</button></div>
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