// Create an url object based on a URL string
let url = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
console.log(url);
console.log(url.hostname); // Get hostname

url = new URL('http://www.pgm.gent/students?class=1pgm#a');
url.protocol = 'https';
url.pathname = 'lecturers';
console.log(url);

url = new URL('https://www.google.com/search?safe=off&sxsrf=ALeKk01KTg85TO3i5-n-qaO4M0hpvXGpbg%3A1606225239605&source=hp&ei=Vw29X_-5IZiCjLsPsc2-iAE&q=asperges&oq=asperges&gs_lcp=CgZwc3ktYWIQAzIICC4QsQMQkwIyBQgAELEDMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgjECc6BAguEEM6AgguOgQIABBDOgcILhCxAxBDOgUILhCxAzoHCAAQsQMQQ1D2gwNYpYwDYMONA2gAcAB4AIABWIgB6QSSAQE4mAEAoAEBqgEHZ3dzLXdpeg&sclient=psy-ab&ved=0ahUKEwi_wdSmp5vtAhUYAWMBHbGmDxEQ4dUDCAY&uact=5');
// https://duckduckgo.com/?q=asperges&t=h_&ia=web
console.log(url.searchParams);
console.log(url.searchParams.get('q'));

// Make search parameters from scratch
let searchParams = new URLSearchParams();
searchParams.append('sort', 'price');
searchParams.append('rating', 'all');
console.log(searchParams.toString());
searchParams.set('sort', 'rank');
searchParams.set('rating', '4');
console.log(searchParams.toString());

const finalURL = new URL('http://www.example.com');
finalURL.protocol = 'https';
finalURL.hostname = '1pgm.pgm.gent';
finalURL.port = '8081';
finalURL.pathname = 'programming-2'
finalURL.search = new URLSearchParams('sort=dob&rating=credits');
console.log(finalURL.toString());
