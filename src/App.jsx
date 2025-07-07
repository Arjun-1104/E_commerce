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
import Checkout from './pages/Checkout'
import ProductDetail from './features/product-list/components/ProductDetail'
import ProductDetailPage from './pages/ProductDetailPage'
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
     {
      path: '/checkout',
      element: <Checkout />,
    },
    {
      path: '/product-detail',
      element: <ProductDetailPage />,
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App;
