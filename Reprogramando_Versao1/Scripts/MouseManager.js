var MouseManager = function()
{
	this.x;
	this.y;
	this.mousepressed;
	
	this.button1;
	this.button2;
	this.button3;
	
	//Som do click
	this.audio_click = new Audio();
	this.audio_click.src = "Sounds/Clique.wav";
	
	
	
	this.doMouseDown = function (e)
	{
		sceneManager.scene.click = true;
	}
	
	this.mouseMove = function(e)
	{
			e.x = e.x - graphics.canvas.offsetLeft;
			e.y = e.y - graphics.canvas.offsetTop;
			sceneManager.scene.setMousePosition(e.x, e.y);	
	}
	
	this.doMouseUp = function (e)
	{
		sceneManager.scene.canPlayClick = true;
		sceneManager.scene.click = false;
		sceneManager.scene.clickedWord =false;
		sceneManager.scene.clickedTrash =false;
	}
	
}

var mouseManager = new MouseManager();

graphics.canvas.addEventListener('mousedown', mouseManager.doMouseDown, true);	
graphics.canvas.addEventListener("mousemove", mouseManager.mouseMove, false);
graphics.canvas.addEventListener('mouseup', mouseManager.doMouseUp, true);
