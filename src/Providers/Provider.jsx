import React from 'react'


export const AuthContext = React.createContext({});

function Provider(props) {

    const user = {
        id: 1,
        name: mauricio,
        idade: 22

    };


    return (
        
            <AuthContext.Provider value={{user}}>
            {props.children}
            </AuthContext.Provider>
        
    )
}

export default Provider;
