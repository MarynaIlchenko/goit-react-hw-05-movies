import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export const Navigation = () => (
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/movies">Movies</NavLink>
  </nav>
);
