import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "p-3 rounded-full text-dark border-4 border-white bg-gradient-to-br from-primary to-secondary hover:border-4"
    : "text-zinc-200";
  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 p-3 font-semibold hover:border border-green-400 rounded-full shadow-md transition duration-500  ${buttonClasses}`}
      >
        {children}
      </p>
    </button>
  );
};

export default TabButton;
