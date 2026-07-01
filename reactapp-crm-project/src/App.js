//React Hooks imports
import React, { useState, useEffect } from 'react';
//React Router imports
import { createBrowserRouter, RouterProvider, Outlet, Link } from 'react-router-dom';
//Component imports
import {Navbar, ComponentPractice} from './pages/Components';
import RootLayout from './pages/RootLayout';
import {Home} from './pages/Home';



const About = ()=>{
    return(
        <h1>About Page</h1>
    );
};


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />, // A layout wrapper (more on this below)
        children: [
            { path: '/', element: <Home/> },
            { path: '/practice-components', element: <ComponentPractice/> },
            { path: '/about', element: <About/> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;