import { BrowserRouter, Route, NavLink, Routes, Navigate } from 'react-router-dom'
import routes from './routes'
import '../index.css'
import logo from '../logo.svg'
import { Suspense } from 'react'

export const Navigation = () => {
    return (
        <Suspense fallback={<h1>Loading</h1>}>

            <BrowserRouter>
                <div className='main-layout'>
                    <nav>
                        <img src={logo} alt="" />
                        <ul>
                            {
                                routes.map(({ to, name }) => {
                                    return (
                                        <li key={name}>
                                            <NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to={to}>{name}</NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                    <Routes>
                        {
                            routes.map(({ name, path, Component }) => {
                                return (
                                    <Route
                                        key={name}
                                        path={path}
                                        element={<Component />}
                                    />
                                )
                            })
                        }
                        <Route path='/*' element={<Navigate to={routes[0].to} replace />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    )
}


