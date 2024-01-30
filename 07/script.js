// const clearBtn = document.querySelector('#clear');

// function onClear() {
//   const itemList = document.querySelector('ul');
//   const items = itemList.querySelectorAll('li');

//   // itemList.innerHTML = '';

//   // items.forEach((item) => item.remove());

//   while (itemList.firstChild) {
//     itemList.removeChild(itemList.firstChild);
//   }
// }

// // JavaScript Event Listener
// clearBtn.onclick = function () {
//   alert('Clear Items');
// };

// clearBtn.onclick = function () {
//   console.log('Clear Items');
// };

// // addEventListener()
// clearBtn.addEventListener('click', () => alert('Clear Items'));

// // Use named function
// clearBtn.addEventListener('click', onClear);

// // removeEventListener()
// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// // Fire off event from JS
// setTimeout(() => clearBtn.click(), 5000);

// const logo = document.querySelector('img');

// const onClick = () => console.log('click event');
// const onDoubleClick = () => {
//   if (document.body.style.backgroundColor !== 'purple') {
//     document.body.style.backgroundColor = 'purple';
//     document.body.style.color = 'white';
//   } else {
//     document.body.style.backgroundColor = 'white';
//     document.body.style.color = 'black';
//   }
// };
// const onRightClick = () => console.log('right click event');
// const onMouseDown = () => console.log('mouse down event');
// const onMouseUp = () => console.log('mouse up event');
// const onMouseWheel = () => console.log('mouse wheel event');
// const onMouseOver = () => console.log('mouse over event');
// const onMouseOut = () => console.log('mouse out event');
// const onDragStart = () => console.log('drag start event');
// const onDrag = () => console.log('drag event');
// const onDragEnd = () => console.log('drag end event');

// // Event Listeners
// logo.addEventListener('click', onClick);
// logo.addEventListener('dblclick', onDoubleClick);
// logo.addEventListener('contextmenu', onRightClick);
// logo.addEventListener('mousedown', onMouseDown);
// logo.addEventListener('mouseup', onMouseUp);
// logo.addEventListener('wheel', onMouseWheel);
// logo.addEventListener('mouseover', onMouseOver);
// logo.addEventListener('mouseout', onMouseOut);
// logo.addEventListener('dragstart', onDragStart);
// logo.addEventListener('drag', onDrag);
// logo.addEventListener('dragend', onDragEnd);

// // Method 1
// // window.addEventListener('keydown', (e) => {
// //   const insert = document.getElementById('insert');

// //   insert.innerHTML = `
// //     <div class="key">
// //       ${e.key === ' ' ? 'Space' : e.key}
// //       <small>e.key</small>
// //     </div>

// //     <div class="key">
// //       ${e.keyCode}
// //       <small>e.keyCode</small>
// //     </div>

// //     <div class="key">
// //       ${e.code}
// //       <small>e.code</small>
// //     </div>
// //   `;
// // });

// // Method 2
// function showKeyCodes(e) {
//     const insert = document.getElementById('insert');
//     insert.innerHTML = '';
  
//     const keyCodes = {
//       'e.key': e.key === ' ' ? 'Space' : e.key,
//       'e.keyCode': e.keyCode,
//       'e.code': e.code,
//     };
  
//     for (let key in keyCodes) {
//       const div = document.createElement('div');
//       div.className = 'key';
//       const small = document.createElement('small');
  
//       const keyText = document.createTextNode(key);
//       const valueText = document.createTextNode(keyCodes[key]);
  
//       small.appendChild(keyText);
//       div.appendChild(valueText);
//       div.appendChild(small);
  
//       insert.appendChild(div);
//     }
//   }
  
//   window.addEventListener('keydown', showKeyCodes);

//   const form = document.getElementById('item-form');

// function onSubmit(e) {
//   e.preventDefault();

//   // Get value with .value
//   const item = document.getElementById('item-input').value;
//   const priority = document.getElementById('priority-input').value;

//   if (item === '' || priority === '0') {
//     alert('Please fill in all fields');
//     return;
//   }

//   console.log(item, priority);
// }

// // Using the FormData Object
// function onSubmit2(e) {
//   e.preventDefault();

//   const formData = new FormData(form);

//   // Get individual items
//   const item = formData.get('item');
//   const priority = formData.get('priority');

//   console.log(item, priority);

//   // Get al entried as an Iterator
//   const entries = formData.entries();
//   console.log(entries);

//   // Loop through entries
//   for (let entry of entries) {
//     console.log(entry[1]);
//   }
// }

// form.addEventListener('submit', onSubmit2);

// const button = document.querySelector('form button');
// const div = document.querySelector('form div:nth-child(2)');
// const form = document.querySelector('form');

// button.addEventListener('click', (e) => {
//   alert('Button was clicked');
//   e.stopPropagation();
// });

// div.addEventListener('click', () => {
//   alert('Div was clicked');
// });

// form.addEventListener('click', () => {
//   alert('Form was clicked');
// });

// document.body.addEventListener('click', () => {
//   alert('Body was clicked');
// });


// On Page Load
// window.onload = function () {
//   document.querySelector('h1').textContent = 'Hello World';
// };

window.addEventListener('load', () => console.log('Page Loaded'));

// On DOM Load
window.addEventListener('DOMContentLoaded', () => console.log('DOM Loaded'));

console.log('Run me');

// Resize Event
window.addEventListener('resize', () => {
  document.querySelector(
    'h1'
  ).innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
});

// Scroll Event
window.addEventListener('scroll', () => {
  console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);

  if (window.scrollY > 70) {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
});

// Focus & Blur Events
window.addEventListener('focus', () => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = 'blue';
  });
});

window.addEventListener('blur', () => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = 'black';
  });
});