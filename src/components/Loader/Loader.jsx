import { WatchWrapper } from './Loader.styled';
import { Watch } from 'react-loader-spinner';

export function Loader({ color }) {
  return (
    <WatchWrapper>
      <Watch
        height="64"
        width="64"
        radius="48"
        color={color}
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </WatchWrapper>
  );
}
