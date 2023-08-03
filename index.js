let form = document.getElementById("addForm");
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
//form.addEventListener('submit', addItem);
form.addEventListener('submit', addItem);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  let newItem = document.getElementById('item').value;

  // Create new li element
  let li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  let deleteBtn = document.createElement('button');
  let editBtn =document.createElement('button');
  editBtn.className = 'btn btn-primary btn-sm float-right edit';
  editBtn.appendChild(document.createTextNode('E'));
  li.appendChild(editBtn);
  itemList.appendChild(li);
  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';


  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

