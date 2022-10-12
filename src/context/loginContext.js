import { useState, createContext } from 'react';


export const LoginContext = createContext();

const users = [
    {
        email: 'gianluca@prueba.com',
        password: 'gianluca'
    },
    {
        email: 'moriconi@prueba.com',
        password: 'moriconi'
    },
    {
        email: 'daniela@prueba.com',
        password: 'daniela'
    }
]

export const LoginProvider = ({children}) =>{
   
    const [user, setUser] = useState({
        user: '',
        logged: false
    });


    const login = (values) => {
        const match = users.find(user => user.email === values.email);

        if (match){
            if (match.password === values.pass){
                setUser({
                    user: match.email,
                    logged: true
                })
            } else{
                alert("Contraseña incorrecta")
            }
        } else{
            alert("Email incorrecto")
        }
    };

    const logout = (values) => {
        setUser({
            user: '',
            logged: ''
        })
    };


    return (
        <LoginContext.Provider value={{user, login, logout}}>
            {children}
        </LoginContext.Provider>
    )
}