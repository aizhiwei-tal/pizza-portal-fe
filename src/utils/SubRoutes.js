import React from 'react'
import { Route } from 'dva/router' 
import { Redirect } from 'dva/router';
import NoMatch from '../components/NoMatch';
import dynamic from 'dva/dynamic' ;

// export default function subRoutes(route) {
//   console.log(route)
//   return (
//     <Route 
//       render={props => <route.component {...props} routes={route.routes} />} 
//     />
//   )
// }

// 解决动态加载路由组件
const dynamicCom = (app, models, component, routes) => dynamic({
  app,
  models: () => models,
  component: () => 
    component().then( res => {
      // console.log('aaaiii', res)
      const Component = res.default || res
      return props => <Component {...props} app={app} routes={routes} />
    })
})

export default function subRoutes({routes, component, app, model}) {
  return (
    <Route  component  = {dynamicCom(app, model, component, routes)} />
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