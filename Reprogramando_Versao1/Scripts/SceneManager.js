var SceneManager = function ()
{
	this.currentScene;
	this.scene;
	this.nextScene;
	
	this.setup = function ()
	{
		this.scene = new Introduction()
		this.currentScene = "introduction";
	}
	
	this.update = function()
	{
		this.scene.update();
		fade.update();
	}
	
	this.draw = function()
	{
		graphics.ctx.clearRect(0,0,graphics.canvas.width,graphics.canvas.height)
		this.scene.draw();
	}
	
	this.changeScene = function(option)
	{
		fade.ending = true;
		this.nextScene = option;
		
		if(this.nextScene == "game")
			{
				fade.canChange = false;
				fade.ending = false;
				this.scene = new Game();
				this.currentScene = "game";
			}
			
			else if(this.nextScene == "credit"  )
			{
				this.scene = new Credit();
				this.currentScene = "credit";
			}	
			
			else if(this.nextScene == "menu" )
			{
				fade.canChange = false;
				fade.ending = false;
				console.debug("aeuhae");
				this.scene = new Menu();
				this.currentScene = "menu";
			}
			
			else if(this.nextScene == "instruction")
			{
				fade.ending = true;
				graphics.ctx.clearRect(0,0,graphics.canvas.width,graphics.canvas.height)
				this.scene = new Instruction();
				this.currentScene = "instruction";			
			}	
			
			else if(this.nextScene == "win")
			{
				fade.ending = true;
				graphics.ctx.clearRect(0,0,graphics.canvas.width,graphics.canvas.height)
				this.scene = new Win();
				this.currentScene = "win";				
			}
			
			else if(this.nextScene == "lose")
			{
				fade.ending = true;
				graphics.ctx.clearRect(0,0,graphics.canvas.width,graphics.canvas.height)
				this.scene = new Lose();
				this.currentScene = "lose";				
			}
			else if(this.nextScene == "animation")
			{
				fade.ending = true;
				graphics.ctx.clearRect(0,0,graphics.canvas.width,graphics.canvas.height)
				this.scene = new Animation();
				this.currentScene = "animation";				
			}
	}
	
	this.GoToScene = function()
	{
		
	}
	
	this.loop = function()
	{
		sceneManager.GoToScene();
		fade.update();
		setTimeout(sceneManager.loop,32);
	}
}



var sceneManager = new SceneManager();
sceneManager.setup();
