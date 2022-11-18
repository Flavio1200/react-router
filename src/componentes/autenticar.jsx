import React from "react"
import { useState } from "react"
import { useContext } from "react"
import { useNavigate } from "react-router-dom";

const AutContext = React.createContext()


function AutProvider({ children }){
    const navigate = useNavigate();
    const [username, setUsername] = useState(null)

    const login = ({ username }) => {
        setUsername({ username });
        navigate('/about');
    };
      
    const logout = () => {
        setUsername(null);
        navigate('/');
    };
    const aut = {username, login,logout}
    return(
        <AutContext.Provider value={aut}>
            {children}
        </AutContext.Provider>
    )
}

function useAut(){
    const Aut = useContext(AutContext)
    return Aut;
}
export {
    AutProvider, useAut
}