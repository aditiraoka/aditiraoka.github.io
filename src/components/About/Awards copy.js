import React from "react";
import { Row, Col } from "react-bootstrap";
import ghcLogo from "../../Assets/GHC.jpg";
import bronzeLogo from "../../Assets/Bronze_Award.png";

function Awards() {
    return (
      <>
        {/* Responsive Image Gallery */}
        <Row style={{ justifyContent: "center", padding: "20px 0" }}>
          <h2>Awards & Recognitions</h2>
  
          <Col className="responsive">
            <div className="gallery" style={{ width: "80%", height: "auto", margin: "10%" }}>
              <a target="_blank" rel="noopener noreferrer" href="img_5terre.jpg">
                <img src={bronzeLogo} alt="Bronze Award" style={{ width: "90%", height: "auto", padding: "16px"}}/>
              </a>
              <div className="desc">
                <h3>MBRDI Bronze Star Award 2020</h3>
                <p>Awarded for outstanding customer focus and technical excellence in supporting MBUSA DevOps toolchain platform independently ensuring customer satisfaction and service excellence.</p>
                </div>
            </div>
          </Col>
  
          <Col className="responsive">
            <div className="gallery" style={{ width: "80%", height: "auto", margin: "10%" }}>
              <a target="_blank" rel="noopener noreferrer" href="img_forest.jpg">
                <img src={ghcLogo} alt="Forest" style={{ width: "90%", height: "auto", padding: "16px" }} />
              </a>
              <div className="desc">
                <h3>Grace Hopper Student Scholar</h3>
                <p>Selected by the Computer Science Department to attend the Grace Hopper Conference 2024 virtually. The experience offered valuable insights into new technologies and expanded my professional network. </p></div>
            </div>
          </Col>
  
          <div className="clearfix"></div>
        </Row>
      </>
    );
  }
  
  export default Awards;
  
