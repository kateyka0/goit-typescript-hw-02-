import React, { useState } from 'react';
import css from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <div className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Search images..."
          className={css.input}
        />
        <button
          className={css.btnSearch}
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
