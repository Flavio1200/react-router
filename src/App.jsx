import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './componentes/Home'
import { Blog } from './componentes/Blog'
import { About } from './componentes/About'
import { AutProvider } from './componentes/autenticar';
import { Menu } from './componentes/Menu';
import { BlogPost } from './componentes/BlogPost';
import { Login } from './componentes/Login';
import { Logout } from './componentes/Logout';
import './App.css'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <AutProvider>
          <Menu/> 

          <Routes> 
            <Route path='/' element={<Home/>}/>
            <Route path='/blog' element={<Blog/>}>
              <Route path=':slug' element={<BlogPost/>}/>
            </Route>
            <Route path='/login' element={<Login/>}/>
            <Route path='/logout' element={<Logout/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='*' element={<p>error</p>}/>
          </Routes>
        </AutProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
