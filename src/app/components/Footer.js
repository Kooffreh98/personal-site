import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer>
            <div className="container2">
                <div className="row footer-row">
                  <div className="col-md-6 m-10px-tb">
                       <div className={styles.nav}>
                         <a href="https://web.facebook.com/paul.kooffreh?_rdc=1&_rdr"><i class="fab fa-facebook-f"></i></a>
                         <a href="https://www.instagram.com/kooffreh_paul/"><i class="fab fa-instagram"></i></a>
                         <a href="https://www.linkedin.com/in/paul-kooffreh-851684305"><i class="fab fa-linkedin-in"></i></a>
                         <a href="https://github.com/Kooffreh98"><i class="fab fa-github"></i></a>
                       </div>
                  </div>

                 <div className="col-md-6 m-10px-tb">
                     <p className={styles.para}><i class="fa fa-regular fa-copyright"></i> 2024 copyright all right reserved</p>
                 </div>

                </div>
                
            </div>
        </footer>
    );
}