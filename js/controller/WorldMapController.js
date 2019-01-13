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
                  // console.log(Crafty.viewport.height / 16);
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
                   this.generateSea(0,20,15,8);
                   break;
           }
       }
    },
    generateSea : function(tilesX, tilesY, tilesW, tilesH, nSwap='opal'){
      if(typeof this.sea_swap == 'undefined'){

          this.sea_swap = new Array();
          console.log('INIT');
        }
      this.sea_swap[nSwap] = new Array();
        for (let xi = 0; xi < tilesW; xi++){
          this.sea_swap[nSwap][xi] = new Array();
          for(let yi = 0; yi < tilesH; yi++){
              this.sea_swap[nSwap][xi][yi] = Crafty.e("2D, Canvas, wall_sea, sea,  Animate, SpriteAnimation, Collision").
                attr({x: (tilesX*15)+(xi*15), y: (tilesY*15)+(yi*15)});
          }
        }
        return this;
    },
    seaAnimate : function(minSurf=3,maxSurf=6,nSwap='opal'){
      if(Array.isArray(this.sea_swap)){
        for(let i = 0; i < this.sea_swap[nSwap].length; i++){
          for(let i2 = 0; i2 < this.sea_swap[nSwap][i].length; i2++){
            this.sea_swap[nSwap][i][i2].reel("sea_move",2200,[
              [1,3],[2,3],[0,3]
            ]);
            if(i > minSurf && i < maxSurf)
              this.sea_swap[nSwap][i][i2].animate("sea_move", -1);
          }
        }


      }else{
        alert("cc");
      }
      return this;
    },
    seaDispoAnimate : function(minSurf=3,maxSurf=6,nSwap='opal'){
      if(Array.isArray(this.sea_swap)){
        for(let i = 0; i < this.sea_swap[nSwap].length; i++)
          for(let i2 = 0; i2 < this.sea_swap[nSwap][i].length; i2++){
            if(i > minSurf && i < maxSurf)
              this.sea_swap[nSwap][i][i2].animate("sea_move", -1);
          }

      }else{

      }
      return this;
    }

}
