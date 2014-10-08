var Defeat = function()
{
	this.background = new Background("Images/Telas/Vitoria/TelaVitoria.png");
	this.button_menu = new Button(graphics.canvas.width - 320, graphics.canvas.height - 100, 300, 80, "Images/Botoes/Menu.png");
	
	this.starM = new Button(graphics.canvas.width/2 - 100/2,600,100,100,"Images/Telas/Vitoria/EstrelaMSS.png",0,10);
	this.starE = new Button(0,420,100,100,"Images/Telas/Vitoria/EstrelaESS.png",15,10);
	this.starD = new Button(graphics.canvas.width - 100,420,100,100,"Images/Telas/Vitoria/EstrelaMSS.png",15,10);
	
	this.victory = new Button(graphics.canvas.width/2 - 180/2,0,180,80,"Images/Telas/Vitoria/Vitoria.png",15,10);
	
	this.mouse_x;
	this.mouse_y;
	
	
	//button startM = start       credit = direito    instrucoes = esquedsa
	this.StarMoviment = function ()
	{	
		if(this.starM.y > 400)
		{
		   this.starM.y -= this.starM.speed_y;
		}
		 if( this.starM.y <= 400)
		{
			this.starM = new Button(this.starM.x,this.starM.y,150,140,"Images/Telas/Vitoria/EstrelaMCS.png",0,10);
		}
		
		if(this.starD.x >= graphics.canvas.width/2 - 100/2 - 100)
		{
			this.starD.x -= this.starD.speed_x;	
		}
		 if(this.starD.x <= graphics.canvas.width/2 - 100/2 - 100)
		{
			this.starD = new Button(this.starD.x,this.starD.y,150,140,"Images/Telas/Vitoria/EstrelaDCS.png",0,10);
		}
		
		
		if(this.starE.x < graphics.canvas.width/2 - 100/2 + 100)
		{
		this.starE.x += this.starE.speed_x;	
		}
		else if(this.starE.x >= graphics.canvas.width/2 - 100/2 + 100)	
		{
			this.starE = new Button(this.starE.x,this.starD.y,150,140,"Images/Telas/Vitoria/EstrelaECS.png",0,10);
		}	
	}
	
	this.StarUpAndDown = function()
	{
		
	}
	
	this.VictoryMoviment = function()
	{
		if(this.victory.y <= 300)
		this.victory.y += this.victory.speed_y;
		
		
	}
	
	this.MouseOver = function()
	{
		if(collisionManager.mouse_vs_button(this.button_menu, this.mouse_x, this.mouse_y))
			{		
				this.button_menu.x = graphics.canvas.width - 320;
				this.button_menu.y = graphics.canvas.height - 100 - 10;
				this.button_menu.w =   320;
				this.button_menu.h =	100;
				if(this.click == true)
				sceneManager.changeScene("menu");
			}
			else 
			{
				this.button_menu.x = graphics.canvas.width - 320;
				this.button_menu.y = graphics.canvas.height - 100 ;
				this.button_menu.w =   300 ;
				this.button_menu.h =	80;
			}
	}
	
	this.setMousePosition = function (mouseX, mouseY)
	{
		this.mouse_x = mouseX;
		this.mouse_y = mouseY;
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
	}
	
	
}