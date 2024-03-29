import React from 'react';
import './formInput.style.scss';
export default function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <div className='group'>
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label> : ''}
    </div>
  );
}
