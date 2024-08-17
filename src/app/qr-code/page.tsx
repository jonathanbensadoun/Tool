"use client";

import React, { useEffect, useState, useRef } from "react";
import QRCode from "react-qr-code";
import { toPng } from "html-to-image";

const Page: React.FC = () => {
  const [valueQRCode, setValueQRCode] = useState<string>("");
  const [isValidated, setIsValidated] = useState<boolean>(false);
  const [colorQrcode, setColorQrcode] = useState<string>("#2e3c84");

  const qrCodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (valueQRCode === "") {
      setIsValidated(false);
    }
  }, [valueQRCode]);

  const handleDownload = () => {
    if (qrCodeRef.current === null) {
      return;
    }

    const randomNumber = (Math.random() * 10000).toString();

    toPng(qrCodeRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = randomNumber + ".png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error("Error generating PNG:", err);
      });
  };

  return (
    <div className="bg-36 flex flex-col justify-center items-center h-screen">
      <div className="xl:w-1/3  bg-white p-4 rounded-lg bg-opacity-20 flex flex-col justify-center items-center">
        <h1 className="pb-10 text-3xl text-shadow">Générateur de QR Code</h1>
        <h3>choix de la couleur</h3>
        <input
          type="color"
          value={colorQrcode}
          onChange={(e) => setColorQrcode(e.target.value)}
          className=" my-4 text-black border-2 border-black rounded-md w-20 h-10 "
        />
        <input
          type="text"
          value={valueQRCode}
          onChange={(e) => setValueQRCode(e.target.value)}
          className="p-2 mb-4 text-black border-2 border-black rounded-md"
          placeholder="Enter QR Code value"
        />

        <div ref={qrCodeRef} className="border-2 shadow-lg">
          <QRCode
            size={256}
            value={valueQRCode}
            viewBox={`0 0 256 256`}
            level="M"
            fgColor={colorQrcode}
          />
        </div>

        <button onClick={handleDownload} className="py-2 button-37 mt-10">
          Télécharger QR Code
        </button>
      </div>
    </div>
  );
};

export default Page;
