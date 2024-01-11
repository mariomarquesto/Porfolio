import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";

function Techstack() {
  const iconStyle = { fontSize: "2em" };
  const textStyle = { fontSize: "0.2em", marginTop: "10px" };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <DiJavascript1 style={iconStyle} />
        <p style={textStyle}>JavaScript</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <DiNodejs style={iconStyle} />
        <p style={textStyle}>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <DiReact style={iconStyle} />
        <p style={textStyle}>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiSolidity style={iconStyle} />
        <p style={textStyle}>Solidity</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <DiMongodb style={iconStyle} />
        <p style={textStyle}>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiNextdotjs style={iconStyle} />
        <p style={textStyle}>Next.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <DiGit style={iconStyle} />
        <p style={textStyle}>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiFirebase style={iconStyle} />
        <p style={textStyle}>Firebase</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiRedis style={iconStyle} />
        <p style={textStyle}>Redis</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiPostgresql style={iconStyle} />
        <p style={textStyle}>PostgreSQL</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <DiJava style={iconStyle} />
        <p style={textStyle}>Java</p>
      </Col>
    </Row>
  );
}

export default Techstack;
