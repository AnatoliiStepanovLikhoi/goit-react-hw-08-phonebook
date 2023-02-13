import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const NoRootIcon = styled.img`
  margin: ${p => p.theme.space[3]} auto;
`;

export const NoRootWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.space[4]};
`;

export const LinkHome = styled(Link)`
  color: ${p => p.theme.colors.accentShadow};
  text-decoration: underline;
`;

export const NoRootText = styled.p`
  font-size: ${p => p.theme.fontsSizes.l}px;
`;
