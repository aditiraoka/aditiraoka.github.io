import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import lstm from "../../Assets/Projects/lstm.png"
import pottery from "../../Assets/Projects/pottery.png"
import predictive from "../../Assets/Projects/predictive.png"
import sentiment from "../../Assets/Projects/sentiment.png"
import libCatalogue from "../../Assets/Projects/libCatalogue.png"
import bigfive from "../../Assets/Projects/bigfive.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        <strong className="purple"> My Recent Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lstm}
              isBlog={false}
              title="Predictive Modeling for Bitcoin Price"
              keywords="Python, LSTM , Big Data Analysis"
              description="For my Big Data course, I explored financial forecasting by predicting Bitcoin's price movements using Long Short-Term Memory (LSTM) networks, a type of Recurrent Neural Network (RNN) designed for sequential data. 
              I developed time-series features, fine-tuned hyperparameters, and trained the LSTM model over multiple epochs. To assess performance, I used various evaluation metrics, gaining insights into both the model and the complexities of cryptocurrency pricing. 
              This project deepened my understanding of LSTM networks and their application in financial prediction."
              ghLink="https://github.com/aditiraoka/CS6350_Big_Data_Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pottery}
              isBlog={false}
              title="Pottery Studio"
              keywords="REACT JS, JavaScript, MongoDB"
              description="In my web programming course, I led a 5-member team in developing a dynamic e-commerce platform for 'Refined Pottery Studio,' a fictional business offering handcrafted ceramics and pottery classes. 
              Using technologies like Express JS, React, HTML, and MongoDB, we built a user-friendly website with features such as product browsing, class registration, and secure checkout. The project earned an A grade, reflecting both the platform’s functionality and visual appeal. 
              This experience honed my technical skills and demonstrated my leadership in driving successful team-based project execution."
              ghLink="https://github.com/aditiraoka/CS6314_Project_Pottery_Studio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={predictive}
              isBlog={false}
              title="Predictive Text Generator"
              keywords="n-gram, NLP, Python, RNN"
              description="In my NLP coursework, I developed a language model using unigram and bigram techniques to explore language prediction. Leveraging Python and its libraries, I built the model from scratch, utilizing a corpus of Chicago hotel reviews, which I split into training and validation sets. 
              I assessed the model's performance using the perplexity metric to evaluate its accuracy in predicting the next word in a sequence. This project not only strengthened my understanding of statistical language models but also enhanced my practical skills in Python and NLP methodologies."
              ghLink="https://github.com/aditiraoka/CS6320_NLP/tree/main/Assignment1"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sentiment}
              isBlog={false}
              title="Sentiment analysis on Yelp reviews"
              keywords="FFNN, RNN, Word Embeddings"
              description="IIn my NLP course, I conducted customer sentiment analysis on Yelp reviews by comparing two models. I implemented a Feedforward Neural Network (FFNN) using fixed word vectors and Softmax for predictions, alongside a Recurrent Neural Network (RNN) that utilized sequential data, word embeddings, and aggregated hidden states for output. 
              Through hyperparameter tuning, including adjustments to hidden layer sizes and training epochs, I optimized both models. By analyzing accuracy and creating detailed reports, I assessed the strengths and limitations of each approach. This project deepened my NLP expertise and understanding of model selection for real-world sentiment analysis."
              ghLink="https://github.com/aditiraoka/CS6320_NLP/tree/main/Assignment%202"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={libCatalogue}
              isBlog={false}
              keywords="CSS, Python Flask, JWT"
              title="Library Catalogue"
              description="Fueled by my love for books and a drive to enhance my reading experience, I developed a web-based library catalog system as a personal project. I used Python-Flask for the backend, HTML and CSS for an intuitive user interface, and JWT for secure authentication. This system allows me to easily add, edit, and delete book information, keeping my library well-organized. 
              I also incorporated a 'random next read' feature to introduce an element of surprise to my reading selections. By deploying the application on Heroku, I ensured it is accessible from anywhere, demonstrating my capability to transform concepts into practical solutions."
              ghLink="https://github.com/aditiraoka/Library_Catalogue"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bigfive}
              isBlog={false}
              keywords="Skylearn, Pandas, Python Libraries"
              title="Predicting Big 5 Personality"
              description="During my undergraduate studies, I delved into the intersection of psychology and machine learning by predicting personality traits from social media data. Using the OCEAN model (Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism), I employed scikit-learn and Python to analyze user data and uncover personality insights. 
              The project involved thorough data preprocessing, feature engineering, and evaluation of various machine learning algorithms. This work deepened my understanding of how online behavior relates to personality traits, enhancing my data science skills and contributing to the field of computational personality prediction."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
