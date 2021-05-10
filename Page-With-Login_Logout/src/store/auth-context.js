import React, { useState, useEffect } from 'react';

//the return from createContext, stored on 'AuthContext' is kind of an object that sort of contains components
const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedLoggedInData = localStorage.getItem('isLoggedIn');
        
        if(storedLoggedInData === '1'){
          setIsLoggedIn(true);
        }
    }, []);

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    }

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    }

    return( 
        <AuthContext.Provider value={{isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler}}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;