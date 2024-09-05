import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
//import './Timeline.css'; // Import CSS for timeline

function AboutCard() {
  const experiences = [
    {
      title: "Senior System Engineer",
      company: "Infosys Ltd., India",
      duration: "Jul 2021 – Jun 2022",
      description: "Led offshore DevOps team in automating CI builds, deployments, and cloud migration, enhancing efficiency and scalability.",
    },
    {
      title: "Consultant",
      company: "Mercedes Benz Research & Development, India",
      duration: "Jun 2020 – Jul 2021",
      description: "Developed APIs and automated scripts to streamline releases and optimize monitoring tool onboarding with salt-states automation.",
    },
    {
      title: "Graduate Trainee",
      company: "Mercedes Benz Research & Development, India",
      duration: "Aug 2019 – Jun 2020",
      description: "Promoted from Graduate Engineering Trainee to Consultant, rapidly advancing by developing Python and Flask software to automate Linux system administration tasks.",
    },
    {
      title: "Intern",
      company: "DataSatva Solutions PVT LTD, India",
      duration: "Jun 2018 - Aug 2018",
      description: "Worked on Microsoft Azure to develop a customer help chat-bot to respond to the user query and train them for natural language processing.",
    },
    // Add more experiences
  ];
  
  return (
    <Card className="quote-card-view" style={{ width: "100%" }}>
      
      <Card.Body>
        <Col className="text-center" style={{ justifyContent: "center"}}>
          <h4 style={{ textAlign: "justify", margin: "2% 5% 5% 5%"}}>
            I spent about 3 years in the corporate world before re-joining the academics.
            <br/> The stint made me skilled in tools like <span className="purple">GitHub, Jenkins, Salt, IBM's UrbanCodeDeploy</span>, and languages such as <span className="purple">Python, Java, C++, HTML, CSS, JavaScript</span>.
            <br /> It made me experienced in automating CI builds and deployments, implementing agile methodologies, and migrating DevOps to cloud-based automation.
          </h4>
        </Col>
      </Card.Body>

      {/* ======= Experience Section with Horizontal Timeline ======= */}
      <Container fluid className="about-card">
      <Row>
        <Col md={16}>
          <h2 className="purple"><b>Experience</b></h2>
          <div className="horizontal-timeline">
            
            {experiences.map((experience, index) => (
              <div className="timeline-card" key={index}>
                <h5>{experience.title}</h5>
                <p>{experience.company}</p>
                <p>{experience.duration}</p>
                <p class="exp-desc">{experience.description}</p>
              </div>
            ))}
            
          </div>
        </Col>
      </Row>
    </Container>
    </Card>
  );
}

export default AboutCard;