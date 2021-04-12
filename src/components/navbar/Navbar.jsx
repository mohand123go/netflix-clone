import { useEffect, useState } from 'react';
import './Navbar.css'


const Navbar = () => {
    const [navToggle, setNavToggle] = useState(false)
    useEffect(() => {
        const eventRef = window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setNavToggle(true)

            } else { setNavToggle(false) }
        })

        return () => {
            window.removeEventListener('scroll', eventRef)
        }
    }, [])
    return (
        <nav className={`navbar ${navToggle && 'nav_bg_black'}`}>
            <img className='nav__logo' src="netflix.png" alt="" />
            <img className='nav__avtar' src="avtar.png" alt="" />
        </nav>);
}

export default Navbar;