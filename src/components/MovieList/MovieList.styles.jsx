import styled from '@emotion/styled/macro';

export const MovieGallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: calc(-1 * 30px);
  margin-top: calc(-1 * 30px);
`;

export const MovieGalleryItem = styled.li`
  height: auto;
  flex-basis: calc(100% / 4 - 60px);
  margin-left: 30px;
  margin-top: 30px;

  border-radius: 5px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  overflow: hidden;

  &:nth-child(4n) {
    margin-right: 0;
  }
`;

export const MoviePosterWrapper = styled.div`
  margin-bottom: 10px;
  height: 440px;
  overflow: hidden;
`;

export const MoviePoster = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const MovieTitle = styled.p`
  color: black;
  margin-bottom: 10px;
`;
