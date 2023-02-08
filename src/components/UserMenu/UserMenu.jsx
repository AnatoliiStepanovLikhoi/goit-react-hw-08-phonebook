import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/operations';
// import { useAuth } from 'hooks';
import { MenuWrapper } from './UserMenu.styled';

export const UserMenu = () => {
  //   const dispatch = useDispatch();
  //   const { user } = useAuth();

  return (
    <MenuWrapper>
      <p>Welcome User</p>
      <button
        type="button"
        //   onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </MenuWrapper>
  );
};
