import { BrowserRouter as Router, NavLink, BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import logo from '../logo.svg';
import { routes } from './routes';
import { Suspense } from 'react';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>loading</span>}>
      <BrowserRouter>
        <div className='main-layout'>
          <nav>
            <img src={logo} alt='logo' />
            <ul>
              {routes.map(({ to, name }) => (
                <li key={name}>
                  <NavLink to={to} className={({ isActive }) => (isActive ? 'nav-active' : '')}>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map(({name, path, Component }) => (
              <Route key={name} path={path} element={<Component />} />
            ))}
            <Route path='/*' element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
