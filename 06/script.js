// //dom intro
// // Global window object
// console.log(window);

// // The document object is part of the window object
// console.dir(window.document);

// // We can access DOM elements directly with properties
// console.log(document.body);
// console.log(document.links[0]);

// // We can set properties of elements
// // document.body.innerHTML = '<h1>Hello from body</h1>';

// // The document object has a ton of methods. One is `document.write()`, which will write something to the document
// document.write('Hello from JS');

// // We also have methods to select elements more directly
// document.getElementById('main').innerHTML = '<h1>Hello from main</h1>';

// document.querySelector('#main h1').innerText = 'Hello';

// // document.getElementById()

// console.log(document.getElementById('app-title'));

// // Get attributes
// console.log(document.getElementById('app-title').id);
// console.log(document.getElementById('app-title').className);
// console.log(document.getElementById('app-title').getAttribute('id'));

// // Set attributes
// document.getElementById('app-title').title = 'Shopping List';
// document.getElementById('app-title').setAttribute('class', 'title');

// const title = document.getElementById('app-title');

// // Get/change content
// console.log(title.textContent);
// title.textContent = 'Hello World';
// title.innerText = 'Hello Again';
// title.innerHTML = '<strong>Shopping List</strong>';

// // Change styles
// title.style.color = 'red';
// title.style.backgroundColor = 'black';
// title.style.padding = '10px';
// title.style.borderRadius = '10px';

// // document.querySelector()

// // Use any CSS selector
// console.log(document.querySelector('h1'));
// console.log(document.querySelector('#app-title'));
// console.log(document.querySelector('.container'));
// console.log(document.querySelector('input[type="text"]'));
// console.log(document.querySelector('li:nth-child(2)').innerText);

// const secondItem = document.querySelector('li:nth-child(2)');
// secondItem.innerText = 'Apple Juice';
// secondItem.style.color = 'red';

// // Use these methods on other elements
// const list = document.querySelector('ul');
// console.log(list);
// const firstItem = list.querySelector('li');
// firstItem.style.color = 'blue';

// // insertAdjacentElement Example
// function insertElement() {
//     const filter = document.querySelector('.filter');
  
//     const h1 = document.createElement('h1');
//     h1.textContent = 'insertAdjacentElement';
  
//     filter.insertAdjacentElement('beforebegin', h1);
//   }
  
//   // insertAdjacentText Example
//   function insertText() {
//     const item = document.querySelector('li:first-child');
  
//     item.insertAdjacentText('beforebegin', 'insertAdjacentText');
//   }
  
//   // insertAdjacentHTML example
//   function insertHTML() {
//     const clearBtn = document.querySelector('#clear');
  
//     clearBtn.insertAdjacentHTML('afterend', '<h2>insertAdjacentHTML</h2>');
//   }
  
//   // insertBefore Example
//   function insertBeforeItem() {
//     const ul = document.querySelector('ul');
  
//     const li = document.createElement('li');
//     li.textContent = 'insertBefore';
  
//     const thirdItem = document.querySelector('li:nth-child(3)');
  
//     ul.insertBefore(li, thirdItem);
//   }
  
//   insertElement();
  
//   /*
//   <!-- beforebegin -->
//   <p>
//     <!-- afterbegin -->
//     foo
//     <!-- beforeend -->
//   </p>
//   <!-- afterend -->
//   */

//   // replaceWith() Method
// function replaceFirstItem() {
//     const firstItem = document.querySelector('li:first-child');
  
//     const li = document.createElement('li');
//     li.textContent = 'Replaced First';
  
//     firstItem.replaceWith(li);
//   }
  
//   // OuterHTML Property
//   function replaceSecondItem() {
//     const secondItem = document.querySelector('li:nth-child(2)');
  
//     secondItem.outerHTML = '<li>Replaced Second</li>';
//   }
  
//   // Replace All Items
//   function replaceAllItems() {
//     const lis = document.querySelectorAll('li');
  
//     // lis.forEach((item, index) => {
//     //   // item.outerHTML = '<li>Replace All</li>';
//     //   if (index === 1) {
//     //     item.innerHTML = 'Second Item';
//     //   } else {
//     //     item.innerHTML = 'Replace All';
//     //   }
//     // });
  
//     lis.forEach(
//       (item, index) =>
//         (item.outerHTML = index === 1 ? '<li>Second Item</li>' : '<li>Item</li>')
//     );
//   }
  
//   // replaceChild() Method
//   function replaceChildHeading() {
//     const header = document.querySelector('header');
//     const h1 = document.querySelector('header h1');
  
//     const h2 = document.createElement('h2');
//     h2.id = 'app-title';
//     h2.textContent = 'Shopping List';
//     header.replaceChild(h2, h1);
//   }
  
//   replaceFirstItem();
//   replaceSecondItem();
//   replaceAllItems();
//   replaceChildHeading();

//   // remove() Method
// function removeClearButton() {
//     const clearBtn = document.querySelector('#clear');
//     clearBtn.remove();
//   }
  
//   // removeChild() Method
//   function removeFirstItem() {
//     const ul = document.querySelector('ul');
//     const li = document.querySelector('li:first-child');
  
//     ul.removeChild(li);
//   }
  
//   // Other examples
  
//   function removeItem(itemNumber) {
//     const ul = document.querySelector('ul');
//     const li = document.querySelector(`li:nth-child(${itemNumber})`);
  
//     ul.removeChild(li);
//   }
  
//   function removeItem2(itemNumber) {
//     const ul = document.querySelector('ul');
//     const li = document.querySelectorAll('li')[itemNumber - 1];
  
//     ul.removeChild(li);
//   }
  
//   function removeItem3(itemNumber) {
//     const li = document.querySelectorAll('li');
//     li[itemNumber - 1].remove();
//   }
  
//   const removeItem4 = (itemNumber) =>
//     document.querySelectorAll('li')[itemNumber - 1].remove();
  
//   removeClearButton();
//   // removeFirstItem();
//   // removeItem(2);
//   removeItem4(2);