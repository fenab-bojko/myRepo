<?php
// todo: task1
// Задан целочисленный массив
$arr = [2, 3, 12, 10, 0, -1, 3];
// Найдите и напечатайте наименьшее число из массива.
// При решении задачи нельзя использовать стандарные функции нахождения min
// напишите свою программу.

function calcMinInt ($data) {
    if (!is_array($data)) return $minInt = 'Не массив!';
    $minInt = null;
    if ($minInt) $minInt = $data [0];
    foreach ($data as $elem) {
        if (!$minInt) $minInt = $elem;
        $minInt = ($elem < $minInt) ? $elem : $minInt;
    }
    $result = "Минимальное число: " . $minInt;
    return $result;
}

echo calcMinInt ($arr);
