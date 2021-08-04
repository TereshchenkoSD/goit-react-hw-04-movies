import styled from '@emotion/styled/macro';

export const Nav = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.8rem;
`;

export const NavListItem = styled.li`
  &:not(:last-child) {
    margin-right: 40px;
  }
`;
