"use client";

import React, { useState } from "react";

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialChars = "!@#$%^&*()_+[]{}|;:<>?";
    const numbers = "0123456789";

    let characters = lowerChars + numbers;
    if (includeUppercase) characters += upperChars;
    if (includeSpecialChars) characters += specialChars;

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    setGeneratedPassword(password);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPassword);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-36 flex flex-col justify-center items-center h-screen">
      <div className="xl:w-1/3 bg-white p-4 rounded-lg bg-opacity-20 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-4">Générateur de Mot de Passe</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium">
            Longueur du mot de passe ({passwordLength})
          </label>
          <input
            type="range"
            min="4"
            max="32"
            value={passwordLength}
            onChange={(e) => setPasswordLength(parseInt(e.target.value))}
            className="mt-1 w-full opacity-50"
          />
        </div>

        <div className="mb-4 flex gap-4 justify-start items-center ">
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={(e) => setIncludeUppercase(e.target.checked)}
            className="mt-1"
          />
          <label className="block text-sm font-medium">
            Inclure des majuscules
          </label>
        </div>

        <div className="mb-4 flex gap-4 justify-start items-center ">
          <input
            type="checkbox"
            checked={includeSpecialChars}
            onChange={(e) => setIncludeSpecialChars(e.target.checked)}
            className="mt-1"
          />
          <label className="block text-sm font-medium">
            Inclure des caractères spéciaux
          </label>
        </div>

        <div className="bg-gray-400 p-4 rounded-lg mb-4 bg-opacity-30 w-full text-center ">
          <code className="text-2xl">
            {generatedPassword || "Générer un mot de passe"}
          </code>
        </div>

        <button
          onClick={generatePassword}
          className="w-full button-37 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Générer le mot de passe
        </button>

        <button
          onClick={copyToClipboard}
          className="w-full button-37 text-white font-bold py-2 px-4 rounded"
        >
          {copied ? "Copié !" : "Copier le mot de passe"}
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
