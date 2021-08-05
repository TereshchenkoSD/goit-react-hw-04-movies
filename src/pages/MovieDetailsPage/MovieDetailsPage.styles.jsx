import styled from '@emotion/styled/macro';

export const MovieDataBlock = styled.div`
  display: flex;
`;
export const MovieTextBlock = styled.div``;

export const MovieTextBlockItem = styled.li`
  display: flex;

  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
`;

export const MovieImg = styled.img`
  width: 100%;
  max-width: 260px;
  heigth: auto;

  margin-right: 10px;
`;

export const MovieTextTitle = styled.p`
  min-width: 90px;
`;
