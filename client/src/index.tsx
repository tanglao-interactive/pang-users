import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import Dashboard from './components/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <LoginPage />
      </App>
    ),
  },
  {
    path: "/sign-up",
    element: (
      <App>
        <SignupPage />
      </App>
    ),
  },
  {
    path: "/reset-password",
    element: (
      <App>
        <ResetPasswordPage />
      </App>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <Dashboard>
        <div>Dashboard</div>
      </Dashboard>
    ),
  },
  {
    path: "/dashboard/tracker",
    element: (
      <Dashboard>
        <div>Tracker</div>
      </Dashboard>
    ),
  },
  {
    path: "/dashboard/pang-members",
    element: (
      <Dashboard>
        <div>Members</div>
      </Dashboard>
    ),
  },
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
