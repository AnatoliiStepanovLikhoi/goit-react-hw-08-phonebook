import { PropTypes } from 'prop-types';
import { capitalizeFirstLetters } from '../../Utils/capitalizeFirstLetters';
import { Notify } from 'notiflix';

import {
  Icon,
  ListItem,
  ContactText,
  RemoveContactButton,
} from './ContactListItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectStatus } from 'redux/selectors';
import { deleteContactAsyncThunk } from 'redux/contactsOperations';

export function ContactListItem(props) {
  const state = useSelector(selectStatus);

  const dispatch = useDispatch();

  const {
    contactInfo: { name, phone, id },
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
        {capitalName}: {phone}
      </ContactText>
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
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
