import React, { Component } from 'react'
import '../App.css'

class About extends Component {
    render() {
        return (
            <div className="info">
                <h2>About</h2>
                <section id="content">
                    <article id='about'>
                        <div id='abouttext'>
                            <h3>Background</h3>
                            <p>I was born and raised in Omaha, NE. I grew up with two sisters and one brother on an acreage just outside of the city. I loved the outdoors and was constantly running around outside, climbing trees, playing paintball, hiking, hunting, and doing chores around the property with my Dad. When it was time for me to go to college, I knew I wanted to be able to snowboard while I was there and decided to go to Colorado Christian University. I graduated from that school in 2016, with a bachelor's degree in Business Administration. I then pursued a career in the business world, but soon learned that it was not where I belonged. I decided to make a change in my career path. I made the decision to attend Galvanize Inc. and began working towards a career in web development and full-stack application development.</p>
                            <h3>Hobbies</h3>
                            <li>Snowboarding</li>
                            <li>Hiking</li>
                            <li>Working Out</li>
                            <li>Alligator Wrestling</li>
                            <li>Going to Movies</li>
                            <li>Kayaking</li>
                            <li>Paintball</li>
                            <li>Relaxing in Hot Springs</li>
                            <li>Camping</li>
                            <li>Mixed Martial Arts Training</li>
                            <li>Playing With and Training my Dog</li>
                            <li>Watching Football and Hockey</li>
                        </div>
                        <section id='images'>
                            <div id='aboutimg'>
                                <img src='./pictures/profile.jpg'  alt=''/>
                                <img src='./pictures/maryandrey.jpg' alt='' />
                            </div>
                            <div id='aboutimg'>
                                <img src='./pictures/family.jpg' alt=''/>
                                <img src='./pictures/gator1.jpg' alt='' />
                            </div>
                        </section>
                    </article>
                </section>
            </div>
        )
    }

}

export default About