import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAut } from './autenticar'
export function Login(){
    const navegar = useNavigate()
    const auth = useAut()
    const [user,setUser] = useState('')
    const entrar = (e)=>{
        e.preventdefault()
        auth.login({ user })
        navegar('/about')
    }
    return(
        <div>
            <h1>login</h1>
            <form onSubmit={entrar}>
                <label>Tu nombre</label>
                <input value={user} onChange={e => setUser(e.target.value)} />
                <button type="submit">entrar</button>
            </form>
        </div>
    )
}