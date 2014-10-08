var CollisionManager = function ()
{
	this.mouse_vs_word = function (word,mouseX,mouseY)
	{
		if(mouseX >= word.x && mouseX <= word.x + word.w &&
		   mouseY >= word.y && mouseY <= word.y + word.h)
			{
				sceneManager.scene.wordSelected = word.id;
				return true;
			}
	}
	
	this.mouse_vs_trash = function (trash,mouseX,mouseY)
	{
		if(mouseX >= trash.x && mouseX <= trash.x + trash.w &&
		   mouseY >= trash.y && mouseY <= trash.y + trash.h)
			{
				sceneManager.scene.trashSelected = trash.id;
				return true;
			}
	
	}
	
	
	this.mouse_vs_button = function (butao,mouseX,mouseY)
	{
		if(mouseX >= butao.x && mouseX < butao.x + butao.w &&
		   mouseY > butao.y && mouseY < butao.y + butao.h)
			{
				return true;
			}
	}
	
	this.player_new_initialposition = function (player)
	{
		 player.initial_x = player.x;
		 player.initial_y = player.y;
	}
	
	this.player_vs_screen = function (player)
	{
		if(player.x <= graphics.canvas.width/2)
		return true;
	}
	
	this.player_follow = function (player,mouseX,mouseY)
	{
			player.x = mouseX - 30;
			player.y = mouseY - 30;
	}
		
	
	this.player_initialposition = function (player)
	{
		player.x = player.initial_x;
		player.y = player.initial_y;
	}
	
	this.word_vs_blank = function (word,blank)
	{
			if(word.x + word.w > blank.x && word.x < blank.x + blank.w &&
			   word.y + word.h > blank.y && word.y < blank.y + blank.h )
			   {
						return true;
			}
		
	}
	this.update = function ()
	{
		
	}
}
var collisionManager = new CollisionManager();
