import React, { Component } from 'react'
import '../App.css'
import Header from './Header'
import Footer from './Footer'

class Contact extends Component {
    render() {
        return (
            <div id='page'>
                <Header />
                <div className="info">
                    <h2>Contact</h2>
                    <section id="content">
                        <article id='piece'>
                            <h3>Email</h3>
                            <p>LandonFolkers@yahoo.com</p>
                        </article>
                        <article id='piece'>
                            <h3>Phone</h3>
                            <p>(720)-608-1052</p>
                        </article>
                        <article id='piece'>
                            <h3>LinkedIn</h3>
                            <a href='https://www.linkedin.com/in/landonfolkers/'>Landon Folkers</a>
                        </article>
                        <article id='piece'>
                            <h3>Github</h3>
                            <a href='https://github.com/landonfolkers'>Landon Folkers</a>
                        </article>
                        <article id='piece'>
                            <h3>Social Media</h3>
                            <a href='https://www.facebook.com/landonfolkers'>Facebook</a>
                            <a href='https://twitter.com/LandonFolkers'>Twitter</a>
                            <a href='https://www.instagram.com/thelegendoflandon/?hl=en'>Instagram</a>
                        </article>
                    </section>
                </div>
                <Footer />
            </div>
        )
    }

}

export default Contact