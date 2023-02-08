import { ContactListItem } from './ContactListItem/ContactListItem';

import { ContactsList, ContactsMessage } from './ContactList.styled';
import { Loader } from 'components/Loader/Loader';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';

import { selectContacts, selectFilter, selectStatus } from 'redux/selectors';
import { contactsAsyncThunk } from 'redux/contacts/contactsOperations';

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const state = useSelector(selectStatus);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(contactsAsyncThunk());
  }, [dispatch]);

  const selectedContacts = useMemo(
    () => contacts?.filter(({ name }) => name.toLowerCase().includes(filter)),
    [contacts, filter]
  );

  // const selectedContacts = (() => {
  //   if (!contacts ) return;

  //   return contacts.filter(({ name }) =>
  //     // console.log(name.toLowerCase().includes(filter))
  //     name.toLowerCase().includes(filter)
  //   );
  // })();

  // console.log(contacts);

  return (
    <>
      <ContactsList>
        {state === 'idle' && (
          // || state === 'loading'
          <Loader />
        )}

        {selectedContacts?.length ? (
          (selectedContacts ?? contacts).map(contact => (
            <ContactListItem key={contact.id} contactInfo={contact} />
          ))
        ) : filter ? (
          <ContactsMessage>We found nothing here:(</ContactsMessage>
        ) : state === 'loading' ? (
          <Loader />
        ) : (
          <ContactsMessage>Empty phonebook</ContactsMessage>
        )}

        {state === 'error' && (
          <ContactsMessage>
            Something went wrong, try again later:(
          </ContactsMessage>
        )}
      </ContactsList>
    </>
  );
}
