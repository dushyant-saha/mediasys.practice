// import logo from './logo.svg';
import logo from './logo.png'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import bootstrap from 'bootstrap'

import { createBrowserRouter, RouterProvider, Outlet, Link } from 'react-router-dom';
import Home from './Home';
import Navbar from './Home'
// import About from './pages/About';
import RootLayout from './layouts/RootLayout';

export default function RootLayout() {
    return (
        <section>
            <Navbar></Navbar>
            <nav><Link to="/">Home</Link> | <Link to="/about">About</Link></nav>
            <Outlet />
        </section>
    );
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />, // A layout wrapper (more on this below)
        children: [
            { path: '/', element: <Home /> },
            { path: '/about', element: <About /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;