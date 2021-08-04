import { NavLink } from 'react-router-dom';
import { Nav, NavList, NavListItem } from './Navigation.styled';

const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <NavListItem>
          <NavLink
            exact
            to="/"
            className="navLink"
            activeClassName="activeNavLink"
          >
            Home
          </NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink
            to="/movies"
            className="navLink"
            activeClassName="activeNavLink"
          >
            Movies
          </NavLink>
        </NavListItem>
      </NavList>
    </Nav>
  );
};

export default Navigation;
