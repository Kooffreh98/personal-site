import SectionTitle from "../SectionTitle";
import styles from "./skill.module.css";

export default function Skills() {
    return (
        <section id="skills" className="section-2">
           <div className="container2">
              <SectionTitle heading="MY SKILLS"/>

              <div className={styles.flexDiv3}>

                <div className={styles.flexItems}>
                    <div className={styles.skillIt}>
                       <h6>HTML5</h6>
                       <div className={styles.skillBar}>
                          <div className={styles.innerBar} role="progressbar" aria-valuenow="94" aria-valuemin="0" aria-valuemax="100" style={{width: "92%"}}>
                            <span>94%</span>
                          </div>
                       </div>
                    </div>

                    <div className={styles.skillIt}>
                       <h6>JavaScript</h6>
                       <div className={styles.skillBar}>
                          <div  className={styles.innerBar} role="progressbar" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100" style={{width: "86%"}}>
                              <span>86%</span>
                          </div>
                       </div>
                    </div>

                    <div className={styles.skillIt}>
                       <h6>TypeScript</h6>
                       <div className={styles.skillBar}>
                          <div  className={styles.innerBar} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}>
                            <span>75%</span>
                          </div>
                       </div>
                    </div>

                    <div className={styles.skillIt}>
                       <h6>Next.js</h6>
                       <div className={styles.skillBar}>
                          <div  className={styles.innerBar} role="progressbar" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100" style={{width: "89%"}}>
                            <span>89%</span>
                          </div>
                       </div>
                    </div>
                </div>

                <div className={styles.flexItems}>
                    <div className={styles.skillIt}>
                       <h6>Node.js</h6>
                       <div className={styles.skillBar}>
                          <div  className={styles.innerBar} role="progressbar" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100" style={{width: "89%"}}>
                            <span>89%</span>
                          </div>
                       </div>
                    </div>

                    <div className={styles.skillIt}>
                       <h6>PostgreSQL</h6>
                       <div className={styles.skillBar}>
                          <div className={styles.innerBar} role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}>
                            <span>80%</span>
                          </div>
                       </div>
                    </div>

                    <div className={styles.skillIt}>
                       <h6>MongoDB</h6>
                       <div className={styles.skillBar}>
                          <div className={styles.innerBar} role="progressbar" aria-valuenow="73" aria-valuemin="0" aria-valuemax="100" style={{width: "73%"}}>
                            <span>73%</span>
                          </div>
                       </div>
                    </div>

                    <div className={styles.skillIt}>
                       <h6>Ionic</h6>
                       <div className={styles.skillBar}>
                          <div className={styles.innerBar} role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}}>
                            <span>70%</span>
                          </div>
                       </div>
                    </div>
                </div>

               </div>

            </div>
            
        </section>
    );
}