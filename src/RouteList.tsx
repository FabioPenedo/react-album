import { Routes, Route, useRoutes } from 'react-router-dom';
import { Home } from './pages/Home';

export const RouteList = () => {
  return useRoutes([
    {path: '/', element: <Home />},
  ])
}