import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Outlet, Link } from 'react-router-dom';
import {Home, Navbar, Practice} from './Components';
import RootLayout from './RootLayout';



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
            { path: '/component_list', element: <Practice/> },
            { path: '/about', element: <About/> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;