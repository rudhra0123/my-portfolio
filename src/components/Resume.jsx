import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import Particle from "../components/Particle";
import pdf from "../assets/22A91A0584(resume).pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
// const pdf= require("../assets/22A91A0584(resume).pdf");
 
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const Resume = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* ✅ Resume Display Section */}
        {/* <Row className="resume d-flex justify-content-center">
          <Document
            file={pdf}
            className="d-flex justify-content-center"
            onLoadError={(error) => console.error("PDF Load Error:", error)}
          >
            <Page pageNumber={1} scale={width > 786 ? 1.5 : 0.6} />
          </Document>
        </Row> */}

        {/* ✅ Download Button */}
        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default Resume;
