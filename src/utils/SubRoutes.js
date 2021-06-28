import React from 'react'
import { Route } from 'dva/router' 

export default function subRoutes(route) {
  console.log(route)
  return (
    <Route 
      render={props => <route.component {...props} routes={route.routes} />} 
    />
  )
}


// export default function subRoutes({routes, component: Component}) {
//   return (
//     <Route 
//         render={props => <Component {...props} routes={routes} />} 
//     />
//   )
// }
