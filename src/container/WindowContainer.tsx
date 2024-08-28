import React, { type ReactNode } from 'react'
import './WindowContainer.css'

function WindowContainer ({ children }: { children: ReactNode }): React.ReactElement {
  return (
      <div className="window-background">
        <div className="window">{children}</div>
      </div>
  )
}

export default WindowContainer
