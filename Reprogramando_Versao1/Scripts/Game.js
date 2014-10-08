var Game = function ()
{
	this.clock = new Clock(15,40,80,80,"Images/Relogio.png");
	this.color_bar = "green";
	this.time = 150;
	this.tale_icon = new Object(950,700,50,50,"Images/Conto_icone.png");
	this.tale = new Object(120,0,800,600,"Images/Telas/Jogo/TelaPrego0.png");
	this.chain = new Object (180,-60,650,300,"Images/Telas/Jogo/TelaCorrente.png");
	this.nail = new Object (210,187,30,30,"Images/Telas/Jogo/Prego.png");
	this.nail2 = new Object (770,187,30,30,"Images/Telas/Jogo/Prego.png");
	this.background = new Object (0,0,graphics.canvas.width,graphics.canvas.height,"Images/Telas/Jogo/Tela_Jogo.png");
	this.score = 0;
	
	//Som do relogio
	this.audio = new Audio();
	this.audio.src = "Sounds/TicTac-Relogio.mp3";
	this.audio.volume = 0.5;
	this.audio.play();
	this.audio.loop = true;
	//Som do relogio 
	this.audio_background = new Audio();
	this.audio_background.src = "Sounds/Tela_de_Jogo.wav";
	this.audio_background.volume = 0.1;
	this.audio_background.play();
	this.audio_background.loop = true;
	
	//Som de certo e errado
	this.right_sound = new Audio();
	this.right_sound.src = "Sounds/SomDeCerto.wav";
	this.wrong_sound = new Audio();
	this.wrong_sound.src = "Sounds/SomDeErrado.wav";
	//Som do click
	this.audio_click = new Audio();
	this.audio_click.src = "Sounds/Clique.wav";
	
	
	this.wordArray = new Array(15);
	this.blankArray = new Array(15);
	
	this.right = new Icon(0,0,50,50,"Images/Telas/Jogo/Certo.PNG");
	this.right.alpha = 0;
	this.wrong = new Icon(0,0,50,50,"Images/Telas/Jogo/Errado.PNG");
	this.wrong.alpha = 0;
	
	this.mouse_x;
	this.mouse_y;
	
	this.wordSelected;
	this.click;
	this.clickedWord;
	this.canDrawTale;
	this.StopMoveTale = false;
	
	this.drawRight = false;
	
	fade.starting = true;
	fade.ending = false;
	
	this.canPlayClick = true;
	this.ClickPlaySound = function ()
	{
		if(this.click && this.canPlayClick)
		{
			this.audio_click.play();
			this.canPlayClick = false;
		}
	}
	
	
	this.correctWords = new Array();
	
	this.trashArray = new Array(9);
	this.clickedTrash = false;
	this.trashSelected;
	
	this.MoveTale = function()
	{
		if(this.tale.y <= 140)
		{
			this.tale.y += 6;
			
		}
		else
		{
			this.StopMoveTale = true;
		}
	}
	
	this.setWords = function()
	{
			var position_x = Math.floor(Math.random() * (graphics.canvas.width-200)+40 );
			var position_y = Math.floor(Math.random() * (500)+200 );
			this.wordArray[0] = new Word(position_x, position_y, 96,24, "Images/Telas/Jogo/Palavras/0.png",0);
			
			var position_x = Math.floor(Math.random() * (graphics.canvas.width-200)+40 );
			var position_y = Math.floor(Math.random() * (500)+200 );
			this.wordArray[1] = new Word(position_x, position_y, 70,32, "Images/Telas/Jogo/Palavras/1.png",1);
			
				var position_x = Math.floor(Math.random() * (graphics.canvas.width-200)+40 );
			var position_y = Math.floor(Math.random() * (500)+200 );
			this.wordArray[2] = new Word(position_x, position_y, 68,24, "Images/Telas/Jogo/Palavras/2.png",2);
			
				var position_x = Math.floor(Math.random() * (graphics.canvas.width-200)+40 );
			var position_y = Math.floor(Math.random() * (500)+200 );
			this.wordArray[3] = new Word(position_x, position_y, 82,30, "Images/Telas/Jogo/Palavras/3.png",3);
			
				var position_x = Math.floor(Math.random() * (graphics.canvas.width-200)+40 );
			var position_y = Math.floor(Math.random() * (500)+200 );
			this.wordArray[4] = new Word(position_x, position_y, 120,29, "Images/Telas/Jogo/Palavras/4.png",4);
			
				var position_x = Math.floor(Math.random() * (graphics.canvas.width-200)+40 );
			var position_y = Math.floor(Math.random() * (500)+200 );
			this.wordArray[5] = new Word(position_x, position_y, 81,25, "Images/Telas/Jogo/Palavras/5.png",5);
			
				var position_x = Math.floor(Math.random() * (graphics.canvas.width-200)+40 );
			var position_y = Math.floor(Math.random() * (500)+200 );
			this.wordArray[6] = new Word(position_x, position_y, 90,24, "Images/Telas/Jogo/Palavras/6.png",6);
			
				var position_x = Math.floor(Math.random() * (graphics.canvas.width-200)+40 );
			var position_y = Math.floor(Math.random() * (500)+200 );
			this.wordArray[7] = new Word(position_x, position_y, 85,25, "Images/Telas/Jogo/Palavras/7.png",7);
			
				var position_x = Math.floor(Math.random() * (graphics.canvas.width-200)+40 );
			var position_y = Math.floor(Math.random() * (500)+200 );
			this.wordArray[8] = new Word(position_x, position_y, 95,28, "Images/Telas/Jogo/Palavras/8.png",8);
			
				var position_x = Math.floor(Math.random() * (graphics.canvas.width-200)+40 );
			var position_y = Math.floor(Math.random() * (500)+200 );
			this.wordArray[9] = new Word(position_x, position_y, 59,25, "Images/Telas/Jogo/Palavras/9.png",9);
			
				var position_x = Math.floor(Math.random() * (graphics.canvas.width-200)+40 );
			var position_y = Math.floor(Math.random() * (500)+200 );
			this.wordArray[10] = new Word(position_x, position_y, 89,27, "Images/Telas/Jogo/Palavras/10.png",10);
			
				var position_x = Math.floor(Math.random() * (graphics.canvas.width-200)+40 );
			var position_y = Math.floor(Math.random() * (500)+200 );
			this.wordArray[11] = new Word(position_x, position_y, 86,32, "Images/Telas/Jogo/Palavras/11.png",11);
			
				var position_x = Math.floor(Math.random() * (graphics.canvas.width-200)+40 );
			var position_y = Math.floor(Math.random() * (500)+200 );
			this.wordArray[12] = new Word(position_x, position_y, 72,23, "Images/Telas/Jogo/Palavras/12.png",12);
			
				var position_x = Math.floor(Math.random() * (graphics.canvas.width-200)+40 );
			var position_y = Math.floor(Math.random() * (500)+200 );
			this.wordArray[13] = new Word(position_x, position_y, 164,28, "Images/Telas/Jogo/Palavras/13.png",13);
			
				var position_x = Math.floor(Math.random() * (graphics.canvas.width-200)+40 );
			var position_y = Math.floor(Math.random() * (500)+200 );
			this.wordArray[14] = new Word(position_x, position_y, 80,25, "Images/Telas/Jogo/Palavras/14.png",14);
			
		
	}
	this.setWords();
	
	this.setTrash = function()
	{
			var position_x = Math.floor(Math.random() * (graphics.canvas.width-200)+40 );
			var position_y = Math.floor(Math.random() * (500)+200 );
			this.trashArray[0] = new Trash(position_x, position_y, 50,45, "Images/Telas/Jogo/Lixo/Lixo0.png",0);
			
			var position_x = Math.floor(Math.random() * (graphics.canvas.width-200)+40 );
			var position_y = Math.floor(Math.random() * (500)+200 );
			this.trashArray[1] = new Trash(position_x, position_y, 180,143, "Images/Telas/Jogo/Lixo/Lixo1.png",1);
			
			var position_x = Math.floor(Math.random() * (graphics.canvas.width-200)+40 );
			var position_y = Math.floor(Math.random() * (500)+200 );
			this.trashArray[2] = new Trash(position_x, position_y, 75,97, "Images/Telas/Jogo/Lixo/Lixo2.png",2);
			
			var position_x = Math.floor(Math.random() * (graphics.canvas.width-200)+40 );
			var position_y = Math.floor(Math.random() * (500)+200 );
			this.trashArray[3] = new Trash(position_x, position_y, 60,60, "Images/Telas/Jogo/Lixo/Lixo3.png",3);
			
			var position_x = Math.floor(Math.random() * (graphics.canvas.width-200)+40 );
			var position_y = Math.floor(Math.random() * (500)+200 );
			this.trashArray[4] = new Trash(position_x, position_y, 35,45, "Images/Telas/Jogo/Lixo/Lixo4.png",4);
			
			var position_x = Math.floor(Math.random() * (graphics.canvas.width-200)+40 );
			var position_y = Math.floor(Math.random() * (500)+200 );
			this.trashArray[5] = new Trash(position_x, position_y, 65,62, "Images/Telas/Jogo/Lixo/Lixo5.png",5);
			
			var position_x = Math.floor(Math.random() * (graphics.canvas.width-200)+40 );
			var position_y = Math.floor(Math.random() * (500)+200 );
			this.trashArray[6] = new Trash(position_x, position_y, 79,34, "Images/Telas/Jogo/Lixo/Lixo6.png",6);
			
			var position_x = Math.floor(Math.random() * (graphics.canvas.width-200)+40 );
			var position_y = Math.floor(Math.random() * (500)+200 );
			this.trashArray[7] = new Trash(position_x, position_y, 113,89, "Images/Telas/Jogo/Lixo/Lixo7.png",7);
			
			var position_x = Math.floor(Math.random() * (graphics.canvas.width-200)+40 );
			var position_y = Math.floor(Math.random() * (500)+200 );
			this.trashArray[8] = new Trash(position_x, position_y, 58,60, "Images/Telas/Jogo/Lixo/Lixo8.png",8);
			
			
	}
	this.setTrash();
	
	
	this.setBlankRects = function()
	{
		this.blankArray[0] = new BlankRect(488,262,100,20,0);
		this.blankArray[1] = new BlankRect(392,290,100,20,1);
		this.blankArray[2] = new BlankRect(733, 321, 55, 20, 2);
		this.blankArray[3] = new BlankRect(303, 340, 90, 20, 3);
		this.blankArray[4] = new BlankRect(375, 370, 170, 20,  4);
		this.blankArray[5] = new BlankRect(220, 400, 80, 20, 5);
		this.blankArray[6] = new BlankRect(240, 430, 120, 20, 6);
		this.blankArray[7] = new BlankRect(332, 460, 75, 20, 7);
		this.blankArray[8] = new BlankRect(485, 490, 145, 20, 8);
		this.blankArray[9] = new BlankRect(408, 510, 50, 20, 9);
		this.blankArray[10] = new BlankRect(210, 540, 80, 20, 10);
		this.blankArray[11] = new BlankRect(240, 574, 100, 20, 11);
		this.blankArray[12] = new BlankRect(600, 602, 70, 20, 12);
		this.blankArray[13] = new BlankRect(580, 625, 150, 20, 13);
		this.blankArray[14] = new BlankRect(253, 652, 70, 20, 14);
	}
	
	
	this.setOutScreenPosition = function()
	{
		for ( var i=0; i< this.blankArray.length; i++)
		{
			this.blankArray[i] = new BlankRect(-50,-50,0,0,i);
		}
	}
	this.setOutScreenPosition();
	
	
	
	this.setMousePosition = function(mouseX, mouseY)
	{
		this.mouse_x = mouseX - graphics.canvas.offsetLeft;
		this.mouse_y = mouseY - graphics.canvas.offsetTop;
		//console.log(this.mouse_x, this.mouse_y);
	}
	
	this.MouseClick = function()
	{
		if(this.click && this.clickedWord == false && this.clickedTrash == false && !this.transitionWord)
		{
			for(var i=0; i< this.wordArray.length;i++)
			{
				if(collisionManager.mouse_vs_word(this.wordArray[i], this.mouse_x,this.mouse_y))
				{
					this.clickedWord = true;
				}
			}
			for(var i=0; i< this.trashArray.length;i++)
			{
				if(collisionManager.mouse_vs_trash(this.trashArray[i], this.mouse_x,this.mouse_y))
				{
					this.clickedTrash = true;
				}
			}
		}
		
		else
		{
			if(this.wordSelected == null)
			return;
			
			this.setPositionword();
			
			//this.GoToStartPosition(this.wordArray[this.wordSelected]);
		}
	}
	
	this.UpdateCorrectWords = function ()
	{
		if(this.StopMoveTale)
		for ( var i=0; i<this.correctWords.length; i++)
		{
			this.wordArray[this.correctWords[i]].x = this.blankArray[this.correctWords[i]].x;
			this.wordArray[this.correctWords[i]].y = this.blankArray[this.correctWords[i]].y;
		
		}
		
		else if(this.canDrawTale == false)
		for ( var i=0; i<this.correctWords.length; i++)
		{
			this.wordArray[this.correctWords[i]].x = this.blankArray[this.correctWords[i]].x;
			this.wordArray[this.correctWords[i]].y = this.blankArray[this.correctWords[i]].y;
		
		}
	}
	
	this.setPositionword = function ()
	{
		if(this.clickedWord)
		return;
		
		if(this.canDrawTale)
		{
			if(collisionManager.word_vs_blank(this.wordArray[this.wordSelected],this.blankArray[this.wordSelected]))
			{
				this.correctWords[this.correctWords.length] = this.wordSelected;
				this.wordArray[this.wordSelected].start_x = 100;
				this.wordArray[this.wordSelected].start_y = 100;
				this.canDrawTale = false;
				this.StopMoveTale = false;
				this.tale.y = 0; 
				this.right.canFade = true;
				this.score += 1;
				this.setOutScreenPosition();
				this.transitionWord = true;
				this.right_sound.play();
				for (var i=0; i<this.wordArray.length;i++)
				{
					if(this.wordSelected == this.wordArray[i].id)
					{
						console.debug("nada acontece com a palavra:"+this.wordArray[i].id);
					}
					
					else
					{	
						this.GoToStartPosition(this.wordArray[i]);
					}
				
				}
				this.transitionWord = false;
				for (var i=0; i<this.trashArray.length;i++)
				{
					this.trashArray[i].x = this.trashArray[i].start_x;
					this.trashArray[i].y = this.trashArray[i].start_y;
				}
			}
			else
			{
				this.tale.y = 0;
				this.StopMoveTale = false;
				this.canDrawTale = false;
				this.wrong.canFade = true;
				this.transitionWord = true;
				this.setOutScreenPosition();
				this.wrong_sound.play();
			}
		}
		
	}
	this.transitionWord = false;
	
	this.YouWon = function()
	{
		if(this.score >= 15)
		{
			this.audio.pause();
			this.audio_background.pause();
			sceneManager.changeScene("win");
		}
	}
	
	this.YouLose = function()
	{
		if(this.time <= 0)
		{
			this.audio.pause();
			this.audio_background.pause();
			sceneManager.changeScene("lose");
		}
	}
	
	this.returnToInitalPosition = function()
	{
		
		if(this.transitionWord)
		{
			for (var i=0; i<this.wordArray.length;i++)
				{
				
					if(this.wordSelected == this.wordArray[i].id)
					{
						console.debug("nada acontece com a palavra:"+this.wordArray[i].id);
					}
					
					else
					{
							
						this.GoToStartPosition(this.wordArray[i]);
					}
				}
		
		
			
			for (var i=0; i<this.trashArray.length;i++)
				{
					this.trashArray[i].x = this.trashArray[i].start_x;
					this.trashArray[i].y = this.trashArray[i].start_y;
				}
				
			if(this.wordArray[this.wordSelected].x >= this.wordArray[this.wordSelected].start_x - 10 &&
				this.wordArray[this.wordSelected].x <= this.wordArray[this.wordSelected].start_x + 10 &&
				this.wordArray[this.wordSelected].y >= this.wordArray[this.wordSelected].start_y - 10 &&
				this.wordArray[this.wordSelected].y <= this.wordArray[this.wordSelected].start_y + 10)
				this.transitionWord = false;
				
			//declarar a velocidade x para retonar a posição inicial
			if(this.wordArray[this.wordSelected].x < this.wordArray[this.wordSelected].start_x)
			this.wordArray[this.wordSelected].x += 10;
			if(this.wordArray[this.wordSelected].x > this.wordArray[this.wordSelected].start_x)
			this.wordArray[this.wordSelected].x += -10;
			
			//declarar a velocidade y para retonar a posição inicial
			if(this.wordArray[this.wordSelected].y < this.wordArray[this.wordSelected].start_y)
			this.wordArray[this.wordSelected].y += +5;
			 if(this.wordArray[this.wordSelected].y > this.wordArray[this.wordSelected].start_y)
			this.wordArray[this.wordSelected].y += -5;
			
			
		}
			
	}
	
	this.RightAndWrongFollow = function ()
	{
		this.right.x = this.mouse_x + 7;
		this.right.y = this.mouse_y - 40;
		this.wrong.x = this.mouse_x + 7;
		this.wrong.y = this.mouse_y - 40;
	}
	
	this.GoToStartPosition = function (word)
	{
		word.x = word.start_x;
		word.y = word.start_y;
	}
	
	this.WordFollowMouse = function ()
	{
		if(this.clickedWord)
		{
				this.wordArray[this.wordSelected].x = this.mouse_x - 30;
				this.wordArray[this.wordSelected].y = this.mouse_y - 15;
		}
		else if(this.clickedTrash)
		{
				this.trashArray[this.trashSelected].x = this.mouse_x - 30;
				this.trashArray[this.trashSelected].y = this.mouse_y - 15;
		}
		
	}
	
	this.DrawTimeBar = function()
	{
		graphics.drawRect(100,60,6*this.time,40,this.color_bar);
		graphics.strokeRect(100,60,900,40,"black",3);
	}
	
	
	this.UpdateTimeBar = function()
	{
		switch(this.time)
		{
			 case 104:
				this.color_bar = "#006400";
				break;
			case 100:
				this.color_bar = "#008000";
				break;
			case 90:
				this.color_bar = "#228B22";
				break;
			 case 80:
				this.color_bar = "#ADFF2F";
				break;
			 case 70:
				this.color_bar = "#9ACD32";
				break;
			 case 60:
				this.color_bar = "#FFFF00";
				break;
			 case 50:
				this.color_bar = "#FFA500";
				break;
			 case 40:
				this.color_bar = "#FF8C00";
				break;
			 case 30:
				this.color_bar = "#FF4500";
				break;
			 case 20:
				this.color_bar = "#FF0000";
				break;
		}
	}
	
	this.DecreaseTime  = function()
	{
		if(this.time > 0)
		{
			this.time -= 1;
			setTimeout("sceneManager.scene.DecreaseTime()",1000);
		}
	}
	this.DecreaseTime();
	
	this.MouseOverIcon = function ()
	{
		if(this.clickedWord)
		{
			if(collisionManager.mouse_vs_button(this.tale_icon, this.mouse_x, this.mouse_y))
			{
				this.canDrawTale = true; 
			}
		}
	}
	
	this.AllWordsSplice = function()
	{
		if(this.canDrawTale)
		{
			for (var i=0; i<this.wordArray.length;i++)
			{
				this.wordArray[i].x = -500;
				this.wordArray[i].y = -500;
			}
			for (var i=0; i<this.trashArray.length;i++)
			{
				this.trashArray[i].x = -500;
				this.trashArray[i].y = -500;
			}
		}
	}
	this.DrawTale = function()
	{
		if(this.canDrawTale && this.StopMoveTale == false)
		{
			this.tale.draw();
			this.setBlankRects();
			this.chain.draw();
			this.MoveTale();
		}
		else if (this.canDrawTale && this.StopMoveTale == true)
		{
			this.tale.draw();
			this.chain.draw();
			this.setBlankRects();
			this.nail.draw();
			this.nail2.draw();
		}
		
	}

	
	
	
	this.draw = function ()
	{	
		graphics.ctx.clearRect(0,0,graphics.canvas.width,graphics.canvas.height);
		this.background.draw();
		this.clock.draw();
		this.tale_icon.draw();
		this.DrawTimeBar();
		this.DrawTale();
		
		
		for ( var i=0; i<this.wordArray.length; i++)
		{
			this.wordArray[i].draw();
			this.blankArray[i].draw();
		}
		for ( var i=0; i<this.trashArray.length;i++)
		{
		this.trashArray[i].draw();
		}
				this.wrong.draw();
				this.right.draw();	
	}
	
	
	this.update = function ()
	{
		this.ClickPlaySound();
		this.UpdateTimeBar();
		this.MouseClick();
		this.AllWordsSplice();
		this.WordFollowMouse();
		this.MouseOverIcon();
		this.YouWon();
		this.YouLose();
		this.RightAndWrongFollow();
		
		this.right.FadeOut();
		this.right.FadeIn();
		
		this.wrong.FadeOut();
		this.wrong.FadeIn();
		
		this.returnToInitalPosition();
		this.UpdateCorrectWords();
		console.log(this.transitionWord);
	}
	



}