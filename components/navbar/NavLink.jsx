import Link from 'next/link'

function NavLink({ navLink, isActive }) {
  const [title, href] = navLink

  return (
    <Link className={`nav-link ${isActive && 'active'}`} href={href}>
      {title}
    </Link>
  )
}

export default NavLink
