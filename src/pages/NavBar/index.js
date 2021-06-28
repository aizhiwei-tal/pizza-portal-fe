import React, { Component } from 'react'
import styles from './index.scss';
import { Menu } from 'antd';
import { Link } from 'dva/router'

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: []
    }
  }


    /**
   * 当页面刷新时，组件会重新加载，会执行 componentDidMount(cdm) 钩子函数
   * 为解决刷新页面菜单与路由不同步问题，解决方法则放在 cdm 钩子函数里执行
   */
  componentDidMount() {
    this.handleSetSelectedKeys(this.props.location.pathname);
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    const { pathname } = this.props.location;
    if (nextProps.location.pathname !== pathname) {
      // 当路由发生改变时, 改变当前菜单选中key值
      this.handleSetSelectedKeys(nextProps.location.pathname);
    }
  }

  handleSetSelectedKeys(pathname) {
    // 根据 /admin 斜杠把路由地址分割成一个数组
    const temp = pathname.split('/')
    //  如果数组长度小于2
    const key = temp && temp.length < 2 ? 'home' : temp[1]
    this.setState({
      selectedKeys: [key]
    })
  }
  render() {
      return (
    <nav className={styles.header}>
      <a href="www.baidu.com" className={styles.logo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="d-block mx-auto"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
            <line x1="9.69" y1="8" x2="21.17" y2="8" />
            <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
            <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
            <line x1="14.31" y1="16" x2="2.83" y2="16" />
            <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
          </svg>
      </a>
      <Menu
        className={styles["menu-left" ]}
        mode="horizontal"
        defaultSelectedKeys={['home']}
        selectedKeys={this.state.selectedKeys}>
          <Menu.Item key={"home"}><Link to="/home">主页</Link></Menu.Item>
          <Menu.Item key={"menus"}><Link to="/menus">菜单</Link></Menu.Item>
          <Menu.Item key={"admin"}><Link to="/admin">管理</Link></Menu.Item>
          <Menu.Item key={"about"}><Link to="/about">关于我们</Link></Menu.Item>
          <Menu.Item className={styles.login} key={"login"}><Link to="/login">登录</Link></Menu.Item>
          <Menu.Item className={styles.register} key={"register"}><Link to="/register">注册</Link></Menu.Item>
      </Menu>
    </nav>
  )
  }

}
