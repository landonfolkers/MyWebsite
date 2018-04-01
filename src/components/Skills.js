import React, { Component } from 'react'
import '../App.css'

class Skills extends Component {
    render() {
        return (
            <div className="info">
                <h2>Skills</h2>
                <section id='content'>
                    <article id='piece'>
                        <h3>Software</h3>
                        <li>Graduate of Galvanize Inc. Web Development Immersive Full-Stack program. Mastered the concepts and techniques of full-stack app development.</li>
                        <li>Created 15+ programs and applications using HTML5, CSS, and JavaScript.</li>
                        <li>Experience with creating, testing, and deploying React applications.</li>
                        <li>Knowledge and experience with C#, .NET, and .NET Core</li>
                        <li>Proficient in writing Cypress tests for front-end and full-stack applications.</li>
                        <li>Knowledge of Node.js and Express for creating servers and RESTful APIs.</li>
                        <li>Experience using Knex, PostgreSQL, and SQL to create databases for applications.</li>
                        <li>Knowledge of JavaScript libraries such as WinJS, Stripe, and Meteor.</li>
                    </article>
                    <article id='piece'>
                        <h3>Teamwork and Collaboration</h3>
                        <li>Worked on projects in Agile and Scrum environments.</li>
                        <li>Collaborated with teams to create front-end and full-stack applications during hackathons.</li>
                        <li>Experience leading teams in projects, group brainstorming sessions, and decision making environments.</li>
                    </article>
                    <article id='piece'>
                        <h3>Critical Thinking and Problem Solving</h3>
                        <li>Expert in a method of brainstorming that is put into practice by the Imagineers at The Walt Disney Company, Chick-fil-a, and many other corporations throughout the world.</li>
                        <li>Proficient in problem solving by utilizing a method that isolates the problem and solves it quickly and efficiently. This technique is used by the engineers at NASA.</li>
                        <li>Expert in a decision making system that quantifies all data in order to conclusively prove the best possible choice.</li>
                        <li>Strong knowledge of analyzation techiques to help dissect and interpret data.</li>
                    </article>
                </section>
            </div>
        )
    }
}

export default Skills