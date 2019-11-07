import React from 'react';
import './navBar.css';
import Button from '@material-ui/core/Button';

const NavBar = () => {
  return (
    <div className="Root">
      <Button variant="outlined" className="HomeBtn" href={'/'}>Home</Button>
      <Button variant="outlined" className="TodoBtn" href={'/todoList'}>TodoList</Button>
      <Button variant="outlined" className="AbtBtn" href={'/about'}>About</Button>
      <Button variant="outlined" className="SignInBtn" href={'/signIn'}>SignIn</Button>
      <Button variant="outlined" className="SignUpBtn" href={'/signUp'}>SignUp</Button>
    </div>
  );
};

export default NavBar;