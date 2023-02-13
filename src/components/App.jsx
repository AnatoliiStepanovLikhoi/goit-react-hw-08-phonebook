// import React from 'react';

import React, { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../redux/auth/authOperations';
import { RestrictedRoute } from './Utils/RestrictedRoute';
import { PrivateRoute } from './Utils/PrivateRoute';

// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';

import Layout from './Layout/Layout';
import NoRoot from 'pages/NoRoot/NoRoot';
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));

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
          <Route
            path="contacts"
            element={<PrivateRoute component={Contacts} redirectTo="/" />}
          />
          <Route
            path="login"
            element={
              <RestrictedRoute component={Login} redirectTo="/contacts" />
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute component={Register} redirectTo="/contacts" />
            }
          />
        </Route>
        <Route path="*" element={<NoRoot />} />
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
