import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Root from './routes/root'
import ErrorPage from './error-page'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom'
import { ListaJobs } from './routes/ListaJobs'
<link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'listajobs',
    element: <ListaJobs />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
