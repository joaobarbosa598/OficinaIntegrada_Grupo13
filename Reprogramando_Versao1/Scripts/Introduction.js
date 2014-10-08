var Introduction = function()
{
	this.background = new Background("Images/Telas/introducao/background.png");
	this.thing1 = new Object(graphics.canvas.width - graphics.canvas.width/2 , graphics.canvas.height - 80 - 150, graphics.canvas.width/2, 80,"Images/Telas/introducao/ocoisa1.png");
	this.thing2 = new Object(0, 0, graphics.canvas.width/2, 80,"Images/Telas/introducao/ocoisa2.png");
	
	this.mouse_x;
	this.mouse_y;
	
	this.contador = 0;
	this.setMousePosition = function (mouseX,mouseY)
	{
		this.mouse_x = mouseX - graphics.canvas.offsetLeft;
		this.mouse_y = mouseY - graphics.canvas.offsetTop;
	}
	
	this.draw = function()
	{
		this.background.draw();
		this.thing1.draw();
		this.thing2.draw();
		console.log("a"+ graphics.ctx.globalAlpha);
	}
	
	this.ThingMove = function()
	{
		if(this.thing1.y >= 220)
		this.thing1.y -= 3;
		
		if(this.thing2.y <= 300)
		{
			this.thing2.y += 3;
		}
		else
		this.contador ++;
		
	}
	
	
	
	this.update = function()
	{
		if(this.contador >= 30)
		{
			fade.goToScene = "animation";
			fade.ending = true;
		}
		
		this.ThingMove();
	}
	
}