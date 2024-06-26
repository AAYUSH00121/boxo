import { Outlet } from 'react-router-dom'
import AppTitle from './AppTitle'
import Navi from "./Navi"

function Layout() {
  return (
    <div>
        <AppTitle subtitle="Hey check out boxo" title="BOXO"/>
        <Navi/>
        <Outlet/>
    </div>
  )
}

export default Layout