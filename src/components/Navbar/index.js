import React from 'react'
import style from "./Navbar.module.scss"

const Navbar = () => {
  return (
    <div className={style.navbar}>
        <div className={style.navbar_container}>
          <div className={style.logo}>CMS</div>
          <div className={style.user_menu}>
            <h1>Nadir Hossain</h1>
            <button className={style.dashboard}>Dashboard</button>
            <button className={style.logout}>Logout</button>
          </div>
        </div>
    </div>
  )
}

export default Navbar