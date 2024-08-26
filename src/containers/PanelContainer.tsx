import React, { type ReactNode } from 'react'

function PanelContainer ({ children }: { children: ReactNode }): React.JSX.Element {
  return (
    <div>{children}</div>
  )
}

export default PanelContainer
