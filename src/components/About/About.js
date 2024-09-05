import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Awards from "./Awards";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <div style={{margin:"2% 2% 2% 2%"}}>
        <Row style={{ padding: "10px" }}>
          <Col
            /*md={7}*/
            style={{
              /*justifyContent: "center",
              paddingTop: "30px",*/
              paddingBottom: "50px",
              width: "100%"
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            <strong className="purple"> Professional Experience </strong>
            </h1>
            <Aboutcard />
          </Col>
          {/*<Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>*/}
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <Awards />

        {/*<h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
        */}
      </div>
    </Container>
  );
}

export default About;
