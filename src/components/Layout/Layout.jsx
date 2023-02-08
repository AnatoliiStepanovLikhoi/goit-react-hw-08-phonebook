import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';

import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';

import { Nav, NavList } from './Layout.styled';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

export default function Layout() {
  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <ContactPhoneIcon
            fontSize="large"
            aria-label="home"
            color="contrastText"
            sx={{ mr: 3 }}
          />

          <NavLink to="/">
            <Typography variant="h6" component="div">
              Simple phonebook
            </Typography>
          </NavLink>

          <Nav>
            <NavList>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="contacts">Contacts</NavLink>
              </li>
            </NavList>
          </Nav>

          {/* {isLoggedIn ? */}
          <UserMenu />
          {/* : */}
          <AuthNav />
          {/* } */}
        </Toolbar>
      </AppBar>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
}
