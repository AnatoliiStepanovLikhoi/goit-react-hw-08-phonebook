import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  box-shadow: rgb(182 182 182) 2px 10px 20px;
  width: 1200px;
  padding: ${p => p.theme.space[4]};
  text-align: center;

  margin-left: auto;
  margin-right: auto;
  margin-top: 64px;
`;

export const MainTitle = styled.h1`
  font-size: ${p => p.theme.fontsSizes.xl}px;
  padding-bottom: ${p => p.theme.space[3]};

  /* color: ${p => p.theme.colors.bgGrey}; */
`;

export const SecondaryTitle = styled.h2`
  font-size: ${p => p.theme.fontsSizes.l}px;
  padding-bottom: ${p => p.theme.space[4]};
`;
