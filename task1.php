<?php

// Code a function that returns the number all unique case-insensitive characters that occur >= $n times in a given string.
function getNumOfUniqueCharacters($str, $n)
{
    $result = [];
    $split = str_split($str);
    foreach ($split as $value) {
        $value = mb_strtolower($value);
        if(!array_key_exists($value, $result)) {
            $result[$value] = 1;
        } else {
            $result[$value] = ++$result[$value];
        }
    }
    $result = array_filter($result, function ($num) use ($n) {
        return $num >= $n;
    });
    return count($result);
}

echo getNumOfUniqueCharacters('A1B2C3', 2); // 0
echo getNumOfUniqueCharacters('A1a1C1', 2); // 2, because A and 1 both occur 2 or more times.
echo getNumOfUniqueCharacters('Alabama', 3); // 1
