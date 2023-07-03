import Image from 'next/image'
import Link from 'next/link'
import { BsFacebook, BsTwitter, BsTiktok, BsInstagram } from 'react-icons/bs'
import { AiFillShopping } from 'react-icons/ai'
import NavLink from './NavLink'

function Navbar() {
  const navLinks = [
    ['Home', '/'],
    ['About', '/'],
    ['Hours', '/'],
    ['Store', '/'],
    ['Trainers', '/'],
    ['Testimonials', '/'],
  ]

  return (
    <nav className="flex flex-col xl:flex-row justify-center items-center gap-5 py-4 px-2">
      <Link href="/">
        <Image src="/assets/images/logo.webp" alt="Gym logo" height={0} width={250} />
      </Link>

      {/* SOCIALS */}
      <div className="flex gap-5">
        <BsFacebook className="text-xl" aria-label="Facebook" />
        <BsTwitter className="text-xl" aria-label="Twitter" />
        <BsTiktok className="text-xl" aria-label="TikTok" />
        <BsInstagram className="text-xl" aria-label="Instagram" />
      </div>

      <div className="flex gap-px justify-center items-center flex-wrap">
        {/* LINKS */}
        <div className="bg-gray-200 hidden xl:block">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        {navLinks.map((navLink, i) => {
          return <NavLink key={i} navLink={navLink} />
        })}

        {/* DROPDOWNS */}
        <div className="nav-dropdown-btn" tabIndex={0}>
          Member portal
          <div className="dropdown">
            <Link className="drop-link" href="/">
              Login
            </Link>
            <Link className="drop-link" href="/">
              Membership cancellation
            </Link>
            <Link className="drop-link" href="/">
              Membership freeze
            </Link>
          </div>
        </div>

        <div className="nav-dropdown-btn" tabIndex={0}>
          More
          <div className="dropdown">
            <Link className="drop-link" href="/">
              Contact
            </Link>
            <Link className="drop-link" href="/">
              Gift card
            </Link>
          </div>
        </div>

        {/* SHOPPING CART */}
        <Link href="/" className="hidden xl:flex justify-center items-center text-5xl ml-4 text-blue-500">
          <AiFillShopping aria-label="Shopping bag" />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar