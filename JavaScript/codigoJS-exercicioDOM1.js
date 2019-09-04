

var txtLogin = document.getElementById('login');
var txtSenha = document.getElementById('senha');

txtLogin.style['background-color'] = '#c3c3c3';
txtSenha.style['background-color'] = '#c3c3c3';

var form = document.forms[0];

form.addEventListener('submit', function logar(event){
	event.preventDefault();
	var login = document.getElementById('login').value;
	var senha = document.getElementById('senha').value;
    
    if ( (login == 'adm') && (senha == '123') ) {
        alert('logou');
    } else {
        alert('login / senha inválido(s)');
    }
	
});

/*
// onsubmit
function logar(){
	var login = document.getElementById('login');
	var senha = document.getElementById('senha');

    if ( (login == 'adm') && (senha == '123') ) {
        alert('logou');
    } else {
        alert('login / senha inválido(s)');
    }
    
	return false;
}
*/