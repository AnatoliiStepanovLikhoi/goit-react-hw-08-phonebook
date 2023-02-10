import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.div`
  margin-left: auto;
`;

export const NavLinkStyled = styled(NavLink)`
  display: inline-block;
  padding: 12px;
  &&.active {
    font-weight: 700;
  }
`;
