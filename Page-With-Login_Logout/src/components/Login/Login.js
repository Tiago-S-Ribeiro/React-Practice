import React, { useEffect, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // It executes for the first time the component was mounted, but never after
  // useEffect(() => {
  //   console.log('EFFECT RUNNING');
  // }, []);

  // Now this function re-runs whenever the component was re-evaluated AND the dependency 'enteredPassword' changed
  // useEffect(() => {
  //   console.log('EFFECT RUNNING');
  // }, [enteredPassword]);

  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => { //This will run BEFORE the effect function runs except for the first time it runs
      console.log('EFFECT CLEANUP');
    }
  }, [enteredPassword]); //if here was an empty array instead [enteredPassword] as a dependency, the cleanup function would only run
                         //when the component is removed from the DOM, for exemple, when I actually login

  useEffect(() => {
    const identifier =  setTimeout(() => {
      console.log('checking validity');
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    }, 400);

    //This runs as a cleanup process
    //P: When it runs?
    //R: Whenever the useEffect function runs, BEFORE it runs (except for the 1st time it runs), this cleanup function will run
    //It also runs when the component is re-used (unmounts from the DOM)
    //So basically it runs before every new side effect function execution & before the component is removed and it does NOT run before the side effect function execution
    return () => {
      console.log('cleanup');
      clearTimeout(identifier); //everytime the cleanup functions runs, it clears the timer that was set in the last side effect function execution
    };
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
