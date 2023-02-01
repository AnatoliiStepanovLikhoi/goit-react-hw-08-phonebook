import React from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

// import { Modal } from './Modal/Modal';

// import { capitalizeFirstLetters } from './Utils/capitalizeFirstLetters';

import { Container, MainTitle, SecondaryTitle } from './App.styled';

export const App = () => {
  return (
    <Container>
      {/* <button type="button" onClick={this.toggleModal}>
          Open modal
        </button> */}

      {/* {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Hello, this is content</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem, aliquid? Sapiente nisi minima ab. Unde consequatur
              quia id nihil distinctio.
            </p>
            <button type="button" onClick={this.toggleModal}>
              Close
            </button>
          </Modal>
        )} */}

      <MainTitle>Phonebook</MainTitle>
      <ContactForm />

      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter />
      <ContactList />
    </Container>
  );
};
