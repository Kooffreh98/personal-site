import styles from "./paul.module.css";

export default function SectionTitle(props) {
    return (
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
              <h3 className={styles.sectionTitle}>{props.heading}</h3>
              <p className={styles.sectionText}>A LEAD FULL STACK DEVELOPER BASED IN NIGERIA</p>
          </div>
        </div>
    );
    
}