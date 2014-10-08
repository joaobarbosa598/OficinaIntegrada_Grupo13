var Background = function(image)
{
	this.x = 0;
	this.y = 0;
	this.w = graphics.canvas.width;
	this.h = graphics.canvas.height;
	
	this.img = new Image();
	this.img.src = image;
	
	this.draw = function()
	{
		graphics.ctx.save();	
		graphics.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);	
	}
	
	this.update = function()
	{}
}