declare function PromiseAll<T extends Array<unknown>>(values: readonly [...T]): Promise<{
  [key in keyof T]: Awaited<T[key]>
}>