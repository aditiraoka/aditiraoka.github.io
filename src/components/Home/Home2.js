import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.jpeg";
import myProfile from "../../Assets/myProfile.jpg";
import Tilt from "react-parallax-tilt";
import { ImPointRight } from "react-icons/im";
import {
  AiFillGithub,
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
            <p className="home-about-body">
            I recently graduated with a <b className="purple">Master of Science in Computer Science</b> from <b className="purple">University of Texas Dallas</b>, with a passion for DevOps and software engineering. 
            <br />
            <br />With three years of hands-on experience at <b className="purple">Infosys and Mercedes-Benz Research & Development India</b>, I've honed my skills in automating build pipelines, managing complex systems, and driving continuous integration. 
            <br />
            <br />I'm committed to leveraging technology to solve challenges and create innovative solutions that make an impact. 
            <br />
            <br />It was a love at first sight with programming for me. The minute I wrote my first "Hello World" code, I was hooked!
            <br />
            <br />I'm currently looking for my next big adventure. So stay tuned!
            <br/>
            <br />Other than coding and problem solving, I love to 
              <ul>
                        <li className="about-activity">
                          <ImPointRight /> Read all genres of books
                        </li>
                        <li className="about-activity">
                          <ImPointRight /> Practice Bharatnatyam (Indian Classical Dance)
                        </li>
                        <li className="about-activity">
                          <ImPointRight /> Brew some delicious coffee!
                        </li>
                </ul>
            <br/>A quote I like to live by:
            <blockquote className="blockquote mb-0">
                      <p style={{ color: "rgb(155 126 172)" }}>
                        "It does not do to dwell on dreams and forget to live! "{" "}
                      </p>
            </blockquote>
              {/*<br />I am fluent in classics like
              <i>
                <b className="purple"> Python, C++, Javascript and Java. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
              */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
          <br/><br/><br/><br/><br/>
            <Tilt>
              <img src={myProfile} className="img-fluid" alt="avatar" />
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
                  href="https://github.com/aditiraoka"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aditirao-kalanji/"
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
