import React from 'react';
import "./style/formRow.css";
function FormRow ({ type, name, value, handleChange,icon,placeholder }){
  console.log("placeholder",placeholder)
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
     {icon ==="null" ?<>{name}</>:<img src={icon} alt="Logo" />}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        className='form-input'
      />
    </div>
  );
};

export default FormRow;
