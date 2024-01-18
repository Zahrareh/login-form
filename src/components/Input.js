import React from "react";

const Input = ({
  label,
  type,
  name = label,
  value,
  onChange,
  onfocus,
  error,
  focus,
}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onfocus}
      />
      {error && focus && <span>{error}</span>}
    </div>
  );
};

export default Input;
