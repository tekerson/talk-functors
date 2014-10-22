# Relevance?

## Mapping Function

```haskell
fmap :: (a -> b) -> f a -> f b
```

>  - `a :: *`
>  - `b :: *`
>  - `f :: * -> *`

## Great!

Now we can write a generic mapping function!

. . .

```haskell
-- Our super generic mapping function!
fmap :: (a -> b) -> f a -> f b
fmap h fa = ???
```

. . .

Not so fast...

Each of the implementation of `fmap` depend on the specific instance of `f`

# The Solution

## Functor

A Typeclass.

. . .

```haskell
class Functor f where
  fmap :: (a -> b) -> f a -> f b
```

. . .

Now, instance this class for any Type where it makes sense to have "mapping"

## Notice

```haskell
f :: * -> *
```

Due to its usage in `fmap`'s Type signature

```haskell
class Functor f where
  fmap :: (a -> b) -> f a -> f b
```

. . .

Trying to implement Functor for a Concrete Type (such as `Functor Int`) will cause GHC to error:

    Kind mis-match
    The first argument of `Functor' should have kind `* -> *',
    but `Int' has kind `*'
    In the instance declaration for `Functor Int'

## Examples

. . .

Maybe

```haskell
instance Functor Maybe where
  fmap _ Nothing = Nothing
  fmap h (Just a) = Just (h a)
```

. . .

List

```haskell
instance Functor [] where
  fmap _ [] = []
  fmap h (x:xs) = h x : fmap h xs
```

. . .

or...

```haskell
  instance Functor [] where
    fmap = map
```

# More Examples

## IO

Since `IO :: * -> *` it can be a Functor

. . .

```haskell
  instance Functor IO where
    fmap f ioa = ioa >>= (\a -> return (f a))
```

## Either

```haskell
data Either a b = Left a | Right b
```

. . .

```haskell
Either :: * -> * -> *
```

So, it can't be a functor?

. . .

```haskell
Either a :: * -> *
```

. . .

```haskell
instance Functor (Either a) where
  fmap h (Right x) = Right (h x)
  fmap _ (Left x) = Left x
```

## (->)

Wat?

. . .

```haskell
(->) :: * -> * -> *
```

. . .

```haskell
(->) e :: * -> *
```

. . .

What would the implementation be?

. . .

## Follow the Types

. . .

```haskell
fmap :: (a -> b) -> f a -> f b
```

. . .

Swap `f` for `(->) e`

```haskell
fmap :: (a -> b) -> (->) e a -> (->) e b
```

. . .

or, infix...

```haskell
fmap :: (a -> b) -> (e -> a) -> (e -> b)
```

. . .

Familiar?

. . .

```haskell
fmap :: (b -> c) -> (a -> b) -> (a -> c)
```

Now?

. . .

```haskell
instance Functor ((->) e) where
  fmap = (.)
```

