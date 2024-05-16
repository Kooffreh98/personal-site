import Image from "next/image";
import styles from "../paul.module.css";
import SectionTitle from "../SectionTitle";
import AboutItem from "./AboutItems";

export default function About() {
    return (
        <section id="about" className="section-1">
          <div className="container2">

            <SectionTitle heading="ABOUT ME"/>
            
            <div className={styles.flexDiv2}>
                <div className="col-lg-5 m-15px-tb">
                  <div className={styles.aboutImg}>
                    <Image src="/images/paul.png" alt="picture of paul" className={styles.img} layout="responsive" width={100} height={100} />
                    <div className={styles.socialIcon}>
                      <a href="https://web.facebook.com/paul.kooffreh?_rdc=1&_rdr"><i class="fab fa-facebook-f"></i></a>
                      <a href="https://www.instagram.com/kooffreh_paul/"><i class="fab fa-instagram"></i></a>
                      <a href="https://www.linkedin.com/in/paul-kooffreh-851684305"><i class="fab fa-linkedin-in"></i></a>
                      <a href="https://github.com/Kooffreh98"><i class="fab fa-github"></i></a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-7 m-15px-tb">
                  <div className={styles.aboutMe}>

                    <h4>I'm Paul Kooffreh</h4>
                    <h6>A lead <span className={styles.themeColor}>
                      Full stack</span> developer based in <span className={styles.themeColor}>Nigeria</span>
                    </h6>
                    <p style={{marginBottom: "1rem"}}>I design and develop services for customers of all sizes, specializing in creating stylish, 
                       modern websites, web services and mobile apps. My passion is to design digital user experiences 
                       through the bold interface and meaningful interactions. Check out my Portfolio
                    </p>

                    <div className={styles.aboutList}>
                      <div className="col-md-6">
                         
                        <AboutItem label="Birthday" text="1st May 1998" />

                        <AboutItem label="Age" text="26 Yr" />

                        <AboutItem label="Residence" text="Nigeria" />

                        <AboutItem label="Address" text="Calabar, Cross Rivers State" />
                         
                      </div>

                      <div className="col-md-6">
                          
                        <AboutItem label="E-mail" text="kooffreh2015@gmail.com" />

                        <AboutItem label="Phone" text="07046175040" />

                        <AboutItem label="LinkedIn" text="Paul Kooffreh" />

                        <AboutItem label="Remote" text="Available" />

                      </div>

                    </div>

                    <div style={{marginTop: "30px"}}><a className={styles.btn} href="images/Paul's updated CV.pdf" download="Paul's updated CV.pdf">Download CV</a></div>

                  </div>

                </div>

            </div>

          </div>  
        </section>
    );
}