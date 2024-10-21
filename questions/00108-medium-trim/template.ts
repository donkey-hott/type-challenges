type Space = ' ' | '\t' | '\n'

type TrimLeft_<S extends string> = S extends `${Space}${infer Base}` ? TrimLeft_<Base> : S
type TrimRight_<S extends string> = S extends `${infer Base}${Space}` ? TrimRight_<Base> : S


type Trim<S extends string> = TrimLeft_<TrimRight_<S>>

