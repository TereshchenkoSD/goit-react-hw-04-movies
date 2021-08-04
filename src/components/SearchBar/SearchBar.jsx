import PropTypes from 'prop-types';

import {
  Header,
  Form,
  FormBtn,
  FormBtnLabel,
  FormBtnInput,
} from './SearchBar.styles';

const Searchbar = ({ onSearch }) => {
  const handleSearch = e => {
    e.preventDefault();
    onSearch(e.target.elements.movieName.value);
  };

  return (
    <Header>
      <Form onSubmit={handleSearch}>
        <FormBtn type="submit">
          <FormBtnLabel>Search</FormBtnLabel>
        </FormBtn>

        <FormBtnInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="movieName"
        />
      </Form>
    </Header>
  );
};

Searchbar.propTypes = {
  onSearch: PropTypes.func,
};

export default Searchbar;
