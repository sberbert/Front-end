var myDiv = document.querySelector('div'),
	myInput = document.querySelector('input');

var myTimeout;

//sem timeout
/*myInput.addEventListener('keyup', function() {	
		myDiv.textContent = this.value;		
});*/


myInput.addEventListener('keyup', function(){
	clearTimeout(myTimeout);
	myTimeout = setTimeout(()=>{
		myDiv.textContent = this.value;	
	}, 1000);
})
