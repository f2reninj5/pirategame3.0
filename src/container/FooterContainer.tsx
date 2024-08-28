import React from 'react'
import './BannerContainer.css'

function FooterContainer ({ children }: { children: React.ReactNode }): React.ReactElement {
  return (
    <footer className="banner">{children}</footer>
  )
}

export default FooterContainer
