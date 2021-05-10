import React, { useEffect, useState, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

//this function can be outside of the component because it doesn't need any data that is generated inside the component function.
//All of the data which will be required and used inside of the reducer function will be passed into this function when it's executed by React, automatically.
//params-> state: last state snapshot | action: action that was dispatched
const emailReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return {value: action.val, isValid: action.val.includes('@')};  
  }
  if(action.type === 'INPUT_BLUR'){
    return {value: state.value, isValid: state.value.includes('@')};
  }
  return {value: '', isValid: false}
}

const passwordReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return {value: action.val, isValid: action.val.trim().length > 6};  
  }
  if(action.type === 'INPUT_BLUR'){
    return {value: state.value, isValid: state.value.trim().length > 6};
  }
  return {value: '', isValid: false}
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState(); 
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  //useReduce, when?
  //When there's usage of states that belong together AND/OR there's state updates that depend on OTHER state.
  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: null});

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: null});

  // EXAMPLES------------------------------------------------------------------------------------------------------
  // It executes for the first time the component was mounted, but never after
  // useEffect(() => {
  //   console.log('EFFECT RUNNING');
  // }, []);

  // Now this function re-runs whenever the component was re-evaluated AND the dependency 'enteredPassword' changed
  // useEffect(() => {
  //   console.log('EFFECT RUNNING');
  // }, [enteredPassword]);

  // useEffect(() => {
  //   console.log('EFFECT RUNNING');

  //   return () => { //This will run BEFORE the effect function runs except for the first time it runs
  //     console.log('EFFECT CLEANUP');
  //   }
  // }, [enteredPassword]); //if here was an empty array instead [enteredPassword] as a dependency, the cleanup function would only run
  //                        //when the component is removed from the DOM, for exemple, when I actually login
  //---------------------------------------------------------------------------------------------------------------


  //object destructuring
  //     This is an alias assignment. pulling out of emailState the isValid prop, under the name 'emailIsValid'
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;
  //the advantages of the above are, since im pulling out the isValid state for each, whenever just the value changed, and not the validity, the useEffect doesn't run again-
  //This is, after the values are valid, it stops running the useEffect. for example, below 6 chars is not a valid password, but after the 6 chars are met, it doesn't run again

  useEffect(() => {
    const identifier =  setTimeout(() => {
      console.log('checking validity');
      setFormIsValid(
        emailIsValid && passwordIsValid
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
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({type: 'USER_INPUT', val: event.target.value});

    //setFormIsValid(event.target.value.includes('@') && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({type: 'USER_INPUT', val: event.target.value});

    //setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes('@')); //this shouldn't be done because I'm deriving one state (emailIsValid) by looking at another state (enteredEmail)
                                                 //works most of the time, but may not work for example if the state for enteredEmail is not updated in time and I'm trying to setEmailIsValid
                                                 //based on a wrong or outdated snapshot of the value of enteredEmail state. So when we depend on a previous snapshot
                                                 //of a state we should use that function format, but that doesn't work when I'm messing a state based on a different state. So useReducer comes into play.

    // setEmailIsValid(emailState.isValid);
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({type: 'INPUT_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
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
