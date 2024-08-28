import React, { type ReactNode } from 'react'

function PanelContainer ({ children }: { children: ReactNode }): React.ReactElement {
  return (
    <div>{children}</div>
  )
}

export default PanelContainer
