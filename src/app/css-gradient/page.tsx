"use client";

import React, { useEffect, useState } from "react";

const GradientGenerator = () => {
  const [copied, setCopied] = useState(false);
  const [gradientCode, setGradientCode] = useState("");
  const [gradientCodeBG, setGradientCodeBG] = useState("");
  const [color1, setColor1] = useState("#7d05f5");
  const [color2, setColor2] = useState("#2020ac");
  const [angle, setAngle] = useState(45);

  useEffect(() => {
    generateGradient(color1, color2, angle);
  }, [color1, color2, angle]);

  const generateGradient = (c1: string, c2: string, ang: number) => {
    const gradient = `linear-gradient(${ang}deg, ${c1}, ${c2})`;
    const gradientCodeBG = `background: linear-gradient(${ang}deg, ${c1}, ${c2});`;
    setGradientCode(gradient);
    setGradientCodeBG(gradientCodeBG);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(gradientCodeBG);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-36 flex flex-col justify-center items-center h-screen">
      <div className="xl:w-1/3 bg-white p-4 rounded-lg bg-opacity-20 flex flex-col justify-center items-cente ">
        <h2 className="text-2xl font-bold mb-4">Générateur de Gradient CSS</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium ">Couleur 1</label>
          <input
            type="color"
            value={color1}
            onChange={(e) => setColor1(e.target.value)}
            className="mt-1  w-full "
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium ">Couleur 2</label>
          <input
            type="color"
            value={color2}
            onChange={(e) => setColor2(e.target.value)}
            className="mt-1 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">
            Angle ( {angle}° )
          </label>
          <input
            type="range"
            min="0"
            max="360"
            value={angle}
            onChange={(e) => setAngle(parseInt(e.target.value))}
            className="mt-1 w-full opacity-50"
          />
        </div>

        <div
          className="w-full h-32 rounded-lg mb-4"
          style={{ background: gradientCode }}
        ></div>

        <div className="bg-gray-400 p-4 rounded-lg mb-4 bg-opacity-30 ">
          <code className="text-sm ">background: {gradientCode};</code>
        </div>

        <button
          onClick={copyToClipboard}
          className="w-full button-37 text-white font-bold py-2 px-4 rounded"
        >
          {copied ? "Copié !" : "Copier le code CSS"}
        </button>
      </div>
    </div>
  );
};

export default GradientGenerator;
