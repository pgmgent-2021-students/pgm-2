let myURL = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
console.log(myURL);
console.log(myURL.hostname);

myURL = new URL('http://www.pgm.gent/students?class=1pgm#a');
myURL.protocol = 'https';
myURL.pathname = 'lecuturers/pgm';
console.log(myURL);

myURL = new URL(
  'https://www.google.be/search?source=hp&ei=iCqwX_ruOM29lwSSsp6IDw&q=pastinaak&oq=pastinaak&gs_lcp=CgZwc3ktYWIQAzIICC4QsQMQkwIyCAgAELEDEIMBMggIABCxAxCDATICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BQgAELEDOgUILhCxAzoICC4QsQMQgwE6AgguUM8UWJAiYKMkaABwAHgAgAFViAGoBZIBATmYAQCgAQGqAQdnd3Mtd2l6&sclient=psy-ab&ved=0ahUKEwj60p-o3YLtAhXN3oUKHRKZB_EQ4dUDCAs&uact=5'
);
console.log(myURL.searchParams);
console.log(myURL.searchParams.get('q'));
myURL.searchParams.get('minDate');
//myURL.searchParams.set('minDateSearchresult', getBestDate());
console.log(myURL.searchParams);

const mySearchParams = new URLSearchParams();
mySearchParams.append('sort', 'price');
mySearchParams.append('rating', 'best');
mySearchParams.set('sort', 'date');
console.log(mySearchParams.toString());
