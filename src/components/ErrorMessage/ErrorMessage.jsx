import React from 'react';
import css from './ErrorMessage.module.css'

const ErrorMessage = ({ text }) => {
  return <p className={css.error}>{text}</p>;
};

export default ErrorMessage;
