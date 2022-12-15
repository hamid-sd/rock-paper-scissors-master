var icon = document.getElementsByClassName("icon");
var icon2 = document.getElementsByClassName("icon2");
var pick = document.getElementsByClassName("pick");
var triangle = document.getElementById("triangle");
var replay = document.getElementById("replay");
var rules1 = document.getElementById("rules1");
var rules = document.getElementById("rules");
var blur = document.getElementById("blur");
var bgloader = document.getElementById("bg-loader");
var close = document.getElementById("close");
var joueur = document.getElementsByClassName("joueur");
var machine = document.getElementsByClassName("machine");
var winner = document.getElementsByClassName("winner");
var victoire = document.getElementsByClassName("victoire");
var loader = document.getElementsByClassName("loader");
var score = 0 ;
var p;

loader[2].style.opacity = '1';
setTimeout(()=>{
	loader[2].style.opacity = '0';
	loader[0].style.opacity = '1';
	setTimeout(()=>{
		loader[0].style.opacity = '0';
		loader[1].style.opacity = '1';
		setTimeout(()=>{
			loader[1].style.opacity = '0';
			loader[2].style.opacity = '1';
			setTimeout(()=>{
				loader[2].style.opacity = '0';
				loader[0].style.opacity = '1';
				setTimeout(()=>{
					bgloader.style.opacity = '0';
					setTimeout(()=>{
							bgloader.style.display = 'none';
						}, 600);
				}, 800);
			}, 1000);
		}, 1000);
	}, 1000);
}, 1000);

Array.from(icon).forEach( function(element, index) {
	element.addEventListener("click",()=>{
		if (element.className.indexOf("selected") == -1) {
			element.className = element.className.replace(" hover", " selected");
			joueur[0].className = joueur[0].className + " position";
			for (var i = 0; i < icon.length; i++) {
				if (i != index) {
					icon[i].className = icon[i].className + " hide";
				}
			}
			triangle.className = "hide";

			setTimeout(()=>{
				for (var i = 0; i < icon.length; i++) {
					if (i != index) {
						icon[i].className = icon[i].className + " displayed";
					}
				}
				triangle.className = "displayed";
				pick[0].style.opacity = '1';
				pick[1].style.opacity = '1';
				setTimeout(()=>{
					p = Math.floor(Math.random() * 3);
					setTimeout(()=>{
						icon2[p].className = icon2[p].className.replace(" hide", "");
					},30);
					icon2[p].className = icon2[p].className.replace(" displayed", "");
					if (p == index) {
						document.getElementById("winner-text").textContent = "KIF KIF";
						setTimeout(()=>{
							victoire[0].className = victoire[0].className+" vrai";
							victoire[1].className = victoire[1].className+" vrai";
						}, 500);
					}else {
						if ((p==0 && index==1)||(p==1 && index==2)||(p==2 && index==0)) {
							document.getElementById("winner-text").textContent = "YOU WIN";
							score++;
							document.getElementById("score").textContent = ""+score;
							setTimeout(()=>{
								victoire[0].className = victoire[0].className+" vrai";
							}, 500);
						} else {
							document.getElementById("winner-text").textContent = "YOU LOSE";
							setTimeout(()=>{
								victoire[1].className = victoire[1].className+" vrai";
							}, 500);
						}
					}
					setTimeout(()=>{
						joueur[0].className = joueur[0].className.replace(" position", " position2");
						machine[0].className = machine[0].className + " position3";
						winner[0].className = winner[0].className.replace(" hide", " pos-win");
					}, 500);
				}, 500);
			},450);
		};	
	});
});

replay.addEventListener("click", ()=>{
	setTimeout(()=>{
		icon2[p].className = icon2[p].className + " displayed";
	}, 50);
	victoire[0].className = victoire[0].className.replace(" vrai","");
	victoire[1].className = victoire[1].className.replace(" vrai","");
	machine[0].className = machine[0].className.replace(" position3","");
	triangle.className= "";
	icon2[p].className = icon2[p].className + " hide";
	winner[0].className = winner[0].className.replace( " pos-win", " hide");
	pick[0].style.opacity = '0';
	pick[1].style.opacity = '0';
	icon[0].className = "icon hover paper";
	icon[1].className = "icon hover scissors";
	icon[2].className = "icon hover rock";
	joueur[0].className = "joueur";
});

rules1.addEventListener("click", function() {
	blur.style.display = 'flex';
	setTimeout(()=>{
		blur.style.opacity = '1';
	}, 100);
	
});
rules.addEventListener("click", function() {
	blur.style.display = 'flex';
	setTimeout(()=>{
		blur.style.opacity = '1';
	}, 100);
});
close.addEventListener("click", ()=>{
	blur.style.opacity = '0';
	setTimeout(()=>{
		blur.style.display = "none";
	}, 600);
});