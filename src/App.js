import { Switch, Route } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container/Container";
import Home from "./views/Home";
import MoviesPage from "./views/MoviesPage";
import Movie from "./views/Movie/Movie";

export default function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/movie" exact>
          <MoviesPage />
        </Route>

        <Route>
          <Movie path="/movie/:movieId" />
        </Route>
      </Switch>
    </Container>
  );
}
