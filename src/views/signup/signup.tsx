import React, { Component } from 'react';
import Header from '../../common/components/header';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './signup.css';
import { validateAndSignUpAction, ValidateAndSignUpActionType } from './signup.service';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';

interface SignUpPageProps {
  dispatch: Dispatch<ValidateAndSignUpActionType>
}

class SignUpPage extends Component<SignUpPageProps> {
  state = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    rePassword: '',
    showPassword: false,
    showRePassword: false,
  };

  handleChange = (stateKey: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [stateKey]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState({showPassword: !this.state.showPassword})
  };

  handleClickShowRePassword = () => {
    this.setState({showRePassword: !this.state.showRePassword})
  };

  handleValidate = () => {
    this.props.dispatch(validateAndSignUpAction(
      this.state.firstName,
      this.state.lastName,
      this.state.userName,
      this.state.email,
      this.state.password,
    ));
  };

  render() {
    const { firstName, lastName, userName, email, password, rePassword, showPassword, showRePassword } = this.state;
    return <div className="root">
      <Header>{'Sign Up Form'}</Header>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="FirstName"
            label="First Name"
            className="textField"
            onChange={this.handleChange('firstName')}
            variant="outlined"
            value={firstName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="LastName"
            label="Last Name"
            className="textField"
            onChange={this.handleChange('lastName')}
            variant="outlined"
            value={lastName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="UserName"
            label="User Name"
            className="textField"
            onChange={this.handleChange('userName')}
            variant="outlined"
            value={userName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="Email"
            label="Enter email"
            className="textField"
            onChange={this.handleChange('email')}
            variant="outlined"
            value={email}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl className="textField" variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={this.handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={this.handleClickShowPassword}
                  >
                    {showPassword ? <Visibility/> : <VisibilityOff/>}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl className="textField" variant="outlined">
            <InputLabel htmlFor="outlined-adornment-rePassword">Repeat password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-rePassword"
              type={showRePassword ? 'text' : 'password'}
              value={rePassword}
              onChange={this.handleChange('rePassword')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={this.handleClickShowRePassword}
                  >
                    {showRePassword ? <Visibility/> : <VisibilityOff/>}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={125}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained"
                  color="primary"
                  className={'button'}
                  onClick={this.handleValidate}
          >
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </div>;
  }
}

export default connect()(SignUpPage);