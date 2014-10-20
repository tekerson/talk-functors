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

## Lists as Container

Lists represent a linear collection

```haskell
goblinsHealth :: [Int]
goblinsHealth = [8, 5, 6, 5]

aoeDamage :: Int -> Int
aoeDamage h = h - 2

applyAoe :: (Functor f) => f Int -> f Int
applyAoe = fmap aoeDamage

newHealth = applyAoe goblinsHealth
```

## Lists as Context

Lists represent non-determinism

```haskell
roll :: [Int]
roll = [1..20]

modifiers :: Int -> Int
modifiers = (* 2) . (+ 1)

applyModifiers :: (Functor f) => f Int -> f Int
applyModifiers = fmap modifiers

initiative = applyModifiers roll
```

## Maybe as Context

Maybe represents a possibly-missing context

```haskell
type WeaponDamage = Int

axe, hand :: Maybe WeaponDamage
axe = Just 10
hand = Nothing

modifiers = (* 2) . (+ 1)
applyModifiers = fmap modifiers

axeDamage  = applyModifiers axe   -- Just 22
handDamage = applyModifiers hand  -- Nothing
```

