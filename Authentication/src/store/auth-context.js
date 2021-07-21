import React, {useState, useEffect, useCallback} from 'react';

let logoutTimer;

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {}
});

const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjustedExpirationTime = new Date(expirationTime).getTime();
    const remainingTime = adjustedExpirationTime - currentTime;
    
    return remainingTime;
}

const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expirationDate');

    const remainingTime = calculateRemainingTime(storedExpirationDate);

    if(remainingTime <= 60000){
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        return null;
    }

    return {token: storedToken, duration: remainingTime};
}

export const AuthContextProvider = (props) => {
    const tokenData = retrieveStoredToken();
    let initialToken;
    if(tokenData){
        initialToken = tokenData.token;  //const initialToken = localStorage.getItem('token');

    }
    
    const [token, setToken] = useState(initialToken);
    
    const userIsLoggedIn = !!token;

    const logoutHandler = useCallback(() => {
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');

        if(logoutTimer){
            clearTimeout(logoutTimer);
        }
    }, []);

    const loginHandler = (token, expirationTime) => {
        setToken(token);
        localStorage.setItem('token', token); //using the syncronous api provided by the browser to store the token, so we can refresh the page and stay logged in
        localStorage.setItem('expirationTime', expirationTime);

        const remainingTime = calculateRemainingTime(expirationTime);
        logoutTimer = setTimeout(logoutHandler, remainingTime);
    }

    useEffect(() => {
        if(tokenData){
            console.log(tokenData.duration);
            logoutTimer = setTimeout(logoutHandler, tokenData.duration);
        }
    }, [tokenData])

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }
    
    return( 
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;