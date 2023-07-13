import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ResetPasswordPage from './pages/ResetPasswordPage';

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
