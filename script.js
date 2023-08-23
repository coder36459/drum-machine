document.body.innerHTML = "<header><h1>Drum Machine</h1></header><section id=\"drum-machine\"><section id=\"display\"></section><section id=\"drumPad\"></section></section><footer>Made by <a href=\"https://www.linkedin.com/in/maciej-browarski\" target=\"_blank\">Maciej Browarski</a></footer>";

const drum = [["Q","Heater 1","https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"],["W","Heater 2","https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"],["E","Heater 3","https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"],
["A","Heater 4","https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"],["S","Clap","https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"],["D","Open-HH","https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"],["Z","Kick-n'-Hat","https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"],["X","Kick","https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"],["C","Closed-HH","https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"]];

let btns = "";
function btn (x, y) {
	btns += ("<button id=\"btn" + x + "\" class=\"drum-pad\" type=\"button\">" +
	"<audio id=\"" + x + "\" class=\"clip\" src=\"" + y + "\"></audio>" +
	x + "</button>")
	}

for (x in drum) {
	btn(drum[x][0],drum[x][2]);
	}

document.getElementById("drumPad").innerHTML = btns;

const button = document.querySelectorAll("button");
button.forEach((id) => {id.addEventListener("click", () => {my(id.innerText)})});

function my(x) {
	let di = document.getElementById("display");
	let i = 0;
	while (i < drum.length) {
		switch (x) {
			case drum[i][0]:
			di.innerText = drum[i][1];
			try {
				document.getElementById(x).play();
				}
			catch (err) {
				console.log(err);
				}
			break;
			}
		i++;
		}
	}
	
document.body.onkeydown = () => {my(event.key.toUpperCase())}

$(document).ready(() => {
	$("#drumPad").mouseleave(() => {
		$("#drum-machine").slideUp(3000).slideDown(2000);
		});
	});
