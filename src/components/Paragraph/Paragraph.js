import React from 'react';

const Paragraph = ({ size, children }) => {
  const style = {
    fontSize: size,
  };

  return <p style={style}>{children}</p>;
};

export default Paragraph;
