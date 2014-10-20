# Relevance?

## Mapping Function

```haskell
fmap :: (a -> b) -> f a -> f b
```

>  - `a :: *`
>  - `b :: *`
>  - `f :: * -> *`

. . .

Inferred because it is being applied to argument of Kind `*`

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

Each of the mapping functions depend on the specific implementation of `f`

# The Solution

## Functor

A Typeclass.

. . .

```haskell
class Functor f where
  fmap f :: (a -> b) -> f a -> f b
```

. . .

Now, implement this class for any Type where it makes sense to have "mapping"

## Notice

```haskell
f :: * -> *
```

Due to its usage in `fmap`'s Type declaration

```haskell
class Functor f where
  fmap f :: (a -> b) -> f a -> f b
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
  fmap h (x:xs) = h x : fmap xs
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

. . .

or...

```haskell
instance Functor IO where
  fmap f ioa = ioa >>= (return . f)
```

## (->)

Wat?

. . .

We saw that

```haskell
(->) :: * -> * -> *
```

Which can't be a Functor.

. . .

But, if we partially apply it, we get

```haskell
(->) e :: * -> *
```

So, it is a candidate for Functor.

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

