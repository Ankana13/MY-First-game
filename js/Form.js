class Form{
    constructor(){
        this.button = createButton('Start');
        this.title = createElement('h2');
        
    }
    hide(){
        this.button.hide();
        this.title.hide();
    }
    display(){
        this.title.html("SpaceWars");
        this.title.position(windowWidth/2-200,windowHeight/8);
        this.title.style('font-size','70px');
        this.title.style('color','pink');
        this.button.position(windowWidth/2-100,windowHeight/2);
        this.button.style('width','200px');
        this.button.style('height','50px');
        this.button.style('background','light green');

        this.button.mousePressed(()=>{
            this.title.hide();
            this.button.hide();
            gameState = 1;
           
        })

    }
}