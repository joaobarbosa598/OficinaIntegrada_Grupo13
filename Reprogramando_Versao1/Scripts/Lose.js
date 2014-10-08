var Lose = function()
{
	this.background = new Background("Images/Telas/Derrota/Background.png");
	this.button_menu = new Button(graphics.canvas.width - 320, graphics.canvas.height - 100, 300, 80, "Images/Botoes/Menu.png");
	
	this.starM = new Button(graphics.canvas.width/2 - 100/2,600,100,100,"Images/Telas/Derrota/Abacaxi.png",0,10);
	this.starE = new Button(0,420,100,100,"Images/Telas/Derrota/Abacaxi.png",15,10);
	this.starD = new Button(graphics.canvas.width - 100,420,100,100,"Images/Telas/Derrota/Abacaxi.png",15,1);
	
	this.victory = new Button(graphics.canvas.width/2 - 260/2,0,280,120,"Images/Telas/Derrota/VocePerdeu.png",15,5);
	
	this.mouse_x;
	this.mouse_y;
	
	//som de derrota
	this.audio_defeat = new Audio();
	this.audio_defeat.src = "Sounds/SomDerrota.mp3";
	this.audio_defeat.play();
	this.audio_defeat.loop = true;
	
	this.canMoveStars = 0;
	//button startM = start       credit = direito    instrucoes = esquedsa
	this.StarMoviment = function ()
	{	
		if(this.canMoveStars < 50)
		{
			if(this.starM.y > 400)
			{
			   this.starM.y -= this.starM.speed_y;
			}
			 if( this.starM.y <= 400)
			{
				this.starM = new Button(this.starM.x,this.starM.y,100,100,"Images/Telas/Derrota/Abacaxi.png",0,10);
				this.canMoveStars++;
				this.starM.speed_y = 1;
			}
			
			if(this.starD.x >= graphics.canvas.width/2 - 100/2 - 100)
			{
				this.starD.x -= this.starD.speed_x;	
			}
			 if(this.starD.x <= graphics.canvas.width/2 - 100/2 - 100)
			{
				this.starD = new Button(this.starD.x,this.starD.y,100,100,"Images/Telas/Derrota/Abacaxi.png",0,1);
				this.canMoveStars++;
			}
			
			
			if(this.starE.x < graphics.canvas.width/2 - 100/2 + 100)
			{
			this.starE.x += this.starE.speed_x;	
			}
			else if(this.starE.x >= graphics.canvas.width/2 - 100/2 + 100)	
			{
				this.starE = new Button(this.starE.x,this.starD.y,100,100,"Images/Telas/Derrota/Abacaxi.png",0,1);
				this.canMoveStars++;
			}
		}
	}
	this.otherStarMove = false;
	this.StarUpAndDown = function()
	{
		
		this.starM.y += -this.starM.speed_y;
			if(this.starM.y <= 390)
			{
			this.starM.speed_y *= -1;
			this.otherStarMove = true;
			}
			
			if(this.starM.y >= 410)
			this.starM.speed_y *= -1
			
			
			if(!this.otherStarMove)
			return;
			
			this.starE.y += -this.starE.speed_y;
			if(this.starE.y <= 410)
			this.starE.speed_y *= -1;
			
			if(this.starE.y >= 430)
			this.starE.speed_y *= -1
			
			
			this.starD.y += -this.starD.speed_y;
			if(this.starD.y <= 410)
			this.starD.speed_y *= -1;
			
			if(this.starD.y >= 430)
			this.starD.speed_y *= -1
		
	}
	
	this.VictoryMoviment = function()
	{
		if(this.victory.y <= 200)
		this.victory.y += this.victory.speed_y;
		
		
	}
	
	this.MouseOver = function()
	{
		if(collisionManager.mouse_vs_button(this.button_menu, this.mouse_x, this.mouse_y))
			{		
				this.button_menu.x = graphics.canvas.width - 320 - 10;
				this.button_menu.y = graphics.canvas.height - 100 - 10;
				this.button_menu.w =   320;
				this.button_menu.h =	100;
				if(this.click == true)
				{
					this.audio_defeat.pause();
				sceneManager.changeScene("menu");
				}
			}
			else 
			{
				this.button_menu.x = graphics.canvas.width - 320;
				this.button_menu.y = graphics.canvas.height - 100 ;
				this.button_menu.w =   300 ;
				this.button_menu.h =	80;
			}
	}
	
	this.setMousePosition = function (mouseX,mouseY)
	{
		this.mouse_x = mouseX - graphics.canvas.offsetLeft;
		this.mouse_y = mouseY - graphics.canvas.offsetTop;
	}
	
	this.draw = function()
	{
		this.background.draw();
		this.button_menu.draw();
		this.starM.draw();
		this.starE.draw();
		this.starD.draw();
		this.victory.draw();
	}
	
	this.update = function()
	{
		this.MouseOver();
		this.StarMoviment();
		this.VictoryMoviment();
		if(this.canMoveStars >= 50)
		this.StarUpAndDown();
	}
	
	
}