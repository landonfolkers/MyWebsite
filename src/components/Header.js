import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return <header>
            <section id='menu'>
                <ul id='choices'>
                <div className="first">
                    <li>
                        <Link to="About">About</Link>
                    </li>
                    <li>
                        <Link to="Skills">Skills</Link>
                    </li>
                    </div>
                    <li>
                        <Link to="/"><h1>Landon Folkers</h1></Link>
                    </li>
                    <div className="second">
                    <li>
                        <Link to="Projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="Contact">Contact</Link>
                    </li>
                    </div>
                </ul>
            </section>
        </header>
    }
}
export default Header