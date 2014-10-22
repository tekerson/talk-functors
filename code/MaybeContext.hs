handDamage :: Maybe Int
handDamage = Nothing

modifiers :: Int -> Int
modifiers = (* 2) . (+ 1)

result :: Maybe Int
result = fmap modifiers handDamage
