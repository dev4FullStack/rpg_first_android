$(document).ready(function(){

	Crafty.init();

	Crafty.load({"images" : ["img/actorFirst_32.32.png","img/map_phase1.png"] },function(){
	   Crafty.sprite(32, "img/actorFirst_32.32.png", {
			ship:  [0,0],
			ship2: [0,1],
			ship3: [0,2],
			ship4: [0,3]
            });
        Crafty.sprite(16, "img/map_phase1.png",{
            wall_flood: [7,0],
            wall_arbuste: [0,12]
        });
        
        
        Crafty.scene("main");
        });

	Crafty.scene("main", function(){
		var actionMouse = Crafty.e("2D, Canvas, Mouse").
		attr({x : 0,y : 0,w : 465, h : 268 }).
		bind('Click', function(e/*MouseEvent*/){
  			moveCtrl(Crafty,e,player);
            player.speedy = 0.8;
		});
        
        worldMapp.generate('FORET_AU_LOUP');
        
        var player = Crafty.e("2D, Canvas, player, Hero, Animate, SpriteAnimation, Collision").
            bind("Move", function(from){
                //console.log(this.x);
                if(this.hit('arbuste')){
                    this.speedy = -2;
                }else{
                    this.speedy = 0.8;
                }
                if(this.hit('porte')){
                   
                }
            });
        
		Crafty.c("Hero",{ init : function(){
			this.requires("2D, Canvas, ship, Color, palyer, SpriteAnimation, Collision").
			attr({x : 232/*Crafty.viewport.width / 2*/, y : 134/*Crafty.viewport.height / 2*/, speedy : 0.8,
				  OR : 'NULL'}).
			origin("center").
			bind("EnterFrame", function(){
				moveNow(this);
			});
				return this;
			}
		});

        
        
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

	});
	Crafty.scene("main");

});

let moveCtrl = function(craft=undefined,e=undefined,player){
	//console.log("Test : craft : "+craft.viewport.width);
	//alert(e.realX + ' : '+ player.speedy);

	player.OR = e.realX < 50 ? 'LEFT' : e.realX > (Crafty.viewport.width-50) ? 'RIGHT' : e.realY < 50 ?
			 'UP' : e.realY > (Crafty.viewport.height-50) ? 'DOWN' : 'NULL';


}
let moveNow = function(player) {
	//console.log(player.OR);
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