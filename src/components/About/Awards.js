import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import ghcLogo from "../../Assets/GHC.jpg";
import bronzeLogo from "../../Assets/Bronze_Award.png";
import danceLogo from "../../Assets/dance.jpeg";

function Awards() {
    return (
      <>
        {/* Image Gallery */}
        <Card className="quote-card-view" style={{ width: "100%" }}>
            <Card.Body>
                <Container>
                  <Row>
                    <Col md={16}>
                    <h2 className="purple"><b>Awards & Recognitions</b></h2>
                      <div className="horizontal-award">
                          
                          <div className="award-card">
                            <Card.Img variant="top" src={bronzeLogo} />
                            <h5>MBRDI Bronze Star Award 2020</h5>
                            <p class="exp-desc">Awarded for outstanding customer focus and technical excellence in supporting MBUSA DevOps toolchain platform independently ensuring customer satisfaction and service excellence.</p>
                          </div>

                          <div className="award-card">
                            <Card.Img variant="top" src={ghcLogo} />
                            <h5>Grace Hopper Student Scholar</h5>
                            <p class="exp-desc">Selected by the Computer Science Department to attend the Grace Hopper Conference 2024 virtually. The experience offered valuable insights into new technologies and expanded my professional network.</p>
                          </div>

                          <div className="award-card">
                            <Card.Img variant="top" src={danceLogo} />
                            <h5>Vidwath Degree <br/> in Bharatnatyam</h5>
                            <p class="exp-desc">Earned a Vidwath Degree in Bharatanatyam, showcasing advanced proficiency and deep understanding of Indian classical dance.</p>
                            <br/>
                          </div>
                          
                      </div>
                    </Col>
                  </Row>
              </Container>
            </Card.Body>      
    </Card>
      </>
    );
  }
  
  export default Awards;
  
