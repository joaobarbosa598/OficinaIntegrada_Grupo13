var Fade = function()
{
	this.starting = true;
	this.ending = false;
	this.alpha = true;
	this.canChange = false;
	graphics.ctx.globalAlpha = 0
	this.goToScene = "";
	
	this.update =  function()
	{
		this.fadein();
		this.FadeOut();
	}

	
	this.fadein = function()
	{	
		if(this.starting)
		{
			graphics.ctx.globalAlpha +=  0.01;
			if(graphics.ctx.globalAlpha >= 0.95)
			{
				graphics.ctx.globalAlpha = 1;
				this.starting = false;
			}
		}
	}
	
	this.FadeOut = function()
	{
		if(this.ending)
		{
			console.log(graphics.ctx.globalAlpha)
			graphics.ctx.globalAlpha -= 0.05;
			if(graphics.ctx.globalAlpha <= 0.05)
			{
				graphics.ctx.globalAlpha = 0;
				this.ending = false;
				this.canChange = true;
				sceneManager.changeScene(this.goToScene);
				this.starting = true;
			}
		}
	}
			
}

var fade = new Fade();