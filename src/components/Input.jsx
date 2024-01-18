import React from 'react';

const Input = ({ label, type, name = label, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
