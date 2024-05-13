import Link from "next/link";
import styles from "./work.module.css";
import Image from "next/image";

export default function Gallery(props) {
    return (
        <div className="col-md-6 col-lg-4">
            <div className={styles.portfolioBox}>
              <div className={styles.portfolioImg}>
                 <Image src={props.src} alt={props.alt} width={348} height={341}/>
              </div>
              <div className={styles.portfolioInfo}>
                 <h5>{props.head}</h5>
                 <span>{props.text}</span>
              </div>
              <a className={styles.overLay} href={props.link}></a>
            </div>
           
        </div>
    );
    
}