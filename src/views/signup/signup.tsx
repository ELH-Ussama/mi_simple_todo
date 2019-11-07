import React, { Component } from 'react';
import Header from '../../common/components/header';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './signup.css';
import { validateAndSignUpAction, ValidateAndSignUpActionType } from './signup.service';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

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
  };

  handleChange = (stateKey: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [stateKey]: event.target.value });
  };

  handleValidate = () => {
    this.props.dispatch(validateAndSignUpAction(
      this.state.firstName,
      this.state.lastName,
      this.state.userName,
      this.state.email,
      this.state.password,
    ))
  };

  render() {
    const passwordsMatchError: boolean = !!this.state.rePassword && this.state.rePassword !== this.state.password;
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
            value={this.state.firstName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="LastName"
            label="Last Name"
            className="textField"
            onChange={this.handleChange('lastName')}
            variant="outlined"
            value={this.state.lastName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="UserName"
            label="User Name"
            className="textField"
            onChange={this.handleChange('userName')}
            variant="outlined"
            value={this.state.userName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="Email"
            label="Enter email"
            className="textField"
            onChange={this.handleChange('email')}
            variant="outlined"
            value={this.state.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="Pass"
            label="Enter password"
            className="textField"
            onChange={this.handleChange('password')}
            variant="outlined"
            value={'*'.repeat(this.state.password.length)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={passwordsMatchError}
            id="RePass"
            label="Repeat password"
            helperText={passwordsMatchError && "Passwords did not match"}
            className="textField"
            onChange={this.handleChange('rePassword')}
            variant="outlined"
            value={'*'.repeat(this.state.rePassword.length)}
          />
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