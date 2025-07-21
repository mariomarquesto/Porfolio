import React from "react";
import { Col, Row } from "react-bootstrap";

function Toolstack() {
  const textStyle = { fontSize: "0.8em", marginTop: "10px" };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} style={{ textAlign: "center" }}>
        <p style={textStyle}>Visual Studio Code</p>
      </Col>
      <Col xs={4} md={2} style={{ textAlign: "center" }}>
        <p style={textStyle}>Postman</p>
      </Col>
      <Col xs={4} md={2} style={{ textAlign: "center" }}>
        <p style={textStyle}>Slack</p>
      </Col>
      <Col xs={4} md={2} style={{ textAlign: "center" }}>
        <p style={textStyle}>Vercel</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
