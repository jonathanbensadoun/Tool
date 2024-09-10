"use client";
import React, { useEffect, useState } from "react";
import { IoMdCopy } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
const DateGenerator = () => {
  const [selectedOption, setSelectedOption] = useState("currentDate");
  const [generatedCode, setGeneratedCode] =
    useState(`// Obtient la date actuelle et l'affiche
    const currentDate = new Date();
    console.log(currentDate);`);
  const [copied, setCopied] = useState(false);

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
    generateCode(e.target.value);
  };

  /**
   * Génère le code JavaScript en fonction de l'option sélectionnée
   * @param option  L'option sélectionnée
   */
  const generateCode = (option: string) => {
    let code = "";
    switch (option) {
      case "currentDate":
        code = `// Obtient la date actuelle et l'affiche
  const currentDate = new Date();
  console.log(currentDate);`;
        break;
      case "formatDate":
        code = `// Formate la date actuelle selon le format américain (mm/jj/aaaa)
  const date = new Date();
  const formattedDate = date.toLocaleDateString('en-US');
  console.log(formattedDate);`;
        break;
      case "formatDateFrench":
        code = `// Formate la date en français (ex: 2 août 2024)
    const date = new Date('2024-08-02'); // Exemple de date
    const formattedDate = date.toLocaleString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    console.log(formattedDate);`;
        break;
      case "addDays":
        code = `// Ajoute 5 jours à la date actuelle
  const date = new Date();
  date.setDate(date.getDate() + 5);
  console.log(date);`;
        break;
      case "subtractDays":
        code = `// Soustrait 5 jours de la date actuelle
  const date = new Date();
  date.setDate(date.getDate() - 5);
  console.log(date);`;
        break;
      case "differenceInDays":
        code = `// Calcule la différence en jours entre deux dates
  const date1 = new Date('2024-08-22');
  const date2 = new Date();
  const diffTime = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  console.log(diffDays);`;
        break;
      case "startOfMonth":
        code = `// Obtient le premier jour du mois en cours
  const date = new Date();
  const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  console.log(startOfMonth);`;
        break;
      case "endOfMonth":
        code = `// Obtient le dernier jour du mois en cours
  const date = new Date();
  const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  console.log(endOfMonth);`;
        break;
      case "isWeekend":
        code = `// Vérifie si la date actuelle est un week-end
  const date = new Date();
  const isWeekend = date.getDay() === 0 || date.getDay() === 6;
  console.log(isWeekend ? "C'est le week-end!" : "Ce n'est pas le week-end.");`;
        break;
      case "addMonths":
        code = `// Ajoute 3 mois à la date actuelle
  const date = new Date();
  date.setMonth(date.getMonth() + 3);
  console.log(date);`;
        break;
      case "formatCustom":
        code = `// Formate la date selon un format personnalisé (jj/mm/aaaa)
  const date = new Date();
  const formatCustom = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return \`\${day}/\${month}/\${year}\`;
  };
  console.log(formatCustom(date));`;
        break;
      default:
        code = "// Option non reconnue";
    }
    setGeneratedCode(code);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="bg-36 flex flex-col justify-center items-center h-screen">
      <div className="xl:w-1/3 bg-white p-4 rounded-lg bg-opacity-20 flex flex-col justify-around items-center h-1/2 ">
        <h2 className="text-2xl font-bold mb-4">
          generateur de date en JavaScript
        </h2>
        <label htmlFor="dateOptions">Choisir une option:</label>
        <select
          id="dateOptions"
          value={selectedOption}
          onChange={handleOptionChange}
          className="text-black"
        >
          <option value="currentDate">Date Actuelle</option>
          <option value="formatDate">Format Date</option>
          <option value="addDays">Ajouter des Jours à la Date</option>
          <option value="subtractDays">Soustraire des Jours de la Date</option>
          <option value="differenceInDays">Différence en Jours</option>
          <option value="startOfMonth">Début du Mois</option>
          <option value="endOfMonth">Fin du Mois</option>
          <option value="isWeekend">Est-ce le Week-end?</option>
          <option value="addMonths">Ajouter des Mois à la Date</option>
          <option value="formatCustom">Format Personnalisé (jj/mm/aaaa)</option>
          <option value="formatDateFrench">Format Date en Français</option>
        </select>

        <h2>Code généré:</h2>
        <div className="flex flex-col justify-start items-center w-3/4 relative bg-white bg-opacity-20 p-4 rounded-lg">
          <div
            onClick={copyToClipboard}
            role="button"
            className="bg-violet-800 p-2 rounded-full w-10 h-10 absolute -right-5 -top-5"
          >
            {copied ? (
              <FaCheck className="text-2xl" />
            ) : (
              <IoMdCopy className="text-2xl" />
            )}
          </div>
          <code>{generatedCode}</code>
        </div>
      </div>
    </div>
  );
};

export default DateGenerator;
