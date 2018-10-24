var opcoes = () =>{
	document.getElementById('principal').style.display = "none";
	document.getElementById('opcoes').style.display = "block";
}

var ativaDia = () =>{
	// -----------------Corpo--------------------------
	document.body.style.backgroundColor = "#e9e9e9";
	$('#opcoes').css('background-color','#333');
	$('.botoes').css('color','#e9e9e9');
	$('#principal').css('background-color','#333');
	//------------------Botões-------------------------
	document.getElementById('Dia').style.color = "blue";
	document.getElementById('Noite').style.color = "#e9e9e9";
	$('.voltar').css('color','#e9e9e9');
	//-----------------Títulos e borda------------------
	$('.title').css('color','#333');
	$('.borda').css('border-color',"#e9e9e9");
}

var ativaNoite = () =>{
	// -----------------Corpo--------------------------
	document.body.style.backgroundColor = "#333";
	$('#opcoes').css('background-color','#e9e9e9');
	$('.botoes').css('color','#333');
	$('#principal').css('background-color','#e9e9e9');
	//------------------Botões-------------------------
	document.getElementById('Dia').style.color = "black";
	document.getElementById('Noite').style.color = "blue";
	$('.voltar').css('color','#333');
	//-----------------Títulos e borda------------------

	$('.title').css('color','#e9e9e9');
	$('.borda').css('border-color',"#333");
}

// var ativaPT = () =>{
// 	document.getElementById('PT').style.color = "blue"
// 	document.getElementById('EN').style.color = "black"
// }

// var ativaEN = () =>{
// 	document.getElementById('EN').style.color = "blue"
// 	document.getElementById('PT').style.color = "black"
// }

var voltarMenu = () => {
	document.getElementById('principal').style.display = "block";
	document.getElementById('opcoes').style.display = "none";
}

var draw = () => {

	document.getElementById('principal').style.display = "none";
	document.getElementById('canvas').style.display = "block";

	var canvas = document.getElementById('canvas');
	document.addEventListener('keydown', keyDown);

	function keyDown(e){

		if(e.keyCode == 39){
		
			virarPraDireita();
		
		} else if(e.keyCode == 37) {
		
			virarPraEsquerda();
		
		} else if(e.keyCode == 32) {

			atacaAeMeo(lado);
		    
		}
	}

	if(canvas.getContext){
		var ctx = canvas.getContext('2d');
		var lado;

		function virarPraEsquerda(){

			ctx.clearRect(0,0,680,400);
			ctx.beginPath();
			img = document.getElementById('zikudaEsq');
			ctx.drawImage(img, 270, 180);
			lado = '1';
		}

		function virarPraDireita(){

			ctx.clearRect(0,0,680,400);
			ctx.beginPath();
			img = document.getElementById('zikudaDir');
			ctx.drawImage(img, 270, 180);
			lado = '0';
		}

		function atacaAeMeo(lado = ''){

			if(lado == '1'){

				ctx.clearRect(0,0,680,400);
				ctx.beginPath();
				img = document.getElementById('zikudaEsq01');
				ctx.drawImage(img,270,180);

				var intAtaqEsq =  setInterval(function(){
					ctx.clearRect(0,0,680,400);
					ctx.beginPath();
					img = document.getElementById('zikudaEsq02');
					ctx.drawImage(img, 248,173);

					var intAtaqEsq01 = setInterval(function(){

						ctx.clearRect(0,0,680,400);
						ctx.beginPath();
						img = document.getElementById('zikudaEsq01');
						ctx.drawImage(img, 270, 180);

						var intAtaqEsq02 = setInterval(function(){

							ctx.clearRect(0,0,680,400);
							ctx.beginPath();
							img = document.getElementById('zikudaEsq');
							ctx.drawImage(img,270,180);
							clearInterval(intAtaqEsq02);

						}, 50);
						clearInterval(intAtaqEsq01);

					}, 50);

					clearInterval(intAtaqEsq);
				}, 50);

			}else if(lado == '0'){

				ctx.clearRect(0,0,680,400);
				ctx.beginPath();
				img = document.getElementById('zikudaDir01');
				ctx.drawImage(img,270,180);

				var intAtaqDir =  setInterval(function(){
					ctx.clearRect(0,0,680,400);
					ctx.beginPath();
					img = document.getElementById('zikudaDir02');
					ctx.drawImage(img, 270, 172);

					var intAtaqDir01 = setInterval(function(){

						ctx.clearRect(0,0,680,400);
						ctx.beginPath();
						img = document.getElementById('zikudaDir01');
						ctx.drawImage(img, 270, 180);

						var intAtaqDir02 = setInterval(function(){

							ctx.clearRect(0,0,680,400);
							ctx.beginPath();
							img = document.getElementById('zikudaDir');
							ctx.drawImage(img,270,180);
							clearInterval(intAtaqDir02);

						}, 50);
						clearInterval(intAtaqDir01);

					}, 50);

					clearInterval(intAtaqDir);
				}, 50);

			}
		}
	}

	virarPraEsquerda();

}
