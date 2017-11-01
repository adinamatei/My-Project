// import $ from "jquery";


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

$('#check-longest').on('click', function () {
    const $btn = $(this).button('loading');
    $('.longest').text(longestWord());
    $btn.button('reset');
});

$('#title-case').on('click', function () {
    const $btn = $(this).button('loading');
    $('.titleCase').text(titleCase());
    $btn.button('reset');
});

$('#factorialize').on('click', function () {
    const $btn = $(this).button('loading');
    $('.factorial').text(factorialize());
    $btn.button('reset');
});

$('#maximum').on('click', function () {
    const $btn = $(this).button('loading');
    $('.max').text(findMax());
    $btn.button('reset');
});
$('#minimum').on('click', function () {
    const $btn = $(this).button('loading');
    $('.min').text(findMin());
    $btn.button('reset');
});


$('#repeat').on('click', function () {
    const $btn = $(this).button('loading');
    $('.repeat-string').text(repeatString());
    $btn.button('reset');
});

