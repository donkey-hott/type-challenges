type StringToTuple<S extends string> =
  S extends ''
  ? []
  : S extends `${infer First}${infer Rest}`
  ? [First, ...StringToTuple<Rest>]
  : never

type LengthOfString<S extends string> = StringToTuple<S>['length']
