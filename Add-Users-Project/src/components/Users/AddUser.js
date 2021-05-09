import React, { useState, useRef } from 'react';
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
// import Wrapper from '../Helpers/Wrapper'
import styles from './AddUser.module.css'

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        if(enteredName.trim().length === 0 || enteredUserAge.trim().length === 0 ){
            setError({title: 'Invalid input', message: 'Please enter a valid name and age.'})
            return;
        }
        if(+enteredUserAge < 1){ //the + enforces that the string is parsable to a number.
            setError({title: 'Invalid age', message: 'Please enter a valid age. (>0)'})
            return;
        }

        props.onAddUser(enteredName, enteredUserAge);
        // setEnteredUsername('');
        // setEnteredAge('');
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    // const usernameChangeHandler = (event) => {
    //     // setEnteredUsername(event.target.value);
    // }

    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value);
    // }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <React.Fragment>
        {/* <Wrapper> */}
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" ref={nameInputRef}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" ref={ageInputRef}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        {/* </Wrapper> */}
        </React.Fragment>
    );
}

export default AddUser;

//Estes artefatos deviam estar no input do username e da age, antes do uso de refs, quanto tinha o uso de handlers
// value={enteredUsername} onChange={usernameChangeHandler}
// value={enteredAge} onChange={ageChangeHandler}