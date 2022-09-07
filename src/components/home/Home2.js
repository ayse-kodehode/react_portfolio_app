import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  // AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body"> I'm Front-end Developer and Software Test Engineer who
            loves to try new things and build projects.
              
              <br />
              <br />I solve the real-world problems by using
              <i>
                <b className="purple"> Programming Languages and Tools 🤪</b>
              </i>
              <br />
              <br />
              I do not hesitate to learn new  &nbsp;
              <i>
                <b className="purple">Web Technologies  </b> expecially
                  related to{" "}
                <b className="purple">
                  Testing and Programming.
                </b>
              </i>
              <br />
              <br />
             
             <b className="purple"></b> 
              <i>
                <b className="purple">
                  {" "}
                 
                </b>
              </i>
              &nbsp; 
              <i>
                <b className="purple"> </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ayse-kodehode"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                
                <a
                  href="https://www.linkedin.com/in/ayse-furuncu-a19156243"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;