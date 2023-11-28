import React from 'react';

const Title = ({ size, children }) => {
  const style = {
    fontSize: size,
  };

  return <h1 style={style}>{children}</h1>;
};

export default Title;
