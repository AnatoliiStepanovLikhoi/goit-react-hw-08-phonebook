import { Container, MainTitle, HomeImage } from '../../components/App.styled';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import phonebook from '../../images/phone-book.png';

export default function HomePage() {
  const { isLoggedIn } = useAuth();

  return (
    <Container>
      <MainTitle>Welcome to Simple phonebook</MainTitle>

      {isLoggedIn ? (
        <NavLink to="contacts">
          <HomeImage src={phonebook} alt="phonebook logo" />
        </NavLink>
      ) : (
        <NavLink to="login">
          <HomeImage src={phonebook} alt="phonebook logo" />
        </NavLink>
      )}
    </Container>
  );
}
