import Image from 'next/image'
import Auth from './Auth'
import MenuNavbar from './MenuNavbar'
import ToggleMenu from './ToggleMenu'

export default function Navbar() {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Image src="/icon/logo.svg" width={60} height={60} />
          </a>
          <ToggleMenu />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              <MenuNavbar title="Home" active href="/" />
              <MenuNavbar title="Games" href="/" />
              <MenuNavbar title="Rewards" href="/" />
              <MenuNavbar title="Discover" href="/" />
              <MenuNavbar title="Global Rank" href="/" />
              <Auth isLogin/>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  )
}
