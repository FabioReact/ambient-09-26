import { useAppSelector } from "@/redux/hooks"
import { NavLink, type NavLinkRenderProps } from "react-router"

enum LinkVisibility {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
  NOT_AUTHENTICATED = 'NOT_AUTHENTICATED',
}

const getActiveClassNames = ({ isActive }: NavLinkRenderProps) => {
  let classnames = 'rounded-lg px-3 py-2 text-sm font-medium transition-colors'
  if (isActive) classnames += ' text-blue-500 shadow-sm'
  return classnames
}

const links = [
  { to: "/", label: "Home", visibility: LinkVisibility.PUBLIC },
  { to: "/heroes", label: "Heroes", visibility: LinkVisibility.PUBLIC },
  { to: "/search", label: "Search", visibility: LinkVisibility.PUBLIC },
  { to: "/login", label: "Login", visibility: LinkVisibility.NOT_AUTHENTICATED },
  { to: "/register", label: "Register", visibility: LinkVisibility.NOT_AUTHENTICATED },
  { to: "/battle", label: "Battle", visibility: LinkVisibility.PUBLIC },
  { to: "/profile", label: "Profile", visibility: LinkVisibility.PRIVATE },
  { to: "/exercices", label: "Exercices", visibility: LinkVisibility.PRIVATE },
]

const Navbar = () => {
  const connected = useAppSelector((state) => state.auth.connected)
  return (
    <nav className='mx-auto flex min-h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8'>
        {links.filter(link => {
          if (link.visibility === LinkVisibility.PUBLIC) return true
          if (link.visibility === LinkVisibility.PRIVATE && connected) return true
          if (link.visibility === LinkVisibility.NOT_AUTHENTICATED && !connected) return true
          return false
        }).map((link) => (
          <NavLink key={link.to} className={getActiveClassNames} to={link.to}>
            {link.label}
          </NavLink>
        ))}
    </nav>
  )
}

export default Navbar