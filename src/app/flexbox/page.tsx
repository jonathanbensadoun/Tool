"use client";
import React from "react";

const Page: React.FC = () => {
  const [numberBox, setNumberBox] = React.useState<number>(1);
  const [check1, setCheck1] = React.useState<boolean>(false);
  const [check2, setCheck2] = React.useState<boolean>(false);
  const [check3, setCheck3] = React.useState<boolean>(false);

  const addBox = () => {
    setNumberBox(numberBox + 1);
  };

  const removeBox = () => {
    if (numberBox > 1) {
      setNumberBox(numberBox - 1);
    }
  };

  const handleCheck1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheck1(event.target.checked);
  };

  const handleCheck2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheck2(event.target.checked);
  };

  const handleCheck3Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheck3(event.target.checked);
  };
  const handleCheck4Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheck3(event.target.checked);
  };
  const handleCheck5Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheck3(event.target.checked);
  };


  const checkedCount = [check1, check2, check3].filter(
    (isChecked) => isChecked
  ).length;

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-36">
      <div className="bg-white bg-opacity-40 p-4 rounded-lg">
        <div className="flex flex-col justify-center items-center gap-4">
          <div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="check1"
                name="check1"
                checked={check1}
                onChange={handleCheck1Change}
              />
              <h3>flex-row</h3>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="check2"
                name="check2"
                checked={check2}
                onChange={handleCheck2Change}
              />
              <h3>flex-wrap</h3>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="check3"
                name="check3"
                checked={check3}
                onChange={handleCheck3Change}
              />
              <h3>justify-between</h3>
            </div>
          </div>
          <button onClick={addBox} className="button-36 w-80">
            Add Box
          </button>
          <button onClick={removeBox} className="button-36 mb-8 w-80">
            Remove Box
          </button>
        </div>
        <div
          className={`bg-white w-100 h-80 bg-opacity-40 flex rounded-lg p-4 ${
            check1 ? "flex-row" : ""
          } ${check2 ? "flex-wrap" : ""} ${check3 ? "justify-between" : ""}`}
        >
          {Array.from({ length: numberBox }, (_, index) => (
            <div
              key={index}
              className="w-40 h-40 bg-36 p-4 text-center rounded-lg"
            >
              Box {index + 1}
            </div>
          ))}
        </div>
        <div className="mt-4">Total Checked: {checkedCount}</div>
      </div>
    </div>
  );
};

export default Page;
