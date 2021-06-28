import React from 'react';
import { Router, Switch } from 'dva/router';
import IndexPage from './pages/IndexPage';
import Home from './pages/Home';
import Menus from './pages/Menus';
import About from './pages/About';
import Admin from './pages/Admin';
import Login from './pages/User/Login';
import Register from './pages/User/Register';
import SubRoutes from './utils/SubRoutes'

const RouteConfig = [
  {
    path: '/',
    component: IndexPage,
    routes: [
      {
        path: '/home',
        component: Home,
        redirect: true
      },
      {
        path: '/menus',
        component: Menus,
        redirect: true,
      },
      {
        path: '/admin',
        component: Admin,
        redirect: true,
      },
      {
        path: '/about',
        component: About,
        redirect: true
      },
      {
        path: '/login',
        component: Login,
        redirect: true
      },
      {
        path: '/register',
        component: Register,
        redirect: true
      }
    ]
  }
];


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {/* <Route path="/" component={IndexPage} /> */}
        {RouteConfig.map((router, i) => (
          // 调用路由组件
          <SubRoutes key={i}  {...router} />
        ))} 
      </Switch>
    </Router>
  );
}

export default RouterConfig;
