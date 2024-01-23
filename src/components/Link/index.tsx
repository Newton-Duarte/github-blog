import { PropsWithChildren } from 'react'
import { LinkProps, NavLink } from 'react-router-dom'

export function Link({ to, children }: PropsWithChildren & LinkProps) {
  return (
    <NavLink to={to} className="link">
      {children}
    </NavLink>
  )
}
