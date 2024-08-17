"use client";
import React, { useState, ChangeEvent, DragEvent } from "react";
import { jsPDF } from "jspdf";
import ReactMarkdown from "react-markdown";

const Page: React.FC = () => {
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleFileUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      setMarkdownContent(content);
    };
    reader.readAsText(file);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleDragEnter = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files?.[0];
    if (file && file.name.endsWith(".md")) {
      handleFileUpload(file);
    } else {
      alert("Please drop a valid Markdown (.md) file.");
    }
  };

  const generatePDF = async () => {
    const content = document.getElementById("markdown-content");
    if (!content) return;

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
    });

    // Convertir le contenu HTML en chaîne
    const htmlContent = content.innerHTML;

    // Utiliser la méthode html de jsPDF avec pdfjs
    pdf.html(htmlContent, {
      callback: function (pdf) {
        pdf.save("generated.pdf");
      },
      x: 10,
      y: 10,
      width: 595 - 20, // A4 width - 20pt margin
      windowWidth: 100, // Utilisé pour le calcul de la mise à l'échelle
      autoPaging: "text",
      margin: [10, 10, 10, 10],
      html2canvas: {
        scale: 2, // Augmenter la qualité
      },
    });
  };
  return (
    <div className=" p-4 bg-36 w-full min-h-screen flex flex-col justify-center items-center ">
      <h1 className="text-2xl font-bold mb-4">Read Markdown </h1>
      <div
        className={`border-2 border-dashed p-4 mb-4 ${
          isDragging ? "border-blue-500 bg-blue-100" : "border-gray-300"
        }`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <p className="text-center">
          Drag and drop your Markdown file here, or click to select
        </p>
        <input
          type="file"
          accept=".md"
          onChange={handleInputChange}
          className="hidden"
          id="file-input"
        />
        <label
          htmlFor="file-input"
          className="block text-center mt-2 text-blue-500 cursor-pointer"
        >
          Select File
        </label>
      </div>
      {/* <button
        onClick={generatePDF}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded button-37 mb-4"
        disabled={!markdownContent}
      >
        Generate PDF
      </button> */}
      <div
        id="markdown-content"
        // className=" text-black bg-white bg-opacity-40  rounded-lg max-w-screen "
        className=" markdown-body rounded-lg  w-full md:w-1/2 mx-4 text-wrap "
      >
        <ReactMarkdown className={`${markdownContent ? "p-4" : ""}`}>
          {markdownContent}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Page;
