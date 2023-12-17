<?php

//todo: task2
// Дано целое число.
// Сосчитать и напечатать, сколько в его записи нулей, единиц, двоек и т.д.

// Например:
// Ввод: 133244459
// Вывод:
// 0 - 0
// 1 – 1
// 2 – 1
// 3 – 2
// 4 – 3
// 5 – 1
// 6 - 0
// и т.д

$strInteger = '133244459';
$arrInteger = str_split ($strInteger);

$zero = 0;
$one = 0;
$two = 0;
$three = 0;
$four = 0;
$five = 0;
$six = 0;
$seven = 0;
$eight = 0;
$nine = 0;

foreach ($arrInteger as $elem) {
    switch ($elem) {
        case 0: $zero += 1;
        break;
        case 1: $one += 1;
        break;
        case 2: $two += 1;
        break;
        case 3: $three += 1;
        break;
        case 4: $four += 1;
        break;
        case 5: $five += 1;
        break;
        case 6: $six += 1;
        break;
        case 7: $seven += 1;
        break;
        case 8: $eight += 1;
        break;
        case 9: $nine += 1;
        break;
    }
}
echo "0 - " . $zero . "\n";
echo "1 - " . $one . "\n";
echo "2 - " . $two . "\n";
echo "3 - " . $three . "\n";
echo "4 - " . $four . "\n";
echo "5 - " . $five . "\n";
echo "6 - " . $six . "\n";
echo "7 - " . $seven . "\n";
echo "8 - " . $eight . "\n";
echo "9 - " . $nine . "\n";