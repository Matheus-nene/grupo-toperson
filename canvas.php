<!DOCTYPE html>
<html>
<head>
	<title>Jogo</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<script type="text/javascript" src="javascript/script.js"></script>
	<script type="text/javascript" src="javascript/jquery-3.3.1.min.js"></script>
</head>
<body id="body">
	<audio autoplay="true" controls="controls">
		<source src="" type="">
	</audio>
	<div class="titulo">
		<h1 class="title">Bem-vindo ao F.O.D.E.U. Projeto</h1>
		<h2 class="title">Fight Of Destructive Endless Universe</h2>
	</div>
	<div class="principal" id="principal" style="display:block">
		<div class="borda">
			<button type="button" onclick="draw()" class="botoes">INICIAR</button>
			<button type="button" onclick="opcoes()" class="botoes">MODO DE JOGO</button>
			<button type="button" onclick="abrirScore()" class="botoes">PONTUAÇÃO</button>
		</div>
	</div>
	<div class="opcoes" id="opcoes" style="display:none">
		<div class="borda">
			<span class="voltar" onclick="voltarMenu()">VOLTAR</span>
				<button type="button" id="Dia" class="botoes botoesOP" onclick="ativaDia()">Dia</button><br>
				<button type="button" id="Noite" class="botoes botoesOP" onclick="ativaNoite()" style="color:blue">Noite</button><hr>
				<button type="button" id="PT" class="botoes botoesOP" onclick="ativaPT()" style="color:blue">Portugues</button><br>
				<button type="button" id="EN" class="botoes botoesOP" onclick="ativaEN()">Inglês</button>
		</div>
	</div>

	<canvas id="canvas" width="680" height="400" style="display: none">
		este navegador não suporta canvas!
	</canvas>

	<img src="assets/img/BonecoEsq01.png" style="display: none" id="zikudaEsq" height="150">
	<img src="assets/img/BonecoDir01.png" style="display: none" id="zikudaDir" height="150">
	<img src="assets/img/BonecoEsq02.png" style="display: none" id="zikudaEsq01" height="150">
	<img src="assets/img/BonecoDir02.png" style="display: none" id="zikudaDir01" height="150">
	<img src="assets/img/BonecoEsq03.png" style="display: none" id="zikudaEsq02" height="150">
	<img src="assets/img/BonecoDir03.png" style="display: none" id="zikudaDir02" height="150">
	<img src="assets/img/BonecoEsq04.png" style="display: none" id="zikudaEsq03" height="150">
	<img src="assets/img/BonecoDir04.png" style="display: none" id="zikudaDir03" height="150">
	<img src="assets/img/inimigoTerrestre01.png" style="display: none" id="inimigoTerrestre01" height="150">
	<img src="assets/img/inimigoTerrestre02.png" style="display: none" id="inimigoTerrestre02" height="150">
	<img src="assets/img/inimigoTerrestre03.png" style="display: none" id="inimigoTerrestre03" height="150">
	<img src="assets/img/inimigoTerrestre04.png" style="display: none" id="inimigoTerrestre04" height="150">
	<img src="assets/img/inimigoTerrestre05.png" style="display: none" id="inimigoTerrestre05" height="150">
	<img src="assets/img/inimigoTerrestreDir01.png" style="display: none" id="inimigoTerrestreDir01" height="150">
	<img src="assets/img/inimigoTerrestreDir02.png" style="display: none" id="inimigoTerrestreDir02" height="150">
	<img src="assets/img/inimigoTerrestreDir03.png" style="display: none" id="inimigoTerrestreDir03" height="150">
	<img src="assets/img/inimigoTerrestreDir04.png" style="display: none" id="inimigoTerrestreDir04" height="150">
	<img src="assets/img/inimigoTerrestreDir05.png" style="display: none" id="inimigoTerrestreDir05" height="150">

</body>
</html>