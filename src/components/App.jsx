// import React from 'react';

import React, { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../redux/auth/authOperations';

// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';

import HomePage from 'pages/HomePage/HomePage';
import Layout from './Layout/Layout';
import Contacts from 'pages/Contacts/Contacts';
import Register from 'pages/Register/Register';
import Login from 'pages/Login/Login';

// import { Modal } from './Modal/Modal';

// import { capitalizeFirstLetters } from './Utils/capitalizeFirstLetters';

// import { Container, MainTitle, SecondaryTitle } from './App.styled';
// import { Home } from '@mui/icons-material';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        {/* <Route path="*" element={<NoRoot/>} /> */}
      </Routes>

      {/* <Container> */}
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
      {/* 
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />

        <SecondaryTitle>Contacts</SecondaryTitle>
        <Filter />
        <ContactList />
      </Container> */}
    </>
  );
};
