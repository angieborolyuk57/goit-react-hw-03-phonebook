import React from 'react';
import css from './ContactList.module.css';
import { nanoid } from 'nanoid';

const Filter = ({ filter, onInputChange }) => {
  return (
    <div className={css.searchPanel}>
      <label>
        Find contact by name
        <input
          id={nanoid()}
          className={css.input}
          type="text"
          name="filter"
          value={filter}
          onChange={onInputChange}
        />
      </label>
    </div>
  );
};

export default Filter;
