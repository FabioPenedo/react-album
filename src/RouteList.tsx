import { Routes, Route, useRoutes } from 'react-router-dom';
import { Albums } from './pages/Albums';
import { Home } from './pages/Home';

export const RouteList = () => {

  return useRoutes([
    {path: '/', element: <Home />},
    {path: '/albums/:slug', element: <Albums />},
  ])
}