var worldMapp = {
    generate : function(wall_affect=null){
        
        
        if(wall_affect == null){
            
            Crafty.e("2D, Canvas, wall_flood, solid,Animate, SpriteAnimation").
                attr({x:Crafty.viewport.width / 2,y:50});
        
            Crafty.e("2D, Canvas, wall_arbuste, porte, Collision").
                attr({x: (Crafty.viewport.width / 2),y: ((Crafty.viewport.height / 2)+50)});
        
        }
       else{
           switch(wall_affect){
               case 'FORET_AU_LOUP':
                   for(let i = 0; i < 55; i++){
                       for(let i2 = 0; i2 < 25; i2++)
                            Crafty.e("2D, Canvas, wall_flood, flood,Animate, SpriteAnimation").
                                attr({x:0+(i*15),y:0+(i2*15)});
                   }
                   
                   
                   for(let i = 1; i < 10; i++){
                      Crafty.e("2D, Canvas, wall_arbuste, arbuste,Animate, SpriteAnimation,Collision").
                   attr({x:Crafty.math.randomInt(0,160), y:Crafty.math.randomInt(0,160)});
                   }
                   break;
           }
       }
    },
    generateSea : function(){
        
    }
}