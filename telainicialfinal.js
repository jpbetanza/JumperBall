function inicioFuncao(){
	titulo={
		texto: 'Jogo mais fácil de se fazer no P5JS do que a tentativa anterior',
		tamanhoTitulo:windowWidth*0.0234,
		mostrarTitulo: function(){
			fill(255)
			push()
			translate(windowWidth/2-(windowWidth*0.1098),windowHeight/2-(windowHeight*0.31))
			rotate(10)
			textSize(this.tamanhoTitulo)
			text(this.texto,0,0,windowWidth*0.2928,windowHeight*0.62)
			pop()
			
		},
		botaoVermelho:255,
		botaoVerde:0,
		botaoAzul:0,
		mostrarBotao: function(){
			push()
			fill(this.botaoVermelho,this.botaoVerde,this.botaoAzul)
			rect(windowWidth/2-50,windowHeight-230,140,70)
			pop()
			this.botaoVermelho=255;this.botaoVerde=255;this.botaoAzul=255;
			textSize(35)
			text('JOGAR',windowWidth/2-40,windowHeight-185)
			this.botaoVermelho=255;this.botaoVerde=0;this.botaoAzul=0;
		},
		selecionarBotao: function(){
			if(collidePointRect(mouseX,mouseY,windowWidth/2-50,windowHeight-230,140,70)){
				if(mouseIsPressed){
					fase=1
				}
				this.botaoVermelho = random(0,255)
				this.botaoVerde = random(0,255)
				this.botaoAzul = random(0,255)
				
			}
		}
	}
}
function perdeuFuncao(){
	background(0)
					fill(255)
					textSize(windowWidth*0.0366)
					text('PERDEU, HAHA',(windowWidth/2)-(windowWidth*0.139),windowHeight/2)
					push()
					fill(titulo.botaoVermelho,titulo.botaoVerde,titulo.botaoAzul)
					rect((windowWidth/2)-(windowWidth*0.109), windowHeight-(windowHeight*0.3565),windowWidth*0.2196,windowHeight*0.1085)
					pop()
					titulo.botaoVermelho=255;titulo.botaoVerde=255;titulo.botaoAzul=255;
					textSize(windowWidth*0.0256)
					text('Tentar Novamente',(windowWidth/2)-windowWidth*0.106,windowHeight-185)
					titulo.botaoVermelho=255;titulo.botaoVerde=0;titulo.botaoAzul=0;
					if(collidePointRect(mouseX, mouseY, (windowWidth/2)-(windowWidth*0.109), windowHeight-(windowHeight*0.3565),windowWidth*0.2196,windowHeight*0.1085)){
						if(mouseIsPressed){
							fase=1
						}
						titulo.botaoVermelho = random(0,255)
						titulo.botaoVerde = random(0,255)
						titulo.botaoAzul = random(0,255)
					}
}
function ganhouFuncao(){
	background(0)
	fill(255)
	textSize(32)
	text('MEUS PARABÉNS AMIGÃO, VOCÊ É UM VITORIOSO',windowWidth/2-300,windowHeight/2-100,800,200)
	textSize(25)
	text('Feito por: João Pedro Betanza',windowWidth/2-150,windowHeight/2+100)
}