import React from 'react';

const Btn = ({className, text, onClick, icon}) => {
  return (
    <button onClick={onClick} className={className}><i className={icon} ></i> {text}</button>
  );
};

export default Btn;
