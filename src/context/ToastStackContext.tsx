import React, { createContext, useReducer } from 'react'
import { type ToastType } from '../model/Toast'

export const enum ToastStackActionType {
  Toast
}

export type ToastStackAction =
  | { type: ToastStackActionType.Toast, payload: { type: ToastType, message: string } }

export function toastStackReducer (state: { toastStack: ToastStack }, action: ToastStackAction): {
  toastStack: ToastStack
} {
  switch (action.type) {
    case ToastStackActionType.Toast:
      // toastStack.()
      return { toastStack: state.toastStack }
    default:
      return state
  }
}

export const ToastStackContext = createContext<[{
  toastStack: ToastStack
}, dispatch: React.Dispatch<ToastStackAction>]>([{ toastStack: new ToastStack() }, () => undefined])

export function ToastStackContextProvider ({ children }: { children: React.ReactNode }): React.ReactElement {
  const [{ toastStack }, dispatch] = useReducer(toastStackReducer, { toastStack: new ToastStack() })

  return (
    <ToastStackContext.Provider value={[{ toastStack }, dispatch]}>{children}</ToastStackContext.Provider>
  )
}
