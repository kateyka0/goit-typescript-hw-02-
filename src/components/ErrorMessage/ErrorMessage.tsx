import React from 'react';
import css from './ErrorMessage.module.css';


interface ErrorMessageProps {
  text: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ text }) => {
  return <p className={css.error}>{text}</p>;
};

export default ErrorMessage;

