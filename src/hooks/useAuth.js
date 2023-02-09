import { useSelector } from 'react-redux';

import {
  selectIsLoggedIn,
  selectUser,
  selectIsLoading,
  selectToken,
} from '../redux/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);

  return { isLoggedIn, isLoading, user, token };
};
