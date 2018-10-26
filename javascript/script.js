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

		if(e.keyCode == 39 || e.keyCode == 68 || e.keyCode == 100){
		
			virarPraDireita();
		
		} else if(e.keyCode == 37 || e.keyCode == 65 || e.keyCode == 97) {
		
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
						img = document.getElementById('zikudaEsq03');
						ctx.drawImage(img, 248, 173);

						var vamosVoltar = setInterval(function(){

							ctx.clearRect(0,0,680,400);
							ctx.beginPath();
							img = document.getElementById('zikudaEsq02');
							ctx.drawImage(img, 248,173);							

							var intAtaqEsq02 = setInterval(function(){

								ctx.clearRect(0,0,680,400);
								ctx.beginPath();
								img = document.getElementById('zikudaEsq01');
								ctx.drawImage(img, 270, 180);

								var intAtaqEsq03 = setInterval(function(){

									ctx.clearRect(0,0,680,400);
									ctx.beginPath();
									img = document.getElementById('zikudaEsq');
									ctx.drawImage(img,270,180);
									clearInterval(intAtaqEsq03);

								}, 40);
								clearInterval(intAtaqEsq02);

							}, 40);
							clearInterval(vamosVoltar);

						}, 40);
						clearInterval(intAtaqEsq01);

					}, 40);

					clearInterval(intAtaqEsq);
				}, 40);

			}else if(lado == '0'){

				ctx.clearRect(0,0,680,400);
				ctx.beginPath();
				img = document.getElementById('zikudaDir01');
				ctx.drawImage(img,270,180);

				var intAtaqDir =  setInterval(function(){
					ctx.clearRect(0,0,680,400);
					ctx.beginPath();
					img = document.getElementById('zikudaDir02');
					ctx.drawImage(img, 270,173);

					var intAtaqDir01 = setInterval(function(){

						ctx.clearRect(0,0,680,400);
						ctx.beginPath();
						img = document.getElementById('zikudaDir03');
						ctx.drawImage(img, 270, 173);

						var vamosVoltar = setInterval(function(){

							ctx.clearRect(0,0,680,400);
							ctx.beginPath();
							img = document.getElementById('zikudaDir02');
							ctx.drawImage(img, 270,173);							

							var intAtaqDir02 = setInterval(function(){

								ctx.clearRect(0,0,680,400);
								ctx.beginPath();
								img = document.getElementById('zikudaDir01');
								ctx.drawImage(img, 270, 180);

								var intAtaqDir03 = setInterval(function(){

									ctx.clearRect(0,0,680,400);
									ctx.beginPath();
									img = document.getElementById('zikudaDir');
									ctx.drawImage(img,270,180);
									clearInterval(intAtaqDir03);

								}, 40);
								clearInterval(intAtaqDir02);

							}, 40);
							clearInterval(vamosVoltar);

						}, 40);
						clearInterval(intAtaqDir01);

					}, 40);

					clearInterval(intAtaqDir);
				}, 40);
			}
		}
	}

	virarPraEsquerda();

	var aparecerInimigo = () => {

		ctx.beginPath();
		img = document.getElementById('inimigoTerrestre01');
		ctx.drawImage(img,110,170);
	
	}
	var aparecerInimigo1 = () => {

		ctx.beginPath();
		img = document.getElementById('inimigoTerrestre02');
		ctx.drawImage(img,-10,155);
	
	}
	var aparecerInimigo2 = () => {

		ctx.beginPath();
		img = document.getElementById('inimigoTerrestre03');
		ctx.drawImage(img,-70,160);
	
	}
	var aparecerInimigo3 = () => {

		ctx.beginPath();
		img = document.getElementById('inimigoTerrestre04');
		ctx.drawImage(img,110,175);
	
	}
	var aparecerInimigo4 = () => {

		ctx.beginPath();
		img = document.getElementById('inimigoTerrestre05');
		ctx.drawImage(img,20,175);
	
	}
	var aparecerInimigoDir = () => {

		ctx.beginPath();
		img = document.getElementById('inimigoTerrestreDir01');
		ctx.drawImage(img,300,170);
	
	}
	var aparecerInimigoDir1 = () => {

		ctx.beginPath();
		img = document.getElementById('inimigoTerrestreDir02');
		ctx.drawImage(img,350,155);
	
	}
	var aparecerInimigoDir2 = () => {

		ctx.beginPath();
		img = document.getElementById('inimigoTerrestreDir03');
		ctx.drawImage(img,460,160);
	
	}

	// aparecerInimigo();
	// aparecerInimigo1();
	// aparecerInimigo2();
	// aparecerInimigo3();
	// aparecerInimigo4();
	// aparecerInimigoDir();
	// aparecerInimigoDir1();
	// aparecerInimigoDir2();

	var i = -150;
	var j = 1;
	var altE = 0;
	
	let enviaInimigoEsq = () =>{
		let enviaInimigoEsqVar = setInterval(function(){

			if(i!=130){
				ctx.beginPath();
				ctx.clearRect(0,0,300,400);
				img = document.getElementById('inimigoTerrestre0'+j);

				if(l==1)
					altE = 170;
				else if(l==2)
					altE = 160;
				else if(l==3)
					altE = 155;
				else if(l==4 || l==5)
					altE = 175;

				
				ctx.drawImage(img,i,altE);
				i++;

				if(i%50==0)
					j=1;
				else if(i%10==0)
					j++;


				// if(i==130)
					// alert('vc perdeu');

			}else{
				clearInterval(enviaInimigoEsqVar);
			}
		},10);
	} 

	var k = 600;
	var l = 1;
	var altD = 0;

	let enviaInimigoDir = () =>{
		let enviaInimigoDirVar = setInterval(function(){

			if(k!=270){
				ctx.beginPath();
				ctx.clearRect(400,0,700,400);
				img = document.getElementById('inimigoTerrestreDir0'+l);

				if(l==1)
					altD = 170;
				else if(l==2)
					altD = 160;
				else if(l==3)
					altD = 155;
				else if(l==4 || l==5)
					altD = 175;

				ctx.drawImage(img,k,altD);

				k--;

				if(k%50==0)
					l=1;
				else if(k%10==0)
					l++;


				// if(k==270)
					// alert('vc perdeu');

			}else{
				clearInterval(enviaInimigoDirVar);
			}
		},10);
	}	



	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}

	for(var algumaCoisa = 0; algumaCoisa < 10; algumaCoisa++)
		setTimeout(criarUnico, 1000);

	for(var outraCoisa = 0; outraCoisa < 10; outraCoisa++){
		if(sorteados[outraCoisa] % 2 == 0){
			// var enviaInimigosEsq = setInterval(function(){
			// 	enviaInimigoEsq();
			// 	clearInterval(enviaInimigosEsq);
			// },1000);	
			setTimeout(enviaInimigoEsq, 1000);
		} else {
			// var enviaInimigosDir = setInterval(function(){
			// 	enviaInimigoDir();
			// 	clearInterval(enviaInimigosDir);
			// },1000);
			setTimeout(enviaInimigoDir, 1000);
		}
	}
}

	var sorteados = [];
	var valorMaximo = 1000;

	function criarUnico() {
	    if (sorteados.length == valorMaximo) {
	        if (confirm('Já não há mais! Quer recomeçar?')) sorteados = [];
	        else return;
	    }
	    var sugestao = Math.ceil(Math.random() * valorMaximo); // Escolher um numero ao acaso
	    while (sorteados.indexOf(sugestao) >= 0) {  // Enquanto o numero já existir, escolher outro
	        sugestao = Math.ceil(Math.random() * valorMaximo);
	    }
	    sorteados.push(sugestao); // adicionar este numero à array de numeros sorteados para futura referência
	    console.log(sorteados);
	    return sugestao; // devolver o numero único
	}