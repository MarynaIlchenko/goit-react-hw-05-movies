import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import style from './HomePageItem.module.css';

export const HomePageItem = ({ title, id, poster_path }) => {
  const location = useLocation();
  const posterImage = `https://image.tmdb.org/t/p/w300/${poster_path}`;

  return (
    <li>
      <Link
        className={style.link}
        state={{ from: location }}
        to={`/movies/${id}`}
      >
        {poster_path ? (
          <img
            className={style.img}
            src={poster_path && posterImage}
            alt=""
            width={300}
          />
        ) : (
          <h2>Sorry, the movie was not found.</h2>
        )}
        <p className={style.text}> {title}</p>
      </Link>
    </li>
  );
};

HomePageItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
};
