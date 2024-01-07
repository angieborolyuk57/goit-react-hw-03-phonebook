import React, { Component } from 'react';
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import Filter from './Filter/Filter';

class App extends Component {
  constructor() {
    super();
    this.state = {
      filter: '',
      contacts: this.loadContactsFromLocalStorage(),
    };
  }

  componentDidMount() {
    this.saveContactsToLocalStorage();
  }

  componentDidUpdate() {
    this.saveContactsToLocalStorage();
  }

  loadContactsFromLocalStorage() {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : [];
  }

  saveContactsToLocalStorage() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  handleInputChange = (e) => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  handleAddContact = (newContact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleDeleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { filter, contacts } = this.state;

    return (
      <div>
        <ContactForm onAddContact={this.handleAddContact} contacts={contacts} />
        <Filter filter={filter} onInputChange={this.handleInputChange} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}

export default App;
