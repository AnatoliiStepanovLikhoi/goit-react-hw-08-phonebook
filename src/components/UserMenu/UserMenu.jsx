import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { MenuWrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <MenuWrapper>
      <p>Welcome {user}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </MenuWrapper>
  );
};
