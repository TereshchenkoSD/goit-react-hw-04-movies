import styled from '@emotion/styled/macro';

export const MovieDataBlock = styled.div`
  display: flex;
`;
export const MovieTextBlock = styled.div`
  text-align: left;
`;

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

export const BtnGoBack = styled.button`
  min-width: 100px;
  padding-top: 2px;
  padding-bottom: 2px;

  margin-bottom: 20px;
  margin-top: 20px;

  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: rgba(33, 33, 33, 1);
  background-color: rgba(156, 156, 156, 1);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.875;
  letter-spacing: 0.06em;
  transition-property: color, background-color, box-shadow;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: rgba(245, 244, 250, 1);
    background-color: rgba(33, 150, 243, 1);
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;
