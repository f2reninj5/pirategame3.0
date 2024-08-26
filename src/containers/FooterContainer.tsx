import React from 'react'
import './Banner.css'

function FooterContainer ({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <footer className="banner">{children}</footer>
  )
}

export default FooterContainer
