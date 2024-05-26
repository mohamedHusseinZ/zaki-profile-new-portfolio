import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">mohamed hussein</span>
            from <span className="purple"> Nairobi, kenya.</span>
            <br />
            As an aspiring full-stack developer, I've cultivated a robust skill set through rigorous academic coursework, personal projects, and self-directed learning..
            <br />
            • Recent graduate with software
engineering from moringa school
bootcamb seeking to launch a career as
a Full Stack Developer. Eager to apply
academic knowledge and technical
skills in Databases:mysql, PostgreSQL,
MongoDB, Python, JavaScript, React,
REST APIs, Flask, Django, CSS, and HTML
to contribute to innovative software
projects in a professional environment.
•
• Relevant Coursework:
•
• Full Stack Web Development
• Database Systems
• Object-Oriented Programming
• Web Design and Development
• Software Engineering
• Algorithms and Data Structures and
Networking.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> reading books and watch movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">zaki</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
