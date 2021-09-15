var parser = require('tld-extract');

console.log( parser("http://www.google.com") );
console.log( parser("http://google.co.uk") );
/**
* >> { tld: 'com', domain: 'google.com', sub: 'www' }
* >> { tld: 'co.uk', domain: 'google.co.uk', sub: '' }
*/
