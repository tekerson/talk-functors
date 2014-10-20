# Kinds

## What are they?

. . .

![`Kinds` are the "type" of `Types`](resources/xzibit-fixed.jpg)

## Values have Types

>  - `"Hello" :: String`
>  - `5 :: Int`
>  - `Just 10 :: Maybe Int`

## Types have Kinds

>  - `String :: *`
>  - `Int :: *`
>  - `Maybe Int :: *`

## They're all the same?

. . .

The Kind `*` represents a Concrete Type.

. . .

Any Type you can have a Value of, has Kind `*`

. . .

or...

. . .

Only Types of Kind `*` can have a Value

## Non-Concrete Types

. . .

We've seen the `List` (aka. `[]`), `Tree` and `Maybe` Types.

What are their Kinds?

>  - `List :: * -> *`
>  - `Maybe :: * -> *`
>  - `Tree :: * -> *`

. . .

### Type Constructors

Applying `Type Constructors` to `Types` is analogous to applying `Functions` to `Values`

## Apply Them

> - `List Int :: *`
> - `Maybe String :: *`
> - `Tree ExprT :: *`

## Multiple Parameters?

. . .

### Yep! (with the usual hand waving)

> - `Map :: * -> * -> *`
>     - Takes "Key" Type and "Value" Type
> - `(->) :: * -> * -> *`
>     - Takes "Parameter" Type and "Return" Type

## Apply Them

> - `Map Int String :: *`
> - `(->) Int String :: *`
> - `Int -> String :: *`

## But wait!

. . .

Functions can take functions as arguments

. . .

and...

Type Constructors are analogous to functions.

. . .

so...

Can we have Type Constructors that take Type Constructors as arguments?

## What would the Kind be?

. . .

`Funky :: (* -> *) -> * -> *`

## Apply It

`Funky :: (* -> *) -> * -> *`

. . .

`Funky Maybe :: * -> *`

. . .

`Funky Maybe Int :: *`

