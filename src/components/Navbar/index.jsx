"use client"
import React, { useEffect, useState } from 'react'
import style from "./Navbar.module.scss"
import { useRouter, usePathname  } from 'next/navigation'


const Navbar = () => {
  const [show, setShow] = useState(false)
  const pathname = usePathname()
  const router = useRouter();
  useEffect(()=>{
    if(pathname === "/dashboard"){
      setShow(true)
    }
  },[pathname, router, show])
  return (
    <div className={style.navbar}>
        <div className={style.navbar_container}>
          <div className={style.logo}>CMS</div>
          <div className={style.user_menu}>
            <h1>Nadir Hossain</h1>
            <button onClick={() => router.push("/")} className={style.home}>Home</button>

            <button onClick={() => router.push("/dashboard")} className={style.dashboard}>Dashboard</button>
            <button className={style.logout}>Logout</button>
          </div>
        </div>
    </div>
  )
}

export default Navbar