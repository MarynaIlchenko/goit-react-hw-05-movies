import { Switch, Route } from 'react-router-dom';
import { Navigation } from './Navigation';
import Cast from './views/Cast';
import HomePage from './views/HomePage';
import MovieDetailsPage from './views/MovieDetailsPage';
import MoviesPage from './views/MoviesPage';
import Reviews from './views/Reviews';
import NotFoundView from './views/NotFoundView/NotFoundView';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      
      <Route path="/movies">
        <Route <Cast /> />
        <Route <Reviews /> />
      </Route>
     <Route path="/movies">
      <MoviesPage />
        <MovieDetailsPage />
      </Route>
      <Route>
        <NotFoundView/>
        </Route>
        </Switch>
    </div>
  );
};
