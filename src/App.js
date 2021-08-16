import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container/Container";
// import Home from "./views/Home";
//import MoviesPage from "./views/MoviesPage";
//import Movie from "./views/Movie/Movie";
import LoaderSpinner from "./components/Loader/Loader";

const NotFoundView = lazy(() =>
  import("./views/NotFoundView" /* webpackChunkName:"not-found"*/)
);

const Home = lazy(() => import("./views/Home"));

const MoviesPage = lazy(() => import("./views/MoviesPage"));

const Movie = lazy(() => import("./views/Movie/Movie"));

export default function App() {
  return (
    <Container>
      <AppBar />
      <ToastContainer autoClose={3000} />
      <Suspense fallback={<LoaderSpinner />}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <Movie />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
