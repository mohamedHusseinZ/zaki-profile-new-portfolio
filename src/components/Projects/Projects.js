import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Sports-House-Management-System_db"
              description="Manage Athletes, Events, and Results.
              Store information such as athlete details, event details, and competition results.."
              ghLink="https://github.com/mohamedHusseinZ/Sports-House-Management-System_db"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Transaction App"
              description="The transaction app is a user-friendly tool designed for tracking personal finances. It allows users to add new transactions by specifying a description, category, and amount. Users can search through their transactions using the search bar, which filters results based on the description. All transactions are displayed in a table format, making it easy to view and manage financial records at a glance. The app is ideal for anyone looking to organize their expenses and income efficiently."
              ghLink="https://github.com/mohamedHusseinZ/bank-flatiron"
              demoLink="https://bank-flatiron-six.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="pizz rest api"
              description=" Pizza Restaurant domain"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title=""
              description="Convert-Currency-to-Multiple-Currencies."
              ghLink="https://github.com/mohamedHusseinZ/Convert-Currency-to-Multiple-Currencies"
              demoLink="https://convert-currency-to-multiple-currencies.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="TravelBuddy"
              description="enables travelers to find there fellow travelers."
              ghLink="https://github.com/MainaZaquir/TravelBuddy"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Color-Generator"
              description="RGB Color Model and HSL Color Model
              ."
              ghLink="https://github.com/mohamedHusseinZ/Color-Generator"
              demoLink="https://color-generator-one-beta.vercel.app/color-generator"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
