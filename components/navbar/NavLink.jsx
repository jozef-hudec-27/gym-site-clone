import Link from 'next/link'

function NavLink({ navLink }) {
  const [title, href] = navLink

  return (
    <Link className={`nav-link ${title === 'Home' && 'active'}`} href={href}>
      {title}
    </Link>
  )
}

export default NavLink
