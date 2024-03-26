import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Profile from './Pages/Profile.jsx';
import { avatar, image, twitter, profilePt } from "./components/Icon-image.jsx";


const router = createBrowserRouter([
  
  {
    path:"/",
    element: <App />,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/profile",
        element:<Profile src={profilePt}/>
      },
      {
        path:"/cnn",
        element:<Profile src={image}/>
      },
      {
        path:"/new york time",
        element:<Profile src={avatar}/>
      },
      {
        path:"/twitter",
        element:<Profile src={twitter}/>
      }
    ]
  },
  
    
  
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
