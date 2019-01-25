var socket = io.connect('http://localhost:3000');

var playbutton = document.getElementById('playbutton');
var canvas = document.getElementById('canvas');
var userloginbox = document.getElementById('userlogincontainer');
var titlelogocontainer = document.getElementById('titlelogocontainer');
var titlelogo = document.getElementById('titlelogo');

playbutton.addEventListener('click',sendButtonEmit);

function sendButtonEmit(){
	socket.emit('playclick');
	userloginbox.style.display = 'none';
	titlelogo.style.height = '15vh';
	titlelogo.style.width = '15vh';
	titlelogocontainer.style.textalign = 'left';
	titlelogo.style.margin = '5px';
	canvas.style.display = 'inline-block';
}