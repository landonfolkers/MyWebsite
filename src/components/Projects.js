import React, { Component } from 'react'
import '../App.css'
import Header from './Header'
import Footer from './Footer'

class Projects extends Component {
    render() {
        return (
            <div id='page'>
                <Header />
                <div className="info">
                    <h2>Projects</h2>
                    <section id="content">
                        <article id='piece'>
                            <h3>Dog Finder</h3>
                            <p>Dog Finder is an app that allows you to find random dogs in shelters across America. You can search by dog breed and gender. The app was created using HTML5, CSS, and JavaScript.</p>
                            <a href='http://dog-finder.surge.sh/'>Dog Finder</a>
                        </article>
                        <article id='piece'>
                            <h3>Pixel Art</h3>
                            <p>Pixel Art lets you create gorgeous pixel art. You select your color at the bottom of the page and then click on the pixel you want to color in, to make any creation you want. The app was created using HTML5, CSS, and JavaScript.</p>
                            <a href='http://pixelart-art.surge.sh/'>Pixel Art</a>
                        </article>
                        <article id='piece'>
                            <h3>Number Guessing Game</h3>
                            <p>This number guessing game is a console application that has been created with C#. The game is simple, the program randomly selects a number between one and ten, and then the user has to guess what the number is. The user keeps guessing until they get it right, and then they can choose whether or not they want to play again.</p>
                            <a href='https://github.com/landonfolkers/NumberGenerator'>Number Guesing Game</a>
                        </article>
                        <article id='piece'>
                            <h3>Dinos</h3>
                            <p>Dinos is a collection of apps that perform various tasks. All of the apps make fetch calls to an API and then render that information. The apps are built using React.</p>
                            <a href='http://dinodrill1.surge.sh/'>Dino 1</a>
                            <a href='http://dinodrill2.surge.sh/'>Dino 2</a>
                            <a href='http://dinodrill3.surge.sh/'>Dino 3</a>
                        </article>
                    </section>
                </div>
                <Footer />
            </div>
        )
    }

}

export default Projects