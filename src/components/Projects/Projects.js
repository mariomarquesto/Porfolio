import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import drivers from "../../Assets/Projects/drivers.jpg";
import paises2 from "../../Assets/Projects/paises2.jpg";
import videoGames from "../../Assets/Projects/videoGames.jpg";
import TiendaCuty from "../../Assets/Projects/TiendaCuty.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={paises2}
              isBlog={false}
              title="COUNTRIES"
              description="COUNTRIES | Proyecto Individual | OBJETIVOS: Construir una Single Page Application utlizando las tecnologías: React, Redux, Node, Express y Sequelize"
              ghLink="https://github.com/mariomarquesto/COUNTRIES.git"
              
            />
            
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={videoGames}
              isBlog={false}
              title="VIEDO GAMES"
              description="VIDEO GAMES | Proyecto Individual | OBJETIVOS: Construir una Single Page Application utlizando las tecnologías: React, Redux, Node, Express y Sequelize"
              ghLink="https://github.com/mariomarquesto/ProyectoIndividualVideoGames.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drivers}
              isBlog={false}
              title="TiendaCuty"
              description="TIENDA CUTY | Proyecto Ecommerce | OBJETIVOS:  aplicación de comercio electrónico desarrollada en React con Material-UI para el diseño de la interfaz de usuario y Firebase como backend para la autenticación "
              ghLink="https://github.com/mariomarquesto/ecommerce-firebase.git"
                            
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TiendaCuty}
              isBlog={false}
              title="DRIVERS"
              description="DRIVERS | Proyecto Individual | OBJETIVOS: Construir una Single Page Application utlizando las tecnologías: React, Redux, Node, Express y Sequelize"
              ghLink="https://github.com/mariomarquesto/Drivers.git"
                            
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
