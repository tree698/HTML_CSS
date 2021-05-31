'use:strict';

// Q1. make a string out of an array
{
    const fruits = ['apple', 'banna', 'orange'];
    const result = fruits.join(', and ');
    console.log(result);
}

// Q2. make an array out of a string
{
    const fruits = '🍊, 🥝, 🍌, 🍒';
    const result = fruits.split(',');
    console.log(result);
}

