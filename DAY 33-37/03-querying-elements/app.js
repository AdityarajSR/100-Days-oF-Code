// document.body.children[1].children[0].href = 'https://google.com';

// console.dir(document);
// alert();
// window.alert();

let anchorElement = document.getElementById('external-link');           // Getting access to an element by this fn and then use some fn for it
anchorElement.href = 'https://google.com';                               //  This is the alternative for Step by Step DOM

anchorElement = document.querySelector('p a'); // p a { color: red; }      // Only for the first element
anchorElement.href = 'https://academind.com';

anchorElement = document.querySelectorAll('p a'); // p a { color: red; }     // For all elements 
anchorElement.href = 'https://academind.com';                                  // {For anchor tag inside the paragraph}


