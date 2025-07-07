import React from 'react'
import './App.css'
import { store } from './app/store'
import { Provider } from 'react-redux'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Cart from './features/cart/Cart'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CartPage from './pages/CartPage'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/signup',
      element: <SignupPage />,
    },
    {
      path: '/cart',
      element: <CartPage />,
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App;
