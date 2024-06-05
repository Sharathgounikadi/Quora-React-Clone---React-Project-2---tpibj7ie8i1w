import { createContext, useContext, useState,useEffect } from "react";

const UserContext = createContext();


export const UserProvider = ({ children }) => {

    // const [getToken, setToken] = useState(null);
    // const [getName, setName] = useState(null);

    // const isAuthenticated = !!localStorage.getItem('token'); // check if the token exists
    // return isAuthenticated ? children : <Navigate to="/" />;

    

    const [theme, setTheme] = useState('light');
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };


    const onTokenHandler = (data) => {
        setToken(data);
    }

    // // const onNameHandler = (data) => {
    // //     setName(data);
    // }

    const object = {
        // getToken,
        // getName,
        // onTokenHandler,
        // onNameHandler
        theme,toggleTheme
    }


    return (<div>
        <UserContext.Provider value={object}>
            {children}
        </UserContext.Provider>
    </div>)
}

export function useUser() {
    return useContext(UserContext);
}