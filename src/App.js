import { lazy, Suspense } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import { Route, Switch } from 'react-router-dom';

const HomePage = lazy(() => import('./components/HomePage/HomePage.js'));
const MoviesPage = lazy(() => import('./components/MoviesPage/MoviesPage.js'));
const MovieDetailsPage = lazy(() =>
  import('./components/MovieDetailsPage/MovieDetailsPage.js'),
);
const NotFoundView = lazy(() =>
  import('./components/NotFoundView/NotFoundView.js'),
);

function App() {
  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={<div>Loading</div>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:moviesId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
