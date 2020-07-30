import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Home = lazy(() => import('../pages/home'))
const Ok = lazy(() => import('../pages/ok'))
const Timeline = lazy(() => import('../pages/timeline'))

const Routes = () => {
  const Fallback = () => <p>Carregando...</p>

  return (
    <Suspense fallback={<Fallback />}>
      <Router>
        <Switch>
          <Route path='/ok' component={Ok} />
          <Route path='/timeline' component={Timeline} />
          <Route path='/' component={Home} exact />
        </Switch>
      </Router>
    </Suspense>
  )
}
export default Routes
