var Sun = function(x,y,w,h,image,speed_y)
{
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.speed_y = speed_y;
	this.touchedTop = false;
	
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