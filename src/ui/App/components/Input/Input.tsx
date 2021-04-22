import React from 'react';
import './Input.css';

const Input: React.FC<InputProps> = ({ title, className, type, id, onChange, value, placeholder}) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
    const inputNewValue = e.target.value;
    onChange(inputNewValue);
  };

  return (
    <input
      title={title} 
      className={className} 
      type={type}
      id= {id}
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export {Input};


type InputProps = {
  title: string,
  className: string,
  type: string,
  id: string,
  onChange: (value: string) => void
  value?: string,
  placeholder?: string,
}