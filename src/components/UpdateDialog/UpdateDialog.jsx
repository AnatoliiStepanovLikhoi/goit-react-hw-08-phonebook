import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
// import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// import Typography from '@mui/material/Typography';
import { Notify } from 'notiflix';
import { capitalizeFirstLetters } from 'components/Utils';

import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';

import { UpdateContactButton } from '../ContactList/ContactListItem/ContactListItem.styled';
import { DialogForm, DialogLabel, DialogInput } from './UpdateDialog.styled';
import { updateContactAsyncThunk } from '../../redux/contacts/contactsOperations';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({ name, number, contactId }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const checkTheSameName = inputName => {
    if (!contacts) return;

    const normaliziedInputName = inputName.toLowerCase().trim();
    // console.log(normaliziedInputName);

    return contacts.find(
      ({ name }) => name.toLowerCase() === normaliziedInputName
    );
  };

  const onSubmit = event => {
    event.preventDefault();

    const data = new FormData(event.target);

    const formObject = Object.fromEntries(data.entries());

    const { name: inputName, number: inputNumber } = formObject;

    const capitalName = capitalizeFirstLetters(inputName);

    if (checkTheSameName(inputName)) {
      alert(`Sorry, ${capitalName} has already added!`);
      return;
    }

    dispatch(
      updateContactAsyncThunk({
        contact: { name: capitalName, number: inputNumber },
        contactId,
      })
    );

    Notify.success('Contact has updated!');

    event.currentTarget.reset();
  };

  return (
    <div>
      <UpdateContactButton variant="outlined" onClick={handleClickOpen}>
        Update
      </UpdateContactButton>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Update contact details
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <DialogForm onSubmit={onSubmit}>
            <DialogLabel>
              Name
              <DialogInput
                type="text"
                name="name"
                placeholder="FirstName LastName"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я-яЁёІіЇїЄє]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                // autoFocus
                // onChange={onInputChange}
              />
            </DialogLabel>
            <DialogLabel>
              Number
              <DialogInput
                type="tel"
                name="number"
                placeholder="123-45-67"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                // onChange={onInputChange}
              />
            </DialogLabel>
            <Button
              type="submit"
              autoFocus
              onClick={handleClose}
              onSubmit={onSubmit}
              sx={{ marginLeft: 'auto', marginRight: 'auto' }}
            >
              Save changes
            </Button>
          </DialogForm>
        </DialogContent>
        {/* <DialogActions></DialogActions> */}
      </BootstrapDialog>
    </div>
  );
}

CustomizedDialogs.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
};
