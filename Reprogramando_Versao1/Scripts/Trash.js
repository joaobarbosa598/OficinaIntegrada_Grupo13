var Trash = function(x,y,w,h,image,id)
{
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.id = id;
	
	this.start_x = x;
	this.start_y = y;
	
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