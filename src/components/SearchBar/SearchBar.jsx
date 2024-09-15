import { useState } from "react";
import css from './SearchBar.module.css'

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
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
                  className={css.input}></input>
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