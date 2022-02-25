import { BrowserRouter, Route, NavLink, Routes } from 'react-router-dom'
import { ShopingPage } from '../02-components-patterns/pages/shopingPages'
import '../index.css'
import logo from '../logo.svg'

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src={logo} alt="" />
                    <ul>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to='/'>Shopping Page</NavLink>
                        </li>

                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to='/about'>About</NavLink>
                        </li>

                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to='/users'>Users</NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='about' element={<h1>About</h1>}></Route>
                    <Route path='users' element={<h1>USers</h1>}></Route>
                    <Route path='/' element={<ShopingPage />}></Route>
                    <Route path='/*' element={<h1>Not found</h1>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}


