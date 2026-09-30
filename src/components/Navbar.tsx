import { NavLink, type NavLinkRenderProps } from "react-router"

const getActiveClassNames = ({ isActive }: NavLinkRenderProps) => {
  let classnames = 'rounded-lg px-3 py-2 text-sm font-medium transition-colors'
  if (isActive) classnames += ' text-blue-500 shadow-sm'
  return classnames
}

const links = [
  { to: "/", label: "Home" },
  { to: "/heroes", label: "Heroes" },
  { to: "/search", label: "Search" },
  { to: "/register", label: "Register" },
  { to: "/profile", label: "Profile" },
  { to: "/exercices", label: "Exercices" },
]

const Navbar = () => {
  return (
    <nav className='mx-auto flex min-h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8'>
        {links.map((link) => (
          <NavLink key={link.to} className={getActiveClassNames} to={link.to}>
            {link.label}
          </NavLink>
        ))}
    </nav>
  )
}

export default Navbar