export const enum ToastType {
  Error,
  Info,
  Success
}

export const ToastMessage: Record<ToastType, Record<string, string>> = {
  [ToastType.Error]: {
    Test1: 'test1'
  },
  [ToastType.Info]: {
    Test2: 'test2'
  },
  [ToastType.Success]: {
    Test3: 'test3'
  }
}

export default class Toast<T extends ToastType> {
  public type: T
  public message: keyof typeof ToastMessage[T]
  public count: number = 1
  public timeout: ReturnType<typeof setTimeout> | undefined

  constructor (type: T, message: keyof typeof ToastMessage[T]) {
    this.type = type
    this.message = message
  }
}
