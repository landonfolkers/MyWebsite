import React from 'react'
import '../App.css'

export default function Footer() {
    return <footer>
        <small>Designed with React</small>
        <nav className="social">
        <a href="https://www.facebook.com/landonfolkers" className="fa fa-facebook"><span className="_hidden"></span></a>
        <a href="https://twitter.com/LandonFolkers" className="fa fa-twitter"><span className="_hidden"></span></a>
        <a href="https://www.instagram.com/landonfolkers/?hl=en" className="fa fa-instagram"><span className="_hidden"></span></a>
    </nav>
    </footer>
}
