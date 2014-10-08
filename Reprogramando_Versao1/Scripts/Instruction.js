var Instruction = function()
{
	this.background = new Background("Images/Telas/Instrucoes_background.png");
	this.button_menu = new Button(graphics.canvas.width - 320, graphics.canvas.height - 100, 280, 60, "Images/Botoes/Menu.png");
	
	
	this.mouse_x;
	this.mouse_y;
	
	// fade.starting = true;
	fade.ending = false;
	
	this.MouseOver = function()
	{
		if(collisionManager.mouse_vs_button(this.button_menu, this.mouse_x, this.mouse_y))
			{		
				this.button_menu.x = graphics.canvas.width - 320 - 10;
				this.button_menu.y = graphics.canvas.height - 100 - 10;
				this.button_menu.w =   300;
				this.button_menu.h =	80;
				if(this.click == true)
				sceneManager.changeScene("menu");
			}
			else 
			{
				this.button_menu.x = graphics.canvas.width - 320;
				this.button_menu.y = graphics.canvas.height - 100 ;
				this.button_menu.w =   280 ;
				this.button_menu.h =	60;
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
	}
	
	this.update = function()
	{
		this.MouseOver();
	}
	
	
}