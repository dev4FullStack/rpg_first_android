var WorldMappController = {
    generate : function(map_stage=null){


        if(map_stage == null){

            Crafty.e("2D, Canvas, wall_flood, solid,Animate, SpriteAnimation").
                attr({x:Crafty.viewport.width / 2,y:50});

            Crafty.e("2D, Canvas, wall_arbuste, porte, Collision").
                attr({x: (Crafty.viewport.width / 2),y: ((Crafty.viewport.height / 2)+50)});

        }
       else{
           switch(map_stage){
               case 'FORET_AU_LOUP':
                   console.log(Crafty.viewport.height / 16);
                   for(let i = 0; i < (Crafty.viewport.width / 16)+4; i++){
                       for(let i2 = 0; i2 < (Crafty.viewport.height / 16)+3; i2++)
                            Crafty.e("2D, Canvas, wall_flood, flood,Animate, SpriteAnimation").
                                attr({x:0+(i*15),y:0+(i2*15)});
                   }


                   for(let i = 1; i < 10; i++){
                      let baie = i % 2 ? "baie," : " ";
                      let swap = Crafty.e("2D, Canvas, wall_arbuste, "+baie+"arbuste, Animate, SpriteAnimation,Collision").
                      attr({x:Crafty.math.randomInt(0,160), y:Crafty.math.randomInt(0,160)});

                   }
                   break;
           }
       }
    },
    generateSea : function(){

    }
}
