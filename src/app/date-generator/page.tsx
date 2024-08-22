"use client";
import React, { useState } from "react";

const DateGenerator = () => {
  const [selectedOption, setSelectedOption] = useState("currentDate");
  const [generatedCode, setGeneratedCode] = useState("");

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
    generateCode(e.target.value);
  };

  const generateCode = (option: string) => {
    let code = "";
    switch (option) {
      case "currentDate":
        code = `const currentDate = new Date();\nconsole.log(currentDate);`;
        break;
      case "formatDate":
        code = `const date = new Date();\nconst formattedDate = date.toLocaleDateString('en-US');\nconsole.log(formattedDate);`;
        break;
      case "addDays":
        code = `const date = new Date();\ndate.setDate(date.getDate() + 5);\nconsole.log(date);`;
        break;
      case "subtractDays":
        code = `const date = new Date();\ndate.setDate(date.getDate() - 5);\nconsole.log(date);`;
        break;
      case "differenceInDays":
        code = `const date1 = new Date('2024-08-22');\nconst date2 = new Date();\nconst diffTime = Math.abs(date2.getTime() - date1.getTime());\nconst diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));\nconsole.log(diffDays);`;
        break;
      default:
        code = "";
    }
    setGeneratedCode(code);
  };

  return (
    <div>
      <h1>JavaScript Date Code Generator</h1>
      <label htmlFor="dateOptions">Choose a date operation:</label>
      <select
        id="dateOptions"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value="currentDate">Get Current Date</option>
        <option value="formatDate">Format Date</option>
        <option value="addDays">Add Days to Date</option>
        <option value="subtractDays">Subtract Days from Date</option>
        <option value="differenceInDays">Difference in Days</option>
      </select>

      <h2>Generated Code:</h2>
      <pre>{generatedCode}</pre>
    </div>
  );
};

export default DateGenerator;
