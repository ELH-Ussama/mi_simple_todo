import React from 'react';
import TodoList from './views/todoList/todolist';
import './App.css';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import NavBar from './common/components/navBar';
import Home from './views/home/home';
import SignUpPage from './views/signup/signup';

interface AppProps {
}

class App extends React.Component<AppProps> {
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar/>
          <Switch>
            <Route exact path={'/'}>
              <Home/>
            </Route>
            <Route exact path={'/signIn'}>
              <h1>SignIn</h1>
            </Route>
            <Route exact path={'/signUp'}>
              <SignUpPage/>
            </Route>
            <Route exact path={'/about'}>
              <h1>About</h1>
            </Route>
            <Route exact path={'/todoList'}>
              <TodoList/>
            </Route>
            <Redirect to={'/'}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect()(App);
