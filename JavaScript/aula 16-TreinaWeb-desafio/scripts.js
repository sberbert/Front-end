var list = [1,2,3],
	listElement = document.querySelector('ul');

function insert(event){
	if(event.keyCode === 13){
		list.push(event.target.value); /* target é o campo alvo, no caso o input */
		event.target.value = '';
		render();
	}
}

function remove(index){
	list.splice(index, 1);
	render();
}

function render(){
	listElement.innerHTML = list.map((item, index) => { /* função list.map permite alterar cada um dos elementos - poderia usar for*/
		return `<li onclick="remove(${index})" >${item}</li>`;
	}).join('');
}


render();