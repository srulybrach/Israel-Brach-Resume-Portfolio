import React, { useState } from 'react';
import { Document, Page,pdfjs } from 'react-pdf';
import Footer from "@components/Footer";
//import './pdf.css'

//PDFjs worker from an external cdn
const url =
    "resume.pdf"

export default function Test() {

    pdfjs.GlobalWorkerOptions.workerSrc =
        `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }
    return (
        <>
            <head>
                <title>Israel Brach</title>
                <link rel="icon" href="/favicon.ico" />
            </head>

            <div className="pdf">
                <Document
                    file={url}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
            </div>
            <Footer />
        </>

    );
}
