var Animation = function()
{
	
	this.button_menu = new Button(graphics.canvas.width - 320, graphics.canvas.height - 100, 280, 60, "Images/Telas/Animacao/pular.png");
	//fade.starting = true;
	
	this.button_menu.canClicked = true;
	
	this.mouse_x;
	this.mouse_y;
	
	this.click = false;
	
	//som de vitoria
	this.animation = new Object(0,0,graphics.canvas.width, graphics.canvas.height,"Images/Animacao/animacao_00001.jpg");
	
	this.contador = 1;
	this.nameImage = "0000";
	
	//som de derrota
	this.audio = new Audio();
	this.audio.src = "Sounds/AudioAnimacao.mp3";
	this.audio.play();
	
	fade.ending = false;
	
	
	this.animationUpdate = function()
	{
			if(this.contador==410)
			return;
			
			this.contador += 1;
		
			if(this.contador == 10)
			{
			this.nameImage = "000";

			
			}
			
			
			if(this.contador == 100)
			this.nameImage = "00";
			
			if(this.contador == 410)
			{
			this.audio.pause();
					sceneManager.changeScene("menu");
					}
						
						
			this.animation.img.src = "Images/Animacao/animacao_"+this.nameImage + this.contador +".jpg";

		
	}
	
	
	this.setMousePosition = function (mouseX,mouseY)
	{
		this.mouse_x = mouseX - graphics.canvas.offsetLeft;
		this.mouse_y = mouseY - graphics.canvas.offsetTop;
	}
	
	this.MouseOver = function()
	{
	
		if(collisionManager.mouse_vs_button(this.button_menu, this.mouse_x, this.mouse_y))
			{		
		
				this.button_menu.x = graphics.canvas.width - 320 - 10;
				this.button_menu.y = graphics.canvas.height - 100 - 10;
				this.button_menu.w =   300;
				this.button_menu.h =	80;
				if(this.click == true)
				{
					this.audio.pause();
					sceneManager.changeScene("menu");
						
				}
			}
			else 
			{
				this.button_menu.x = graphics.canvas.width - 320;
				this.button_menu.y = graphics.canvas.height - 100 ;
				this.button_menu.w =   280 ;
				this.button_menu.h =	60;
			}
	}
	
	this.draw = function()
	{
	
		this.animation.draw();
			this.button_menu.draw();
			
	}
	
	
	
	this.update = function()
	{
		this.MouseOver();
		this.animationUpdate();
		fade.update();
	}
	
	
}

	
	
