const section = document.createElement('section');
const heading = document.createElement('h2');
heading.innerText = 'Section Heading';
const paragraph = document.createElement('p');
paragraph.innerText = 'This is a paragraph in the section.';
section.appendChild(heading);
section.appendChild(paragraph);
document.body.appendChild(section);
