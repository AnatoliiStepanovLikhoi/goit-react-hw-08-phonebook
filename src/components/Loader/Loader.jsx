import { WatchWrapper } from './Loader.styled';
import { Watch } from 'react-loader-spinner';

export function Loader() {
  return (
    <WatchWrapper>
      <Watch
        height="80"
        width="80"
        radius="48"
        color="lightgreen"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </WatchWrapper>
  );
}
