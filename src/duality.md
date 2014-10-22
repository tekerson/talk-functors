# Duality of Functor

## Container & Context

## Container

```haskell
fmap :: (a -> b) -> f a -> f b
```

## Context

```haskell
fmap :: (a -> b) -> (f a -> f b)
```

## Demo

## Lists as Container

Lists represent a linear collection

. . .

```haskell
goblins :: [Int]
goblins = [8, 5, 6, 5]
```

. . .

``` haskell
attack :: Int -> Int
attack hp = hp - 2
```

. . .

``` haskell
result :: [Int]
result = fmap attack goblins
```

. . .

```haskell
-- [6, 3, 4, 3]
```

## Lists as Context

Lists represent a non-deterministic value

. . .

```haskell
roll :: [Int]
roll = [1..20]
```

. . .

```haskell
modifiers :: Int -> Int
modifiers
  = (* 2)
  . (+ 1)
```

. . .

```haskell
result :: [Int]
result = fmap modifiers roll
```

. . .

```haskell
-- [4, 6, 8, 10 ... 40, 42]
```

## Maybe as Context

Maybe represents a context with possibly-missing value

. . .

```haskell
handDamage :: Maybe Int
handDamage = Nothing
```

. . .

```haskell
modifiers :: Int -> Int
modifiers = (* 2) . (+ 1)
```

. . .

```haskell
result :: Maybe Int
result = fmap modifiers handDamage
```

. . .

```haskell
-- Nothing
```

## But

Not all Functors fit both Context and Container intuition.

Some are more intuitive one way.

Some don't fit either intuition.

. . .

The instance is the truth.
