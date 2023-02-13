import noRootIcon from '../../images/noRootIcon.svg';
import {
  NoRootIcon,
  LinkHome,
  NoRootWrapper,
  NoRootText,
} from './NoRoot.Styled';

export default function NoRoot() {
  return (
    <>
      <NoRootIcon src={noRootIcon} alt="page not found" width={600} />
      <NoRootWrapper>
        <h1>Oopps, we can`t find this page</h1>
        <NoRootText>
          You can return to homepage by clicking{' '}
          <LinkHome to="/">Here</LinkHome>
        </NoRootText>
      </NoRootWrapper>
    </>
  );
}
