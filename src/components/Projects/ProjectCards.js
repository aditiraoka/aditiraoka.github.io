import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img  variant="top" src={props.imgPath} alt="card-img" style={{height: "300px" }}/>
      <div id="project-img-line"></div>
      <Card.Body>
        <Card.Title><b>{props.title}</b></Card.Title>
        <Card.Text>Keywords: {props.keywords}</Card.Text>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
