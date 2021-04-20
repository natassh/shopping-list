import React from 'react';
import './Input.css';

const Input: React.FC<InputProps> = ({ onChange, title, className, type, value, placeholder, id }) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
    const inputNewValue = e.target.value;
    onChange(inputNewValue);
  };

  return (
    <input
      title={title} 
      className={className} 
      type={type}
      placeholder={placeholder}
      value={value}
      id= {id}
      onChange={handleChange}
    />
  );
};

export {Input};


type InputProps = {
  title: string,
  className: string,
  type: string,
  id: string,
  value?: string,
  placeholder?: string,
  onChange: (value: string) => void
}