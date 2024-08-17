"use client";

import React, { useEffect, useState, useRef } from "react";
import QRCode from "react-qr-code";
import { toPng } from "html-to-image";

const Page: React.FC = () => {
  const [valueQRCode, setValueQRCode] = useState<string>("");
  const [isValidated, setIsValidated] = useState<boolean>(false);
  const [colorQrcode, setColorQrcode] = useState<string>("#2e3c84");

  const qrCodeRef = useRef<HTMLDivElement>(null);

  const handleValidation = () => {
    setIsValidated(true);
  };

  useEffect(() => {
    if (valueQRCode === "") {
      setIsValidated(false);
    }
  }, [valueQRCode]);

  const handleDownload = () => {
    if (qrCodeRef.current === null) {
      return;
    }
    //remplace les " " par des "_" dans le nom du fichier
    const name = valueQRCode.replace(/ /g, "_");

    toPng(qrCodeRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = name;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error("Error generating PNG:", err);
      });
  };

  return (
    <div className="bg-36 flex flex-col justify-center items-center h-screen">
      <h1 className="pb-10 text-3xl ">Générateur de QR Code</h1>
      <h3>choix de la couleur</h3>
      <input
        type="color"
        value={colorQrcode}
        onChange={(e) => setColorQrcode(e.target.value)}
        className="p-2 my-4 text-black border-2 border-black rounded-md"
      />
      <input
        type="text"
        value={valueQRCode}
        onChange={(e) => setValueQRCode(e.target.value)}
        className="p-2 mb-4 text-black border-2 border-black rounded-md"
        placeholder="Enter QR Code value"
      />
      <button onClick={handleValidation} className="py-2 button-36 mb-10">
        Valider
      </button>
      <div ref={qrCodeRef} className="border-2 shadow-lg">
        <QRCode
          size={256}
          value={valueQRCode}
          viewBox={`0 0 256 256`}
          level="M"
          fgColor={colorQrcode}
        />
      </div>
      <div className="h-10 ">
        <button onClick={handleDownload} className="py-2 button-36 mt-10">
          Télécharger QR Code
        </button>
      </div>
    </div>
  );
};

export default Page;
