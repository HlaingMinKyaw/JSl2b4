// Get UI

var getform = document.getElementById('form');
var gettextbox = document.getElementById('textbox');
var getul = document.getElementById('list-group');


var todos = JSON.parse(localStorage.getItem('todos'));
// console.log(todos);
if(todos){
	todos.forEach(todo=>addnew(todo));
}

getform.addEventListener('submit',(e)=>{

	e.preventDefault();
	addnew();
	

});

function addnew(todo){
	// console.log('hay');

	// came from input text
	let todotext = gettextbox.value;
	// console.log(todotext);

	// came from local storage
	if(todo){
		todotext = todo.text
	}

	if(todotext){
		const li = document.createElement('li');
		
		if(todo && todo.done){
			li.classList.add('completed');
		}
		
		li.appendChild(document.createTextNode(todotext));
		getul.appendChild(li);
		gettextbox.value = '';
		gettextbox.focus();

		updateloaclstorage();

		li.addEventListener('click',function(){
			li.classList.toggle('completed');
			updateloaclstorage();

		});

		li.addEventListener('contextmenu',(e)=>{
			li.remove();
			updateloaclstorage();
			e.preventDefault();
		});
	}

}

function updateloaclstorage(){
	var getalllis = document.querySelectorAll('li');


	const todos = [];

	getalllis.forEach(getallli=>{
		todos.push({
			text:getallli.textContent,
			done:getallli.classList.contains('completed')
		});
	});

	console.log(todos);

	localStorage.setItem('todos',JSON.stringify(todos));
}