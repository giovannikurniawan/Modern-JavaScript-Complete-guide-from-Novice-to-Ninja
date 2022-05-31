//template string
const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

// concatenation way

// let result =
//   'the blog called ' + title + ' by ' + author + ' has ' + likes + ' Likes';

// console.log(result);

// template string way

let result = `the blog called ${title} by ${author} has ${likes} likes`;

console.log(result);

// creating html template

let html = `
<h1>${title}</h1>
<p>By ${author}</p>
<span>this book has ${likes} likes</span>
`;

console.log(html);

