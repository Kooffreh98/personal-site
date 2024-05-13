import styles from "./about.module.css";

export default function AboutItem(props) {
    return (
        <div className={styles.media}>
           <label>{props.label}</label>
           <p>{props.text}</p>
        </div>
    );
    
}