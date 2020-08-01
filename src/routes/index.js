import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const PublicHome = lazy(() => import('../pages/home'))
const Timeline = lazy(() => import('../pages/timeline'))
const Login = lazy(() => import('../pages/login'))
const Ok = lazy(() => import('../pages/ok'))

const Routes = () => {
  const Fallback = () => <p>Carregando...</p>

  const isLogged = false

  function isUserLogged() {
    return (isLogged ? <Timeline /> : <PublicHome />)
  }

  return (
    <Suspense fallback={<Fallback />}>
      <Router>
        <Switch>
          <Route path='/ok' component={Ok} />
          <Route path='/timeline' component={Timeline} />
          <Route path='/login' component={Login} />
          <Route path='/' component={isUserLogged} exact />
        </Switch>
      </Router>
    </Suspense>
  )
}
export default Routes
