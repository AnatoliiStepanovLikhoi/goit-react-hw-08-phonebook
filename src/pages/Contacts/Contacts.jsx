import {
  Container,
  MainTitle,
  SecondaryTitle,
} from '../../components/App.styled';

import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';

export default function Contacts() {
  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />

      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter />
      <ContactList />
    </Container>
  );
}
