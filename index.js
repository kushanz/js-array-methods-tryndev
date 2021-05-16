// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h3>JS Array methods</h3>`;

// array sample
const products = [
  { name: 'Iron', price: 530 },
  { name: 'Phone', price: 770 },
  { name: 'Laptop', price: 2300 },
  { name: 'Toy', price: 250 },
  { name: 'Pen', price: 40 },
  { name: 'Book', price: 120 },
  { name: 'Table', price: 900 },
  { name: 'Shoes', price: 650 }
];

// array filter method
const filteredProduct = products.filter(item => {
  return item.price < 500;
});

console.log(filteredProduct);

// map array method
const productNames = products.map(item => {
  return item.price;
});
console.log(productNames);
