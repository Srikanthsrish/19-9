const div = document.createElement('div');
const img = document.createElement('img');
img.src = 'image-source-url';  // Replace with actual image URL
const caption = document.createElement('p');
caption.innerText = 'This is a caption';
div.appendChild(img);
div.appendChild(caption);
document.body.appendChild(div);
