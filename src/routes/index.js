import * as React from 'react';
import Loadable from 'react-loadable'
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Loading = () => null
const IndexPage = Loadable({
  loader: () => import('../pages/Main'),
  loading: Loading,
})

const RouterConfig=({ history })=> {
    return (
      <Router history={history}>
        <Route path="/" exact component={IndexPage} />
      </Router>
    )
}

export default RouterConfig;