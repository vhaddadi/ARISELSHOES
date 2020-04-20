/** Add any JavaScript you need to this file.

Vahideh Haddadi

Student number:149955163

 */
/*var products = {
  all: window.productData
};*/ var productData = [
  {
    id: 1,
    category: 'men',
    imgSrc: './images/1.jpg',
    price: '$280',
    name: 'Tbriz',
    productDes: ''
  },
  { id: 2, category: 'men', imgSrc: './images/2.jpg', price: '$320', name: 'Kim', productDes: '' },
  {
    id: 3,
    category: 'men',
    imgSrc: './images/3.jpg',
    price: '$380',
    name: 'Delsi',
    productDes: ''
  },
  {
    id: 4,
    category: 'men',
    imgSrc: './images/4.jpg',
    price: '$450',
    name: 'Shaha',
    productDes: ''
  },
  {
    id: 5,
    category: 'men',
    imgSrc: './images/5.jpg',
    price: '$180',
    name: 'Kadin',
    productDes: ''
  },
  {
    id: 6,
    category: 'men',
    imgSrc: './images/6.jpg',
    price: '$360',
    name: 'Rtabriz',
    productDes: ''
  },
  {
    id: 7,
    category: 'men',
    imgSrc: './images/7.jpg',
    price: '$310',
    name: 'Dorin',
    productDes: ''
  },
  {
    id: 8,
    category: 'women',
    imgSrc: './images/8.jpg',
    price: '$280',
    name: 'Gelar',
    productDes: ''
  },
  {
    id: 9,
    category: 'women',
    imgSrc: './images/9.jpg',
    price: '$280',
    name: 'Tbriz',
    productDes: ''
  },
  {
    id: 10,
    category: 'women',
    imgSrc: './images/10.jpg',
    price: '$250',
    name: 'Rtbriz',
    productDes: ''
  },
  {
    id: 11,
    category: 'women',
    imgSrc: './images/11.jpg',
    price: '$440',
    name: 'Dorna',
    productDes: ''
  },
  {
    id: 12,
    category: 'women',
    imgSrc: './images/12.jpg',
    price: '$580',
    name: 'Aros',
    productDes: ''
  },
  {
    id: 13,
    category: 'women',
    imgSrc: './images/13.jpg',
    price: '$490',
    name: 'Kazal',
    productDes: ''
  },
  {
    id: 14,
    category: 'women',
    imgSrc: './images/14.jpg',
    price: '520$',
    name: 'Kanary',
    productDes: ''
  }
];

/* function byCategory(category) {
  return products.filter(product => product.category === category);
}*/

function cat_Product(category) {
  return productData.filter(product => product.category === category);
}

function buildMenuItem(product) {
  let MenuItem = document.createElement('div');
  MenuItem.className = 'product_clo ';

  let pic = document.createElement('img');
  pic.src = `./images/${product.id}.jpg`;
  let h2 = document.createElement('h4');
  h2.innerHTML = product.name;
  let span1 = document.createElement('h6');
  span1.innerHTML = `Price = ${product.price}`;
  MenuItem.appendChild(pic);
  MenuItem.appendChild(h2);
  MenuItem.appendChild(span1);

  return MenuItem;
}

function buildPage() {
  //let main = document.querySelector('#page');
  var main = document.querySelector('#men');
  main.className = 'row hidden ';
  let mProduct = cat_Product('men');

  for (var i = 0; i < mProduct.length; i++) {
    main.appendChild(buildMenuItem(mProduct[i]));
  }
  var wMain = document.querySelector('#women');
  wMain.className = 'row hidden';
  let wProduct = cat_Product('women');
  for (i = 0; i < wProduct.length; i++) {
    wMain.appendChild(buildMenuItem(wProduct[i]));
  }
}

function updateTitle(newTitle) {
  span.innerText = newTitle;
}
function clearpage() {
  return (document.querySelector('#page').innerHTML = '');
}
clearpage();
let span = document.createElement('span');
span.id = 'spanId';
var mBtn = document.querySelector('#menu-men');
var wBtn = document.querySelector('#menu-women');
var menItems = document.querySelector('.men');
var womenItems = document.querySelector('.women');

mBtn.addEventListener('click', function() {
  if (menItems.classList.contains('hidden')) {
    menItems.classList.remove('hidden');
  }
  womenItems.classList.add('hidden');
});
wBtn.addEventListener('click', function() {
  if (womenItems.classList.contains('hidden')) {
    womenItems.classList.remove('hidden');
  }
  menItems.classList.add('hidden');
});
window.onload = function() {
  var nav = document.querySelector('nav');
  var navBtn = document.querySelector('.nav-btn');

  buildPage(productData);

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 4) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
  navBtn.addEventListener('click', function() {
    navBtn.classList.toggle('active');
    nav.classList.toggle('active');
  });
};

var ele = document.querySelector('.pInput ');
ele.addEventListener('change', () => {
  var order = document.querySelector('.order');
  if (ele.value === 'order-problem') {
    order.classList.remove('hidden');
  } else {
    order.classList.add('hidden');
  }
});
