import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  const iconStyle = { fontSize: "2em" };
  const textStyle = { fontSize: "0.2em", marginTop: "10px" };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiVisualstudiocode style={iconStyle} />
        <p style={textStyle}>Visual Studio Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiPostman style={iconStyle} />
        <p style={textStyle}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiSlack style={iconStyle} />
        <p style={textStyle}>Slack</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiVercel style={iconStyle} />
        <p style={textStyle}>Vercel</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
