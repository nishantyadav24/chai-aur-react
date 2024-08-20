import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';

import Home from './components/Home/Home.jsx';
import About from './components/about/About.jsx';
import Contact from './components/contact/Contact.jsx'; // Ensure this import is added

const router = createBrowserRouter([
  createRoutesFromElements( 
    <Route path='/' element={<Layout/>}>
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
    </Route>
  )
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
