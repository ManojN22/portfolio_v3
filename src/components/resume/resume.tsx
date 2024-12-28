// pages/pdf-viewer.js
import './resume.style.css';

const PdfViewer = () => {
  const pdfUrl = '/M_Nandakumar_up.pdf'; // Corrected path to the PDF in the public folder

  return (
    <div className="container">
      {/* PDF Viewer */}
      <div className="pdfViewer">
        <object
          data={pdfUrl}
          type="application/pdf"
          width="100%"
          height="100%"
        >
          {/* <p>Your browser does not support PDFs. <a href={pdfUrl}>Download the PDF</a>.</p> */}
        </object>
      </div>
    </div>
  );
};

export default PdfViewer;
