import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import { fetchMovieCredits } from '../../services/movies-api';
import { Div, Li } from './Cast.styles';

export default function Cast({ movieId }) {
  const [cast, setCast] = useState([]);
  const actorPhoto = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    async function onFetchMovieCredits() {
      try {
        const cast = await fetchMovieCredits(movieId);
        if (cast.length === 0) {
          <p>no cast</p>;
        }
        console.log(cast);
        setCast(cast);
      } catch (error) {
        <p>no cast</p>;
      }
    }
    onFetchMovieCredits();
  }, [movieId]);

  return (
    <>
      {cast.length > 0 && (
        <ul>
          {cast.map(c => (
            <Li key={c.id}>
              <img
                src={`${actorPhoto}${c.profile_path}`}
                alt={c.name}
                width="80"
              />
              <Div>
                <p>
                  Actor: <span>{c.name}</span>
                </p>
                <p>
                  Character: <span>{c.character}</span>
                </p>
              </Div>
            </Li>
          ))}
        </ul>
      )}
    </>
  );
}

Cast.propTypes = {
  cast: PropTypes.shape({
    id: PropTypes.number,
    profile_path: PropTypes.string,
    name: PropTypes.string.isRequired,
    character: PropTypes.string,
  }),
};
