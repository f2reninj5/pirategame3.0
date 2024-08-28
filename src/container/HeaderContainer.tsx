import React from 'react'
import './BannerContainer.css'

function HeaderContainer ({ children }: { children: React.ReactNode }): React.ReactElement {
  return (
    <header className="banner">{children}</header>
  )
}

export default HeaderContainer
