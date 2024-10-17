declare function PromiseAll<T extends Array<unknown>>(values: readonly [...T]): {
  [key in keyof T]: Awaited<T[key]>
}