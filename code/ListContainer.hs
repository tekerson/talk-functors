goblins :: [Int]
goblins = [8, 5, 6, 5]

attack :: Int -> Int
attack hp = hp - 2

result :: [Int]
result = fmap attack goblins

main :: IO ()
main = print result

