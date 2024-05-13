import SectionTitle from "../SectionTitle";
import styles from "./services.module.css"

export default function Services() {
    return(
        <section id="services" className="section-1">
            <div className="container2">

               <SectionTitle heading="MY SERVICES"/>

               <div className="row">

                  <div className="col-sm-6 col-lg-4 m-15px-tb">
                     <div className={styles.featureBox}>
                         <div className={styles.icon}><i class="fa fa-regular fa-desktop"></i></div>
                         <div className={styles.content}>
                            <h5>Unique design</h5>
                            <p>I design and develop services for customers of all sizes, 
                            specializing in creating stylish, modern websites.</p>
                         </div>
                     </div>
                  </div>

                  <div className="col-sm-6 col-lg-4 m-15px-tb">
                     <div className={styles.featureBox}>
                         <div className={styles.icon}><i class="fa fa-light fa-mobile"></i></div>
                         <div className={styles.content}>
                            <h5>Responsiveness</h5>
                            <p>With Front-end knowledge in HTML5, CSS and Bootstrap; I specialize in
                                creating responsive cross browser and mobile friendly websites. With the 
                                ability to debug front-end site issues. 
                            </p>
                         </div>
                     </div>
                  </div>

                  <div className="col-sm-6 col-lg-4 m-15px-tb">
                      <div className={styles.featureBox}>
                          <div className={styles.icon}><i class="fa fa-solid fa-gear"></i></div>
                          <div className={styles.content}>
                            <h5>Functionality</h5>
                            <p>With expert level knowledge in JavaScript and jQuery; I am able to build modern
                               sites with functionality ensuring smooth user experience and website optimization. 
                            </p>
                          </div>
                      </div>
                  </div>

                  <div className="col-sm-6 col-lg-4 m-15px-tb">
                     <div className={styles.featureBox}>
                         <div className={styles.icon}><i class="fab fa-brands fa-node-js"></i></div>
                         <div className={styles.content}>
                            <h5>Backend development</h5>
                            <p>I develop and maintain server-side applications using node.js. With proficiency
                               in building and maintaining RESTful APIs and utilizing various Node.js modules and libraries.
                            </p>
                         </div>
                     </div>
                  </div>

                  <div className="col-sm-6 col-lg-4 m-15px-tb">     
                     <div className={styles.featureBox}>
                         <div className={styles.icon}><i class="fa fa-solid fa-code"></i></div>
                         <div className={styles.content}>
                            <h5>Software development</h5>
                            <p>With knowledge in modern mobile applications building frameworks like Ionic
                               react native. I design and develop stylish and modern applications providing smooth
                               user interface and experience.
                            </p>
                         </div>
                     </div>
                  </div>
              
                  <div className="col-sm-6 col-lg-4 m-15px-tb">
                     <div className={styles.featureBox}>
                         <div className={styles.icon}><i class="fa fa-solid fa-database"></i></div>
                         <div className={styles.content}>
                            <h5>Database management</h5>
                            <p>A database developer with entry-level experience specializing in SQL, MongoDB, PostgreSQL,
                               continuous improvement, and database management. Adept at coordinating with diverse technical teams
                               to architect database solutions and enhance system performance.
                            </p>
                         </div>
                     </div>
                  </div>

               </div>

            </div>
        </section>
    );
}