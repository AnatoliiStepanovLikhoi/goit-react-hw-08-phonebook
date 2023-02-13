import { useSelector } from 'react-redux';

import {
  selectIsLoggedIn,
  selectUser,
  selectIsLoading,
  selectToken,
  selectIsRefreshing,
} from '../redux/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const isRefreshing = useSelector(selectIsRefreshing);

  return { isLoggedIn, isLoading, user, token, isRefreshing };
};
