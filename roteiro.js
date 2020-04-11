var fase = 0, somdaBola
function preload(){
//SOM
//SOM
}
function setup(){
	createCanvas(windowWidth,windowHeight)
		inicioFuncao()
		frameRate(120)
		jogoFuncao()
		perdeuFuncao()
		ganhouFuncao()
}
function draw(){
	angleMode(DEGREES)
	background(230)
	if(fase==0){
		background(0)
		titulo.mostrarTitulo()
		titulo.mostrarBotao()
		titulo.selecionarBotao()
	}
	if(fase==1){
		pontuacao.mostrar()
		for (var i = 0; i < qntP; i++) {
			plataformas[i].mostrar()
				
		}
		bola.perder()
		bola.ganhar()
		bola.pular()
		bola.mostrar()
		chao.mostrar()
		
	}
	if(fase==2){
		jogoFuncao()
		perdeuFuncao()
	}
	if(fase==3){
		jogoFuncao()
		ganhouFuncao()
	}
}