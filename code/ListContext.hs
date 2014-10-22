roll :: [Int]
roll = [1..20]

modifiers :: Int -> Int
modifiers
  = (* 2)
  . (+ 1)

result :: [Int]
result = fmap modifiers roll

main :: IO ()
main = print result
