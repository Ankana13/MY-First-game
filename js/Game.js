class Game{
    constructor(){

    }
    start(){
        if(gameState === 0){
            form = new Form()
            form.display();
            
        }}
       play(){
            form.hide();
            //s = createSprite(10, 10, 400, 400);
           // s.addImage(s_img);
           image(s_img,0,0,windowWidth,windowHeight)
           s.velocitY = -3
           if (s.y < 0){
            s.y = s.height/2;
           
          }
           
            drawSprites();


        }
    
}