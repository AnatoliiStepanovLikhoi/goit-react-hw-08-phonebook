import { NavLinkStyled, NavContainer } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <NavContainer>
      <NavLinkStyled to="/register">Register</NavLinkStyled>
      <NavLinkStyled to="/login">Log In</NavLinkStyled>
    </NavContainer>
  );
};
