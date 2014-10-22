# Motivation

## Mapping

Introduced concept of `map`

>  - `mapIntList :: (Int -> Int) -> List Int -> List Int`
>  - `mapList :: (a -> b) -> List a -> List b`
>  - `map :: (a -> b) -> [a] -> [b]`

## Other Mappings

You may remember me from such functions as...

> - `treeMap :: (a -> b) -> Tree a -> Tree b`
> - `maybeEval :: (ExprT -> Int) -> Maybe ExprT -> Maybe Int`
> - `maybeMap :: (a -> b) -> Maybe a -> Maybe b`

. . .

## The Pattern

Applying a function to the elements of a structure.

. . .

```haskell
fmap :: (a -> b) -> f a -> f b
```

. . .

(Note: `f`. This is a Type Variable, **not** a Type)

. . .

Wait... What? Can we do that?
