import { Outlet } from 'react-router-dom'
import AppTitle from './AppTitle'
import Navi from "./Navi"

function Layout() {
  return (
    <div className="flex flex-col place-items-center  min-h-screen">
        <AppTitle subtitle="Your Box Office mate" title="BOXO" />
        <Navi/>
        <Outlet/>
        

        
    </div>
  )
}

export default Layout