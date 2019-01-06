let PlayerController = {
    move : function(craft=undefined,e=undefined,player){
        
	    player.OR = e.realX < 50 ? 'LEFT' : e.realX > (Crafty.viewport.width-50) ? 'RIGHT' : e.realY < 50 ?
			 'UP' : e.realY > (Crafty.viewport.height-50) ? 'DOWN' : 'NULL';
        player.speedy = player.origin_speed;
    },
    stackAnimate : function(player){
        player.reel("stopDown", 600, [
			[0,0]
		]);
		player.reel("stopUp", 600, [
			[0,3]
		]);
		player.reel("stopLeft", 600, [
			[0,1]
		]);
		player.reel("stopRight", 600, [
			[0,2]
		]);

   		player.reel("step_left", 400, [
  			[0, 1],
  			[1, 1],
  			[2, 1],

		]);
		player.reel("step_down", 400, [
  			[0, 0],
  			[1, 0],
  			[2, 0],

		]);
		player.reel("step_right", 400, [
  			[0, 2],
  			[1, 2],
  			[2, 2],

		]);
		player.reel("step_up", 400, [
  			[0, 3],
  			[1, 3],
  			[2, 3],

		]);
    },
    moveNow : function(player) {
	switch(player.OR){
		case 'RIGHT':
			if(!player.isPlaying("step_right"))
				player.animate("step_right", -1);
			player.x += player.speedy;
			player.backOR = player.OR;
			break;
		case 'LEFT':
			if(!player.isPlaying("step_left"))
				player.animate("step_left", -1);
			player.x -= player.speedy
			player.backOR = player.OR;
			break;
		case 'UP':
			if(!player.isPlaying("step_up"))
				player.animate("step_up", -1);
			player.y -= player.speedy
			player.backOR = player.OR;
			break;
		case 'DOWN':
			if(!player.isPlaying("step_down"))
				player.animate("step_down", -1);
			player.y += player.speedy
			player.backOR = player.OR;
			break;
		default:
			if(player.backOR == "RIGHT")
				player.animate("stopRight");
			else if(player.backOR == "LEFT")
				player.animate("stopLeft");
			else if(player.backOR == "UP")
				player.animate("stopUp");
			else if(player.backOR == "DOWN")
				player.animate("stopDown");
			//console.log('Direction'+'['+player.OR+']'+"#"+e.realY+"#");
			break;
	}
    }
}