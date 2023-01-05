import { Routes, Route, useRoutes } from 'react-router-dom';
import { AlbumPhoto } from './pages/AlbumPhoto';
import { Albums } from './pages/Albums';
import { Home } from './pages/Home';

export const RouteList = () => {

  return useRoutes([
    {path: '/', element: <Home />},
    {path: '/albums/:slug', element: <Albums />},
    {path: '/photo/:slug', element: <AlbumPhoto />}
  ])
}