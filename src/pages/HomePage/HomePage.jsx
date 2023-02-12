import { Container, MainTitle, HomeImage } from '../../components/App.styled';
import phonebook from '../../images/phone-book.png';

export default function HomePage() {
  return (
    <Container>
      <MainTitle>Welcome to Simple phonebook</MainTitle>
      <HomeImage src={phonebook} alt="phonebook logo" />
    </Container>
  );
}
