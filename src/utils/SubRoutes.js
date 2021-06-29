import React from 'react'
import { Route } from 'dva/router' 
import { Redirect } from 'dva/router';
import NoMatch from '../components/NoMatch';

// export default function subRoutes(route) {
//   console.log(route)
//   return (
//     <Route 
//       render={props => <route.component {...props} routes={route.routes} />} 
//     />
//   )
// }


export default function subRoutes({routes, component: Component}) {
  return (
    <Route 
        render={props => <Component {...props} routes={routes} />} 
    />
  )
}


// RedirectRoute 封装重定向
export function RedirectRoute({routes, from, exact}) {
  const routeR = routes.filter(item => {
    return item.direction
  })

  const to = routeR.length ? routeR[0].path : routes[0].path;
  return <Redirect exact={exact} from={from} to={to} />;
}


// NoMatchRoute
export function NoMatchRoute({ status = 404 }) {
  return <Route render={props => <NoMatch {...props} status={status} />} />;
}