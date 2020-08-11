import React from 'react';

const Spinner: React.FC<{
  text?: string;
  textColor?: string;
  size?: number;
  centered?: boolean;
  color?: string;
  strokeWidth?: number;
}> = ({ text, textColor, size, color, strokeWidth }) => {
  return (
    <div className="spinner">
      <div
        className="spinner__circle"
        style={{
          borderTopColor: color,
          borderLeftColor: color,
          borderBottomColor: color,
          borderWidth: `${strokeWidth}px`,
          height: `${size}px`,
          width: `${size}px`,
        }}
      ></div>
      <p style={{ color: textColor }} className="spinner__text">
        {text}
      </p>
    </div>
  );
};

export default Spinner;
