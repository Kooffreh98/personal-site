import Link from 'next/link';
import { useState, useEffect } from "react";
export default function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY);
            if (window.scrollY >= 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window,removeEventListener("scroll", handleScroll);
        };

    }, []);
     

    return (
        <>
            <nav className={isScrolled ? "navbar navbar-expand-lg fixed-nav" : "navbar navbar-expand-lg"}>
                <div className="container1 container-fluid">
                   <a className={isScrolled ? "fixed-brand navbar-brand": "navbar-brand" } href="#">Paul</a>
                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                   </button>
                   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                      <div className="navbar-nav">
                         <Link className={isScrolled ? "fixed-link link nav-link active": "nav-link link active" } aria-current="page" href="#home">Home</Link>
                         <Link className={isScrolled ? "fixed-link link nav-link": "nav-link link" } href="#about">About</Link>
                         <Link className={isScrolled ? "fixed-link link nav-link": "nav-link link" } href="#services">Services</Link>
                         <Link className={isScrolled ? "fixed-link link nav-link": "nav-link link" } href="#portfolio">Portfolio</Link>
                         <Link className={isScrolled ? "fixed-link nav-link": "nav-link" } href="#contact">Contact</Link>
                      </div>
                   </div>
               </div>

            </nav>
        </>
    );
}