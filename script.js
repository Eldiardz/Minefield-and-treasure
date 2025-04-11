let treasure = document.querySelectorAll(".treasure")
let coin = document.querySelectorAll(".coin")
let meme = document.querySelectorAll(".meme")
let bang = document.querySelectorAll(".bang")
let body = document.querySelector("body")
let scoreBlock = document.querySelector(".score")
let missesBlock = document.querySelector(".misses")

misses = 0
missesBlock.innerHTML = misses

score = 0
scoreBlock.innerHTML = score
		
		for(let i=0; i<6; i++){
			treasure[i].onclick = function(){
				if (!treasure[i].dataset.clicked) {
  				treasure[i].style.backgroundImage = "url(treasure.png)";
  				treasure[i].style.backgroundSize = "100% 100%";
  				treasure[i].style.backgroundColor = "green";

  				score += 1;
  				scoreBlock.innerHTML = score;

  			
  				treasure[i].dataset.clicked = "true";
					  if(score == 6){
						alert("Победа 🤠")
					}
			}	
			}
		}

		for (let i = 0; i < 6; i++) {
  			bang[i].onclick = function () {
			if (!bang[i].dataset.clicked) {
  				bang[i].style.backgroundImage = "url(bang.png)";
  				bang[i].style.backgroundSize = "100% 100%";
  				bang[i].style.backgroundColor = "red";

 				score -= 1;
  				scoreBlock.innerHTML = score;

					misses += 1
					missesBlock.innerHTML = misses
					if(misses == 3){
						alert("Ты проиграл! 🥶")
						body.style.display = "none"
					}
  				bang[i].dataset.clicked = "true";
				}
  			};
		}

		for (let i = 0; i < 17; i++) {
  			meme[i].onclick = function () {
			if (!meme[i].dataset.clicked) {
  				meme[i].style.backgroundImage = "url(mem.jpg)";
  				meme[i].style.backgroundSize = "100% 100%";
  				meme[i].style.backgroundColor = "white";

 				
  			

  				meme[i].dataset.clicked = "true";
				}
  			};
		}

		for(let i=0; i<7; i++){
			coin[i].onclick = function(){
				if (!coin[i].dataset.clicked) {
  				coin[i].style.backgroundImage = "url(coin.png)";
  				coin[i].style.backgroundSize = "100% 100%";
  				coin[i].style.backgroundColor = "green";

  				score += 1;
  				scoreBlock.innerHTML = score;
  				coin[i].dataset.clicked = "true";
					if(score == 6){
						alert("Победа 🤠")
					}
			}	
				
			}
		}