import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import Home from './views/Home';

export default function App() {
  return (
    <Container>
    <AppBar />

    <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
     </Switch>
    </Container>
  );
}