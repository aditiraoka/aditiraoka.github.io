import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view" style={{justifyContent: "center"}}>
      <Card.Body>
        <div style={{justifyContent: "center"}}>
          <p style={{ textAlign: "justify" }}>
          I spent about 3 years in the corporate world before re-joining the academics.
          <br/>The stint made me skilled in tools like <span className="purple">GitHub, Jenkins, Salt, IBM's UrbanCodeDeploy,</span>, and languages such as <span className="purple">Python, Java, C++, HTML, CSS, JavaScript</span>. 
          <br/>It made me experienced in automating CI builds and deployments, implementing agile methodologies, and migrating DevOps to cloud-based automation.
          </p>
        </div>

          {/*<footer className="blockquote-footer">Aditirao</footer>*/}
        
      </Card.Body>

       {/* ======= Experience Section ======= */}
      <section id="experience" class="experience">
      <div class="container" data-aos="fade-up">

        {/*<div class="section-title"> 
          <h2>Experience</h2>
        </div>*/}

        <div class="row">
          <div class="col-lg-6">
            <h3 class="experience-title">Work Experience</h3>

            <div class="experience-item">
              <h4 >Senior System Engineer</h4>
              <h5>Jul 2021 – Jun 2022</h5>
              <p><em>Infosys Ltd., India</em></p>
              <ul>
                <li>Led offshore DevOps team in automating CI builds, deployments, and cloud migration, enhancing efficiency and scalability.</li>
              </ul>
            </div>

            <div class="experience-item">
                <h4>Consultant</h4>
                <h5>Jun 2020 – Jul 2021</h5>
                <p><em>Mercedes Benz Research & Development, India</em></p>
                <ul>
                  <li>Developed APIs and automated scripts to streamline releases and optimize monitoring tool onboarding with salt-states automation.</li>
                </ul>
            </div>
              
            <div class="experience-item">
              <h4>Graduate Engineering Trainee</h4>
              <h5>Aug 2019 – Jun 2020</h5>
              <p><em>Mercedes Benz Research & Development, India</em></p>
              <ul>
                <li>Promoted from Graduate Engineering Trainee to Consultant, rapidly advancing by developing Python and Flask software to automate Linux system administration tasks.</li>
              </ul>
            </div>

            <div class="experience-item">
              <h4>Intern</h4>
              <h5>Jun 2018 - Aug 2018</h5>
              <p><em>DataSatva Solutions PVT LTD, India</em></p>
              <ul>
                <li>Worked on Microsoft Azure to develop a customer help chat-bot to respond to the user query and train them for natural 
language processing.</li>
              </ul>
              
            </div>
          </div>

          <div class="col-lg-6" style={{ justifyContent: "flex-start", margin: "0% 0% 20px 0%"}}>
            <h3 class="experience-title">Leadership Experience</h3>
            <br/><br/><br/><br/><br/>
	      <div class="experience-item">
              <h4>Peer Tutor</h4>
              <p><em>University of Texas at Dallas, Texas</em></p>
              <ul>
                <li>Tutoring undergraduate students in college Physics</li>
              </ul>
            </div>

            <div class="experience-item">
              <h4>LEAD Member</h4>
              <p><em>KLS Gogte Institute of Technology, India</em></p>
              <ul>
                <li>Volunteered at conducting awareness campaigns for government school kids, helped at old age home during senior’s day, distributed hygiene products among the needy.</li>
              </ul>
            </div>

            <div class="experience-item">
              <h4>MBRDI CSR Member</h4>
              <p><em>Mercedes Benz Research & Development, India</em></p>
              <ul>
                <li>Helped organize and participated in activities like raising traffic awareness among kids, cleaning of lakes</li>
              </ul>
            </div>

            <div class="experience-item">
              <h4>President of Student General Body</h4>
              <p><em>Amrita Vidyalayam High School, India</em></p>
              <ul>
                <li>Led and represented the student body, coordinating school events and initiatives while fostering communication between students and administration.</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
    {/* End Experience Section */}
    </Card>
  );
}

export default AboutCard;
