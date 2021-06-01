import React from "react";

// All Mana icons can be found here
// https://andrewgioia.github.io/Mana/icons.html
// the class names and attributes can be found here:
// https://andrewgioia.github.io/Mana/attributes.html
const ManaSymbol = ({ symbol }) => {
  return <i className={`ms ms-${symbol} ms-cost`} />;
};

export default ManaSymbol;
