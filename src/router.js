import React from 'react';
import { Router, Switch } from 'dva/router';
// import IndexPage from './pages/IndexPage';
// import Home from './pages/Home';
// import Menus from './pages/Menus';
// import About from './pages/About';
// import Admin from './pages/Admin';
// import Login from './pages/User/Login';
// import Register from './pages/User/Register';
import SubRoutes from './utils/SubRoutes'


const RouteConfig = [
  {
    path: '/',
    component: () => import('./pages/IndexPage'),
    model: [],
    routes: [
      {
        path: '/home',
        component: () => import("./pages/Home"),
        model: [],
        redirect: true
      },
      {
        path: '/menus',
        component: () => import("./pages/Menus"),
        redirect: true,
        model: [],
      },
      {
        path: '/admin',
        component: () => import("./pages/Admin"),
        redirect: true,
        model: [],
      },
      {
        path: '/about',
        component: () => import("./pages/About"),
        redirect: true,
        model: [],
      },
      {
        path: '/login',
        component: () => import("./pages/User/Login"),
        redirect: true,
        model: [],
      },
      {
        path: '/register',
        component: () => import("./pages/User/Register"),
        redirect: true,
        model: [],
      }
    ]
  }
];


function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        {/* <Route path="/" component={IndexPage} /> */}
        {RouteConfig.map((router, i) => (
          // 调用路由组件
          <SubRoutes key={i}  {...router} app={ app } />
        ))} 
      </Switch>
    </Router>
  );
}

export default RouterConfig;
