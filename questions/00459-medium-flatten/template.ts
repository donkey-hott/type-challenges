type Flatten<T extends unknown[]> =
  T extends [infer First, ...infer Rest]
  ? [
    ...(
      First extends unknown[]
      ? Flatten<First>
      : [First]
    ),
    ...Flatten<Rest>
  ]
  : []