//$.getScript("/js/controller/BagLifeController.js");

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
            wall_arbuste: [0,12],
						wall_sea:[0, 3]
        });


        Crafty.scene("main");
        });

	Crafty.scene("main", function(){
		var actionMouse = Crafty.e("2D, Canvas, Mouse").
		attr({x : 0,y : 0,w : Crafty.viewport.width, h : Crafty.viewport.height }).
		bind('Click', function(e/*MouseEvent*/){
  			PlayerController.move(Crafty,e,player);//déplacements du joueur
		});

        WorldMappController.generate('FORET_AU_LOUP');
				let bagLife = new BagLifeController().gen();

        var player = Crafty.e("2D, Canvas, player, Hero, Animate, SpriteAnimation, Collision").
            bind("Move", function(from){
                //console.log(this.x);
                CollisionController.run(this,bagLife,'FORET_AU_LOUP');
                if(this.hit('arbuste_win')){

                }
            });

		Crafty.c("Hero",{ init : function(){
			this.requires("2D, Canvas, ship, Color, player, SpriteAnimation, Collision").
			attr({x : Crafty.viewport.width / 2, y : Crafty.viewport.height / 2, speedy : 0.8,
				  origin_speed : 0.8,OR : 'NULL'}).
			origin("center").
			bind("EnterFrame", function(){
                //gestion des mouvements du perso
				PlayerController.moveNow(this);
			});
				return this;
			}
		});

        //pile des animations prédéfinis
        PlayerController.stackAnimate(player);
				WorldMappController.seaAnimate(8,12).
					seaDispoAnimate(1,3).
					seaDispoAnimate(3,7);
				WorldMappController.generateSea(12,5,5,5,'opium').seaAnimate(1,3,'opium');

	});
	Crafty.scene("main");

});
