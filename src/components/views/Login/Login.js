import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Login.module.scss';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const Login = () => (
  <div className={styles.component}>
    <Paper>
      <h1>SIGN IN</h1>
      <form className={styles.wrapper}>
        
        <TextField className={styles.input}
          id="filled-password-input"
          label="Login"
          type="text"
          autoComplete="current-password"
          variant="filled"
        />
        <TextField className={styles.input}
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <Button className={styles.button} variant="contained" color="primary" href={process.env.PUBLIC_URL}>
          Log In
        </Button>
      </form>
    </Paper>
  </div>
);

export default Login;