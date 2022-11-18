import { useState } from 'react'
import { useAut } from './autenticar';
export function Logout(){
    const [user,setUser] = useState('')
    const auth = useAut();
  
    const salir = (e) => {
      e.preventDefault();
      auth.logout();
    };
    return(
        <div>
            <h1>login</h1>
            <form onSubmit={salir}>
                <label>Salir?</label>
                <button type="submit">salir</button>
            </form>
        </div>
    )
}