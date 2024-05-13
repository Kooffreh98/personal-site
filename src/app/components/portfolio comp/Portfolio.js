import SectionTitle from "../SectionTitle";
import Gallery from "./Gallery";
import styles from "./work.module.css";
import Image from "next/image";

export default function Portfolio() {
    return(
        <section id="portfolio" className="section-2">
         <div className="container2">
            <SectionTitle heading="LATESTS WORKS"/>

            <div className="row gap">
              
              <Gallery 
                src="/images/firstimage.png" 
                alt="wavewash" 
                head="Wavewash" 
                text="App" 
                link="images/app-release.apk"
              />

              <Gallery 
                src="/images/house-69.png" 
                alt="house hunter image" 
                head="House-Hunter" 
                text="Site" 
                link="https://house-hunter-phi.vercel.app/"
              />

            </div>
        </div>

    </section>

    );
}