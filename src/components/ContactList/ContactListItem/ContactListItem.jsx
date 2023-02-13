import { PropTypes } from 'prop-types';
import { capitalizeFirstLetters } from '../../Utils/capitalizeFirstLetters';
import { Notify } from 'notiflix';

import {
  Icon,
  ListItem,
  ContactText,
  RemoveContactButton,
  // UpdateContactButton,
} from './ContactListItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectStatus } from 'redux/selectors';
import {
  deleteContactAsyncThunk,
  // updateContactAsyncThunk,
} from 'redux/contacts/contactsOperations';
import CustomizedDialogs from '../../UpdateDialog/UpdateDialog';

export function ContactListItem(props) {
  const state = useSelector(selectStatus);

  const dispatch = useDispatch();

  const {
    contactInfo: { name, number, id },
    // onContactDelete,
  } = props;

  const handleDelete = id => {
    Notify.warning('Contacts has deleted');
    return dispatch(deleteContactAsyncThunk(id));
  };

  const capitalName = capitalizeFirstLetters(name);

  return (
    <ListItem>
      <Icon />
      <ContactText>
        {capitalName}: {number}
      </ContactText>
      <CustomizedDialogs name={capitalName} number={number} contactId={id} />
      <RemoveContactButton
        type="button"
        onClick={() => handleDelete(id)}
        disabled={state === 'loading'}
      >
        {/* {state === 'loading' ? 'Removing' : 'Remove'} */}
        Remove
      </RemoveContactButton>
    </ListItem>
  );
}

ContactListItem.propTypes = {
  contactInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
