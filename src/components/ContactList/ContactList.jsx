import React from 'react';
import css from './ContactList.module.css';

const ContactList = ({ contacts, filter, onDeleteContact }) => {
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.contactList}>
      <ul>
        {filteredContacts.map((contact) => (
          <li className={css.contactItem} key={contact.id}>
            {contact.name} {contact.number}
            <button className={css.deleteBtn} onClick={() => onDeleteContact(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
