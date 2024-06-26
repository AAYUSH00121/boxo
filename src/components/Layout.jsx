import React from 'react'
import { Outlet } from 'react-router-dom'
import AppTitle from './AppTitle'
import Navi from "./Navi"

function Layout() {
  return (
    <div>
        <Navi/>
        <AppTitle subtitle="Hey check out boxo" title="BOXO"/>
        <Outlet/>
    </div>
  )
}

export default Layout