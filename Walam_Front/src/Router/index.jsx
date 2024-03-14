import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Loader from '../components/Loader/Loader'
import { MainLayout, UserLayout } from '../Layouts'
import { BalanceProvider } from '../Context/BalanceContext'

import {
  UsersDataForm,
  OnBoarding,
  Login,
  Register,
  ForgotPassword,
  DashboardUser,
  VirtualCashier,
  Transfer,
  ConfirmTransfer,
  MovementsHistory,
  HistoryDetails,
  CVUUser,
  ForeignExchange,
  Help,
  VirtualCard,
  Donate
} from '../Routes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loader />}>
        <MainLayout />
      </Suspense>
    ),
    children: [

      {
        path: '/Register',
        element: (
          <Suspense fallback={<Loader />}>
            <Register />
          </Suspense>
        )
      },
      {
        path: '/',
        element: <OnBoarding />
      },
      {
        path: '/Login',
        element: <Login />
      },
      {
        path: '/ForgotPassword',
        element: <ForgotPassword />
      },
      {
        path: '/',
        element: (
          <Suspense fallback={<Loader />}>
            <BalanceProvider>
              <UserLayout />
            </BalanceProvider>
          </Suspense>
        ),
        children: [
          {
            path: '/DashboardUser',
            element: <DashboardUser />
          },
          {
            path: '/Transfer',
            element: <Transfer />
          },
          {
            path: '/ConfirmTransfer',
            element: <ConfirmTransfer />
          },
          {
            path: '/MovementsHistory',
            element: <MovementsHistory />
          },
          {
            path: '/HistoryDetails/:id',
            element: <HistoryDetails />
          },
          {
            path: '/CVUUser',
            element: <CVUUser />
          },
          {
            path: '/VirtualCashier',
            element: <VirtualCashier />
          },
          {
            path: '/UsersDataForm',
            element: <UsersDataForm />
          },
          {
            path: '/ForeignExchange',
            element: <ForeignExchange />
          },
          {
            path: '/Help',
            element: <Help />
          },
          {
            path: '/VirtualCard',
            element: <VirtualCard />
          },
          {
            path: '/Donate',
            element: <Donate />
          }
        ]
      }

    ]
  }
])

/*
if you wants to add a new route please create a new component
on the  routes file ./Routes

then

add a new object with the path and element properties

    {
        path: '',
        element: <>
      },

      inside the children propertie.
*/
