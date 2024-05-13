import styles from "./paul.module.css";

export default function Homecontainer(params) {
    return (
        <section id="home" className={styles.homeBanner}>
          <div className={styles.topDiv}>
           <div className={styles.heading}>
             <h6 style={{fontSize: "24px", marginBottom: "18px", fontWeight: "500" }}>Hello There!</h6>
             <h1  style={{fontSize: "80px", marginBottom: "25px", fontWeight: "600" }}>I'm Paul Kooffreh</h1>
           </div>

           <div className={styles.flexDiv1}>
            <span>WEB DEVELOPER</span>
            <span>SOFTWARE DEVELOPER</span>
            <span>WEB DESIGNER</span>
           </div>

           <div className={styles.goTo}>
              <a href="#about"><span></span></a>
           </div>

          </div>
        </section>
       
    );
}