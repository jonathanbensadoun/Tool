import React from "react";

const Page: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "red",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "white" }}>La page</h1>
    </div>
  );
};

export default Page;
