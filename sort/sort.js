// using built-in .sort() method

// NUMBER
// ascending
[4, 10, 70, 45, 3, 12, 25].sort((a, b) => a - b);

// descending
[4, 10, 70, 45, 3, 12, 25].sort((a, b) => b - a);

// STRING LENGTH
// ascending
['one', 'two', 'three', 'four', 'eleven'].sort((a, b) => a.length - b.length);

// descending
['one', 'two', 'three', 'four', 'eleven'].sort((a, b) => b.length - a.length);