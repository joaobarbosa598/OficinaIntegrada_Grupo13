var BlankRect = function (x,y,w,h,id)
{
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.id = id;
	
	
	this.img = new Image();
	this.img.src = "Images/Blank.png";
	
	this.draw = function()
	{
		graphics.ctx.save();	
		graphics.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);	
	}
	
}