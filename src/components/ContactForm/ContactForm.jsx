import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import css from '../ContactList/ContactList.module.css';

const ContactForm = (props) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleAddContact = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!name || !number) {
      alert('Please enter both name and phone number');
      return;
    }

    if (props.contacts.some((contact) => contact.name === name)) {
      alert(`${name} already exists in contacts and cannot be added.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    props.onAddContact(newContact);

    // Reset form state after adding contact
    setName('');
    setNumber('');
    setSubmitted(false);
  };

  return (
    <form className={css.form}>
      <label className={css.label}>
        Name
        <input
          id={nanoid()}
          className={`${css.input} ${submitted && !name && css.error}`}
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Phone number
        <input
          id={nanoid()}
          className={`${css.input} ${submitted && !number && css.error}`}
          type="number"
          name="number"
          value={number}
          onChange={handleInputChange}
          required
        />
      </label>
      <button className={css.addBtn} onClick={handleAddContact}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
