import React, { useState } from "react";
import Window from "./Window";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

const ResumeWindow = () => {
  const pdfUrl = "/resume.pdf";
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Resume.pdf";
    link.click();
  };

  return (
    <Window
      width="w-full md:w-1/2 lg:w-1/3"
      height="h-auto"
      title="📄 Resume.pdf"
    >
      <div className="p-2">
        <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
        <div className="flex justify-center mt-2">
          <button
            onClick={handleDownload}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Download Resume
          </button>
        </div>
      </div>
    </Window>
  );
};

export default ResumeWindow;
