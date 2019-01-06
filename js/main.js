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
		attr({x : 0,y : 0,w : Crafty.viewport.width, h : Crafty.viewport.height }).
		bind('Click', function(e/*MouseEvent*/){
  			PlayerController.move(Crafty,e,player);//déplacements du joueur
		});
        
        WorldMappController.generate('FORET_AU_LOUP');
        
        var bagLife = Crafty.e("2D, DOM, Text").
            attr({x : Crafty.viewport.width-200, y : Crafty.viewport.height-30, w : 200 , h : 30,
                  heart : 5, baie : 0, diaments: 3}).
            text("[ Vie : 5 | Baie : 0 | Diaments : 3 ]").
            css({
                 color: "#FFF",
                 backgroundColor: "rgba(0,0,0,.5)",
                 textAlign: "center",
                 borderRadius: "10px"
                });
        bagLife.goLife = function(act){
            this.heart += act;
            this.text("[ Vie : "+this.heart+" | Baie : "+this.baie+" | Diaments : "+this.diaments+" ]");
        }
        bagLife.goBaie = function(act){
            this.baie += act;
            this.text("[ Vie : "+this.heart+" | Baie : "+this.baie+" | Diaments : "+this.diaments+" ]");
        }
        bagLife.goDiaments = function(act){
            this.diaments += act;
            this.text("[ Vie : "+this.heart+" | Baie : "+this.baie+" | Diaments : "+this.diaments+" ]");
        }
        bagLife.initBag = function(){
            this.text("[ Vie : "+this.heart+" | Baie : "+this.baie+" | Diaments : "+this.diaments+" ]");
        }
       // bagLife.text("HAHHA");
        
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

	});
	Crafty.scene("main");

});
