import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "p-3 rounded-full border-2 border-white border-2 border-white bg-gradient-to-br from-primary to-secondary text-dark hover:border-white font-semibold"
    : "text-white";
  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 p-3 hover:border rounded-full shadow-md border-2 border-white hover:bg-gradient-to-br from-primary to-secondary text-dark hover:border-white hover:text-dark font-semibold  ${buttonClasses}`}
      >
        {children}
      </p>
    </button>
  );
};

export default TabButton;
