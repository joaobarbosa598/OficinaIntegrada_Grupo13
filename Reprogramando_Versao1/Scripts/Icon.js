var Icon = function(x,y,w,h,image,speed_x,speed_y)
{
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.speed_x = speed_x;
	this.speed_y = speed_y;
	this.inTransition = false;
	
	this.img = new Image();
	this.img.src = image;
	this.alpha = 1;
	
	this.draw = function()
	{
		graphics.ctx.save();
		graphics.ctx.globalAlpha = this.alpha;	
		graphics.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
		graphics.ctx.restore();
	}
	
	this.update = function()
	{}
	
	this.FadeIn = function()
	{
	
		if(this.canFade == false)
		{
			if(this.alpha <= 0.05)
			{
				this.alpha = 0;
			this.canFade = null;
			}
			else
			this.alpha -= 0.05;
		}
		
	}
	
	this.FadeOut = function()
	{
		if(this.canFade)
		{
			if(this.alpha >= 0.95)
				this.canFade = false;
			else
			this.alpha += 0.05;
		}
			
	}
}