type TrimLeft<S extends string> = S extends `${infer First}${infer Rest}` ? First extends (' ' | '\n' | '\t') ? TrimLeft<Rest> : S : S;
