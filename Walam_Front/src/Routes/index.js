import { lazy } from 'react'
const UsersDataForm = lazy(() => import('./UsersDataForm/Component/UsersDataForm'))
const OnBoarding = lazy(() => import('./OnBoarding/Component/OnBoarding'))
const Login = lazy(() => import('./Login/Component/Login'))
const Register = lazy(() => import('./Register/Component/Register'))
const ForgotPassword = lazy(() => import('./ForgotPassword/Component/ForgotPassword'))
const DashboardUser = lazy(() => import('./DashboardUser/Component/DashboardUser'))
const VirtualCashier = lazy(() => import('./VirtualCashier/Component/VirtualCashier'))
const Transfer = lazy(() => import('./Transfer/Component/Transfer'))
const ConfirmTransfer = lazy(() => import('./ConfirmTransfer/Component/ConfirmTransfer'))
const MovementsHistory = lazy(() => import('./MovementsHistory/Component/MovementsHistory'))
const HistoryDetails = lazy(() => import('./HistoryDetails/Component/HistoryDetails'))
const CVUUser = lazy(() => import('./CVUUser/Component/CVUUser'))
const ForeignExchange = lazy(() => import('./ForeignExchange/Component/ForeignExchange'))
const Help = lazy(() => import('./Help/Component/Help'))
const VirtualCard = lazy(() => import('./VirtualCard/Component/VirtualCard'))
const Donate = lazy(() => import('./Donate/Component/Donate'))
// Unprotected Routes
// const Animals = lazy(() => import('./Animals/Component/Animals'))
// const WhoWeAre = lazy(() => import('./WhoWeAre/Component/WhoWeAre'))
// const NotFound = lazy(() => import('./NotFound/Component/NotFound'))
// Protected Routes
// const User = lazy(() => import('./User/Container/User'))
// const MyVolunteers = lazy(() => import('./MyPurchases/Container/MyPurchases'))
// const MyPurchases = lazy(() => import('./MyPurchases/Container/MyPurchases'))

export {
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
}
