// import $ from "jquery";
// import SumOfMultiple from './SumOfMultiple';

$('#myButton').on('click', function () {
    const $btn = $(this).button('loading');
    $('.sum').text(sumOfMultiple(1000));
    $btn.button('reset');
});

$('#check-even').on('click', function () {
    const $btn = $(this).button('loading');
    $('.even-answer').text(evenNumber());
    $btn.button('reset');
});

$('#reverse-string').on('click', function () {
    const $btn = $(this).button('loading');
    $('.reverse').text(reverseString());
    $btn.button('reset');
});

$('#check-palindrome').on('click', function () {
    const $btn = $(this).button('loading');
    $('.isPalindrome').text(isPalindrome());
    $btn.button('reset');
});

