let BagLifeController = function(){
    this.gen = function(){
      this.bag = Crafty.e("2D, DOM, Text").
      attr({x : Crafty.viewport.width-330, y : Crafty.viewport.height-40, w : 300 , h : 30,
            heart : 5, baie : 0, diaments: 3}).
      text("[ Vie : 5 | Baie : 0 | Diaments : 3 ]").
      css({
           color: "#FFF",
           backgroundColor: "rgba(0,0,0,.5)",
           textAlign: "center",
           borderRadius: "10px",
           fontSize: "18px"
          });
      return this;
    }
    this.goLife = function(act){
        this.bag.heart += act;
        this.bag.text("[ Vie : "+this.bag.heart+" | Baie : "+this.bag.baie+" | Diaments : "+this.bag.diaments+" ]");
    }
    this.goBaie = function(act){
        this.bag.baie += act;
        this.bag.text("[ Vie : "+this.bag.heart+" | Baie : "+this.bag.baie+" | Diaments : "+this.bag.diaments+" ]");
    }
    this.goDiaments = function(act){
        this.bag.diaments += act;
        this.bag.text("[ Vie : "+this.bag.heart+" | Baie : "+this.bag.baie+" | Diaments : "+this.bag.diaments+" ]");
    }
    this.initBag = function(){
        this.bag.text("[ Vie : "+this.bag.heart+" | Baie : "+this.bag.baie+" | Diaments : "+this.bag.diaments+" ]");
    }
}
