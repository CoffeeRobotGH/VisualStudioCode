const navegacion = document.querySelector('.navegacion');

console.log(navegacion);
console.log(navegacion.childNodes); // Los espacions en blanco son considerados elementos
console.log(navegacion.children); // Los espacions en blanco NO son considerados elementos


console.log(navegacion.children[0].nodeName);
console.log(navegacion.children[0].nodeType);

console.log(navegacion.firstElementChild)
console.log(navegacion.lastElementChild)



const card = document.querySelector('.card');

console.log(card.children[1]);
console.log(card.children[1].children);

card.children[1].children[1].textContent = 'Nuevo heading desde Traversing the DOM'
console.log(card.children[1].children[1].textContent);

card.children[0].src = 'img/hacer3.jpg'
console.log(card.children[0]);


// Traversing the Hijo al Padre

console.log(card.parentNode);
console.log(card.parentElement.parentElement.parentElement);

// Traversing the Siblings

console.log(card);
console.log(card.nextElementSibling.nextElementSibling)

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling);