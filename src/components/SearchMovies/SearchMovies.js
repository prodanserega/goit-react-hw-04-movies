import React, { useState } from "react";
import { toast } from "react-toastify";

import s from "../SearchMovies/SearchMovies.module.css";

export default function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleNameChange = (event) => {
    setValue(event.target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value.trim() === "") {
      toast.error("Enter your value");
      return;
    }
    onSubmit(value);
    setValue("");
  };

  return (
    <header className={s.Searchbar}>
      <form onSubmit={handleSubmit} className={s.SearchForm}>
        <button type="submit" className={s.SearchForm__button}>
          <span className={s.SearchForm__button_label}>Search</span>
        </button>

        <input
          className={s.SearchForm__input}
          type="text"
          // autocomplete="off"
          // autofocus
          placeholder="Search movies"
          onChange={handleNameChange}
          value={value}
        />
      </form>
    </header>
  );
}
