var Menu = function ()
{
	this.background = new Background("Images/TelaInicial.png");
	this.sun = new Sun(800,400,150,150,"Images/Sol.png",15);
	this.cloud1 = new Cloud(800,125,160,80,"Images/Nuvem1.png",8);
	this.cloud2 = new Cloud(260,160,160,80,"Images/Nuvem2.png",2);
	this.cloud3 = new Cloud(750,50,160,80,"Images/Nuvem3.png",2);
	this.button_start = new Button(graphics.canvas.width/2 - 300/2,600,300,80,"Images/Botoes/Jogar_SS.png",0,10);
	this.button_credit = new Button(graphics.canvas.width/2 - 300/2 + 350,350,300,80,"Images/Botoes/Creditos_SS.png",10,0);
	this.button_instruction = new Button(graphics.canvas.width/2 - 300/2 - 350,450,300,80,"Images/Botoes/Instrucoes_SS.png",10,0);
	this.logo = new Button(graphics.canvas.width/2 - 300/2,0,300,80,"Images/Botoes/Logo.png",0,10);
	
	//Som de fundo
	this.audio = new Audio();
	this.audio.src = "Sounds/Menu.wav";
	this.audio.play();
	this.audio.loop = true;
	//som do mouse
	this.audio_click = new Audio();
	this.audio_click.src = "Sounds/Clique.wav";

	graphics.ctx.globalAlpha = 0;
	
	fade.starting = true;
	this.mouse_x;
	this.mouse_y;
		
	this.click = false;
	
	this.canPlayClick = true;
	this.ClickPlaySound = function ()
	{
		if(this.click && this.canPlayClick)
		{
			this.audio_click.play();
			this.canPlayClick = false;
		}
	}
	
	this.ButtonMoviment = function ()
	{	
		if(this.button_start.y > 250)
		this.button_start.y -= this.button_start.speed_y;
		else if( this.button_start.y <= 250)
		{
			this.button_start.canClicked = true;
		}
		
		
		if(this.button_credit.x > graphics.canvas.width/2 - 300/2)
		this.button_credit.x -= this.button_credit.speed_x;	
		else if(this.button_credit.x <= graphics.canvas.width/2 - 200/2)
		{
			this.button_credit.canClicked = true;
		}
		if(this.button_instruction.x < graphics.canvas.width/2 - 300/2)
			this.button_instruction.x += this.button_instruction.speed_x;	
		else if(this.button_instruction.x >= graphics.canvas.width/2 - 300/2)	
			this.button_instruction.canClicked = true;
		
		
	}
	this.SunMoviment = function()
	{
		if(this.sun.y > 25 && this.sun.touchedTop == false) 
		{
			this.sun.y -= this.sun.speed_y;
			this.sun.speed_y -= 0.15;
			
			if(this.sun.y <= 25)
			{
				this.sun.speed_y = 5;
				this.sun.touchedTop = true;
			}
		}
		
		if(this.sun.touchedTop)
		{
			this.sun.y += this.sun.speed_y;
			this.sun.speed_y -= 0.25;
			if(this.sun.y >= 40)
			this.sun.touchedTop = null;
		}
	}	
	this.CloudMoviment = function()
	{
		if(this.cloud1.x > 800)
		{
			this.cloud1.x -= this.cloud1.speed_x;
			this.cloud1.speed_x -= 0.1;
		}
		this.cloud2.x += this.cloud2.speed_x;
		this.cloud3.x -= this.cloud3.speed_x;
		
		//movimentação do lado direito da nuvem 2 
		if(this.cloud2.x > 1075)
		{
			this.cloud2.inTransition = true;
			this.cloud2.y -= 2;
			this.cloud2.x -= this.cloud2.speed_x;
			if(this.cloud2.y <= 50 && this.cloud2.inTransition == true)
			{
				this.cloud2.speed_x = -2;
				this.cloud2.inTransition = false;
			}
		}
		//lado esquerdo da nuvem 2
		if(this.cloud2.x < -170)
		{
			this.cloud2.inTransition = true;
			this.cloud2.y += 2;
			this.cloud2.x -= this.cloud2.speed_x;
			if(this.cloud2.y >= 160 && this.cloud2.inTransition == true)
			{
				this.cloud2.speed_x = 2;
				this.cloud2.inTransition = false;
			}
		}
		
		//lado direito da nuvem 3
		if(this.cloud3.x > 1075)
		{
			this.cloud3.inTransition = true;
			this.cloud3.y -= 2;
			this.cloud3.x += this.cloud3.speed_x;
			if(this.cloud3.y <= 50 && this.cloud3.inTransition == true)
			{
				this.cloud3.speed_x = 2;
				this.cloud3.inTransition = false;
			}
		}
		
		//lado esquerdo da nuvem 3
		if(this.cloud3.x < -170)
		{
			this.cloud3.inTransition = true;
			this.cloud3.y += 2;
			this.cloud3.x += this.cloud3.speed_x;
			if(this.cloud3.y >= 160 && this.cloud3.inTransition == true)
			{
				//console.log("aaa");
				this.cloud3.speed_x = -2;
				this.cloud3.inTransition = false;
			}
		}
		
	}
	this.CloudAddShadown = function()
	{
		if(this.button_start.canClicked == true)
		{
			this.button_start.img.src = "Images/Botoes/Jogar_CS.png";
		}
		if(this.button_start.canClicked == true)
		{	
			this.button_credit.img.src = "Images/Botoes/Creditos_CS.png";	
		}
		if(this.button_start.canClicked == true)
		{
			this.button_instruction.img.src = "Images/Botoes/Instrucoes_CS.png";
		}
	}
	
	this.setMousePosition = function (mouseX,mouseY)
	{
		this.mouse_x = mouseX - graphics.canvas.offsetLeft;
		this.mouse_y = mouseY - graphics.canvas.offsetTop;
	}
	
	this.MouseOver = function()
	{
		
		if(this.button_start.canClicked == true)
		{		
			if(collisionManager.mouse_vs_button(this.button_start, this.mouse_x, this.mouse_y))
			{		
				this.button_start.x = graphics.canvas.width/2 - 300/2 - 10;
				this.button_start.y = 250 - 10;
				this.button_start.w =   320;
				this.button_start.h =	100;
				if(this.click == true)
				{
					this.audio.pause();
					fade.goToScene = "game";
					fade.ending = true;
				}
			}
			else 
			{
				this.button_start.x = graphics.canvas.width/2 - 300/2;
				this.button_start.y = 250 ;
				this.button_start.w =   300 ;
				this.button_start.h =	80;
			}
		}
		
		if(this.button_credit.canClicked == true)
		{
			if(collisionManager.mouse_vs_button(this.button_credit, this.mouse_x, this.mouse_y))
			{
				this.button_credit.x = graphics.canvas.width/2 - 300/2 - 10;
				this.button_credit.y = 350 - 10;
				this.button_credit.w =  320 ;
				this.button_credit.h =	100;
				if(this.click == true)
				{
					fade.goToScene = "credit";
					fade.ending = true;
				}
			}
			else 
			{
				this.button_credit.x = graphics.canvas.width/2 - 300/2;
				this.button_credit.y =  350;
				this.button_credit.w =  300 ;
				this.button_credit.h =	80;
			}
		}
		
		if(this.button_instruction.canClicked == true)
		{
			if(collisionManager.mouse_vs_button(this.button_instruction, this.mouse_x, this.mouse_y))
			  {
				this.button_instruction.x = graphics.canvas.width/2 - 300/2 - 10;
				this.button_instruction.y = 450 - 10;
				this.button_instruction.w =  320 ;
				this.button_instruction.h =	100;
				if(this.click == true)
				{
					this.audio.pause();
					fade.goToScene = "instruction";
					fade.ending = true;
				}
			}
			else 
			{
				this.button_instruction.x = graphics.canvas.width/2 - 300/2 ;
				this.button_instruction.y = 450;
				this.button_instruction.w = 300 ;
				this.button_instruction.h =	80;
			}
		}
	}
	
	this.update = function()
	{
		this.SunMoviment();
		this.CloudMoviment();
		this.ButtonMoviment();
		this.MouseOver();
		this.CloudAddShadown();
		this.ClickPlaySound();
		fade.update();	
	}
	
	this.draw = function()
	{
		this.background.draw();
		this.sun.draw();
		this.logo.draw();
		this.cloud1.draw();
		this.cloud2.draw();
		this.cloud3.draw();
		this.button_start.draw();
		this.button_credit.draw();
		this.button_instruction.draw();
		
		// fade.update();
		// fade.draw();
		
	}
	
}

