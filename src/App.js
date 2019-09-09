import React, { useContext, Suspense } from 'react'
import { Router, Redirect } from '@reach/router'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Loading } from './components/general/Loading'
import { Fatal } from './components/general/Fatal'
import { NavBar } from './components/NavBar'
import { Context } from './Context'

const Home = React.lazy(() => import('./pages/Home'))
const Detail = React.lazy(() => import('./pages/Detail'))
const Favs = React.lazy(() => import('./pages/Favs'))
const User = React.lazy(() => import('./pages/User'))
const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'))
export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<Loading />}>
      <GlobalStyles />
      <Logo />
      <Router>
        <Fatal message="No se encontró el contenido buscado :(" default />
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
        {!isAuth && <NotRegisteredUser path="/login" />}
        {!isAuth && <Redirect from="/favs" to="/login" />}
        {!isAuth && <Redirect from="/user" to="/login" />}
        {isAuth && <Redirect from="/login" to="/" />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />
    </Suspense>
  )
}
