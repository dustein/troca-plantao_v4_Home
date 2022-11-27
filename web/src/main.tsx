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
import { AcceptedJobs } from './routes/AcceptedJobs'
import { AcceptedOffers } from './routes/AcceptedOffers'
import { OfferJob } from './routes/OfferJob'
import { LoggedNav } from './routes/LoggedNav'
<link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'logged',
    element: <LoggedNav />
  },
  {
    path: '/logged/listajobs',
    element: <ListaJobs />
  },
  {
    path: '/logged/acceptedjobs',
    element: <AcceptedJobs />
  },
  {
    path: '/logged/offerjob',
    element: <OfferJob />
  },
  {
    path: '/logged/acceptedoffers',
    element: <AcceptedOffers />
  },
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
