var plataformas = [], bola, chao, modify, pontuacao, qntP = 60
function jogoFuncao(){
	var vel = 0, gravidade = 0.5, forcaP = 12, pont=0, refX
	pontuacao={
		mostrar: function(){
			fill(0)
			text('Pontuação '+pont,40,30)
		}
	}
	bola={
		x:width/2,
		y:height-200,
		tamanho: ((windowWidth+windowHeight/2)/100)*2,
		mostrar:function(){
			if(this.x>15){
				if(keyIsDown(65)||keyIsDown(LEFT_ARROW)){this.x-=windowWidth*0.0109}
			}
			if(this.x<width-15){
				if(keyIsDown(68)||keyIsDown(RIGHT_ARROW)){this.x+=windowWidth*0.0109}
			}
			if(mouseIsPressed && this.x<windowWidth - (windowWidth*0.0109)){
				if(mouseX>windowWidth/2){	
					this.x+=windowWidth*0.0109
				}
			}
			if(mouseIsPressed&& this.x>windowWidth*0.0109){
				if(mouseX<windowWidth/2){
					this.x-=windowWidth*0.0109
				}
			}
			fill(200)
			stroke(50)
			ellipse(this.x,this.y,this.tamanho,this.tamanho)
		},
		pular:function(){
			//gravidade
			for (var i = 0; i < plataformas.length; i++) {
				plataformas[i].y+=vel
			}
			chao.y+=vel
			vel-=gravidade
			//pulo e pontuacao
			for(i=0;i<plataformas.length;i++){
				if((collideRectCircle(plataformas[i].x,plataformas[i].y,plataformas[i].largura,5,this.x,this.y,this.tamanho,this.tamanho)||collideLineCircle(chao.x1,chao.y,chao.x2,chao.y,this.x,this.y,this.tamanho,this.tamanho))&&vel<0){
					//SOM
					//SOM
					vel = forcaP
					if(i+1>pont){
						pont=i+1
					}
					if(collideLineCircle(chao.x1,chao.y,chao.x2,chao.y,this.x,this.y,this.tamanho,this.tamanho)){
						pont=0
					}
				}	
			}
		},
		perder: function(){
			if(vel<-22){
				fase=2
			}
		},
		ganhar: function(){
			if(pont==qntP){
				fase=3
			}
		}
	}
	chao = {
			x1:0,
			x2:width,
			y:bola.y+(bola.tamanho/2),
			mostrar: function(){
				line(this.x1,this.y,this.x2,this.y)
			}
	}
	for(i=0;i<qntP;i++){
		if(i<20){	
			plataformas[i]={
				x:random((windowWidth/2)+windowWidth*0.18,(windowWidth/2)-windowWidth*0.33),
				y:chao.y-(i+1)*100,
				largura:random((windowWidth/100)*5,(windowWidth/100)*14.6),
				velX: random(0,15),
				mostrar: function(){
					fill(0)
					rect(this.x,this.y,this.largura,5)
				}
			}	
		}	
		if(i>=20&&i<40){
			plataformas[i]={
				x:random((windowWidth/2)+windowWidth*0.18,(windowWidth/2)-windowWidth*0.33),
				y:chao.y-(i+1)*100,
				largura:random((windowWidth/100)*5,(windowWidth/100)*14.6),
				velX:4,
				direita:true,
				mostrar: function(){
					refX = this.x
					fill(0)
					if(this.direita==true){this.x+=this.velX}
					if(this.direita==false){this.x-=this.velX}
					if(this.x>windowWidth-this.largura){this.direita=false}
					if(this.x<0){this.direita=true}
					
					rect(this.x,this.y,this.largura,5)
				}
			}	
		}
		if(i>=40){
			plataformas[i]={
				x:random((windowWidth/2)+windowWidth*0.18,(windowWidth/2)-windowWidth*0.33),
				y:chao.y-(i+1)*100,
				largura:random((windowWidth/100)*5,(windowWidth/100)*14.6),
				velX: random(0,15),
				direita:true,
				mostrar: function(){
					refX = this.x
					fill(0)
					if(this.direita==true){this.x+=this.velX}
					if(this.direita==false){this.x-=this.velX}
					if(this.x>windowWidth-this.largura){this.direita=false}
					if(this.x<0){this.direita=true}
					rect(this.x,this.y,this.largura,5)
				}
			}	
		}
	}
}