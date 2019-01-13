let CollisionController = {
    run : function(player,bag, mappy){
       let bagLife = bag;
        switch(mappy){
            case 'FORET_AU_LOUP':
                if((hitDatas = player.hit('arbuste'))){
                    if(typeof hitDatas[0].obj.__c.baie != 'undefined'){
                        delete(hitDatas[0].obj.__c.baie);
                        bagLife.goBaie(+2);
                        hitDatas[0].obj.destroy();
                    }
                    player.speedy = -2;

                }else if(player.hit('sea')){
                  player.speedy = -2;
                }else{
                    player.speedy = 0.8;
                }
                break;
            default:
                break;
        }
    }
}
