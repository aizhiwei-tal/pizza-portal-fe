import React from 'react'
import Styles from './index.scss'

export default function index() {
  return (
    <div className={Styles.home} >
      <div className={Styles.background}>
        <h1>欢迎大家</h1>
        <h1>这里有pizza</h1>
      </div>
    </div>
  )
}
