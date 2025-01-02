// pages/pdf-viewer.js
import './resume.style.css';
import { FaDownload } from 'react-icons/fa';
const PdfViewer = () => {
  const pdfUrl = '/M_Nandakumar_up.pdf'; // Corrected path to the PDF in the public folder

  return (
    <div className="container">
      {/* PDF Viewer */}
      <div className="pdfViewer">
      <iframe
        src={pdfUrl}
        width="100%"
        height="100%"
        style={{ backgroundColor: '#ffffff', border: 'none' }}
        frameBorder="0"
      ></iframe>
        {/* <object

          data={pdfUrl}
          type="application/pdf"
          width="100%"
          height="100%"
        >
          
        </object> */}
        <a href={pdfUrl} download className="downloadButton">
        <FaDownload />  <span>PDF</span>
  </a>
      </div>
      
    </div>
  );
};

export default PdfViewer;
