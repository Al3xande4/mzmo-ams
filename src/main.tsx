import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './layouts/Layout/Layout';
import HomePage from './pages/Home/Home';

const Router = createHashRouter([
	{
		path: '/',
		element: <Layout />,
		children: [{ path: '/', element: <HomePage /> }],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={Router}></RouterProvider>
	</React.StrictMode>
);
