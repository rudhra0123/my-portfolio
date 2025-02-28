import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import myimage from "../../assets/rudhra.jpg";
import pdf from "../../assets/22A91A0584(resume).pdf";
import { AiOutlineDownload } from "react-icons/ai";
const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, my name is <span className="yellow">M. Venkata Siva Rama Raju.</span>
              <br />
              <br />
              I am currently pursuing my Bachelor's degree in Computer Science and Engineering (BTech 3rd year).
              <br />
              <br />
              As a <b className="yellow">Full-Stack</b> developer, I enjoy tackling new challenges and continuously expanding my skillset.
              <br />
              <br />
              I am proficient in <b className="yellow">JavaScript</b>, as well as have knowledge in programming languages such as C, Java, C++.
              <br />
              <br />
              I have a passion for working with <b className="yellow">Node.js, MongoDB, React, React Native.</b>
              <br />
              <br />
              I am also interested in building new <b className="yellow">Web Technologies and Products</b>, as well as exploring areas related to
              <b className="yellow"> Artificial Intelligence.</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myimage} style={{ height: 350, width: 350, borderRadius: "40%" }} alt="avatar" />
            </Tilt>
            <Row className="d-flex justify-content-center mt-4">
              <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px",marginTop:30 }}>
                <AiOutlineDownload />
                &nbsp;Download Resume
              </Button>
            </Row>
          </Col>

        </Row>

        {/* ✅ Download Resume Button After the Image */}


        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/rudhra0123"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/rudh_raaa_varma/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="instagram"
                >
                  <FaInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/manthina-venkata-siva-rama-raju-25352a277/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
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

export default About;