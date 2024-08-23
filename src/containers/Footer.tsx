import React from 'react'
import './Banner.css'

function Footer ({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <footer className="banner">{children}</footer>
  )
}

export default Footer
