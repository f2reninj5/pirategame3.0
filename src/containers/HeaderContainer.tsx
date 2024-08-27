import React from 'react'
import './BannerContainer.css'

function HeaderContainer ({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <header className="banner">{children}</header>
  )
}

export default HeaderContainer
