import React from 'react'
import './Banner.css'

function Header ({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <header className="banner">{children}</header>
  )
}

export default Header
