import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectsCards";
import Particle from "../Particle";
import todo from "../../assets/todo.png";
import timetable from "../../assets/timetable.png";
import test from "../../assets/test.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
        Here is my coding journey from HTML to React
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={todo}
              isBlog={false}
              title="TODO List"
              description="TODO List project made with JavaScript"
              ghLink="https://github.com/ayse-kodehode/to-do-list"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={timetable}
              isBlog={false}
              title="Time Table"
              description="My simple Time Table project made with HTML."
              ghLink="https://github.com/ayse-kodehode/Time-Table"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={test}
              isBlog={false}
              title="ZeroBank-Test Project"
              description="Zero Bank Automation Test Project"
              ghLink="https://github.com/ayse-kodehode/ZeroBank"
              // demoLink=""              
            />
          </Col>

          
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects; 
