import React from 'react';

const Spinner: React.FC<{
  text?: string;
  size?: number;
  centered?: boolean;
}> = ({ text, size, centered }) => {
  return (
    <div className="spinner">
      <div
        className="spinner__circle"
        style={{ height: `${size}px`, width: `${size}px` }}
      ></div>
      <p className="spinner__text">{text}</p>
    </div>
  );
};


export default Spinner;
