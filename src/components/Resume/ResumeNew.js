import React from "react";

const About = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Mi Currículum</h2>

      {/* Enlace para abrir en nueva pestaña */}
      <a
        href="/pdf/MARQUESTO-MARIO-ANIBAL-FRANCISCO-ESPAÑOL.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
          marginBottom: "20px"
        }}
      >
        Abrir CV en nueva pestaña
      </a>

      {/* Mostrar PDF directamente */}
      <iframe
        src="/pdf/MARQUESTO-MARIO-ANIBAL-FRANCISCO-ESPAÑOL.pdf"
        width="100%"
        height="800px"
        title="CV Inglés"
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          marginTop: "1rem"
        }}
      />
    </div>
  );
};

export default About;
