<?php

// The function should return the sum of all carried digits.
function carry($digits)
{
    $count = 0;
    if(count($digits) > 1) {
        list($num0, $num1) = $digits;
        $len = strlen($num0);

        for ($i = 1; $i <= $len; $i++) {
            $digit0 = (int)substr($num0, $i * -1, 1);
            $digit1 = (int)substr($num1, $i * -1, 1);

            if ($digit0 + $digit1 >= 10) {
                $count++;
            }
        }
    }
    return $count;
}

echo carry([123, 456]); // 0
echo carry([555, 555]); // 3
echo carry([123, 594]); // 1
