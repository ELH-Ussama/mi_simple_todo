import React, { Component } from 'react';
import Header from '../../common/components/header';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './signin.css';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { IValidateAndSignInAction, validateAndSignInAction } from './signin.service';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

interface SignInPageProps {
  dispatch: Dispatch<IValidateAndSignInAction>
}

class SignInPage extends Component<SignInPageProps> {
  state = {
    userNameOrEmail: '',
    password: '',
    showPassword: false,
  };

  handleChange = (stateKey: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [stateKey]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState({showPassword: !this.state.showPassword})
  };

  handleValidate = () => {
    this.props.dispatch(validateAndSignInAction(
      this.state.userNameOrEmail,
      this.state.password,
    ));
  };

  render() {
    const { userNameOrEmail, password, showPassword } = this.state;
    return <div className="root">
      <Header>{'Sign Up Form'}</Header>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="UserName"
            label="User Name or Email"
            className="textField"
            onChange={this.handleChange('userNameOrEmail')}
            variant="outlined"
            value={userNameOrEmail}
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

export default connect()(SignInPage);