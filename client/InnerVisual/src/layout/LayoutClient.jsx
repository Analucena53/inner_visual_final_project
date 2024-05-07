import { Outlet } from 'react-router-dom'
import NavbarCustom from '../components/navbarCustom/NavbarCustom'
import FooterCustom from '../components/footerCustom/FooterCustom'

const LayoutClient = () => {
  return (
    <>
    <NavbarCustom />
    <Outlet />
    <FooterCustom />
    </>
  )
}

export default LayoutClient
