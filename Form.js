class Form {

    constructor() {
       this.title = createElement('h1');
       this.input = createInput("Name");
       this.inputA = createInput("Age");
       this.button = createButton("START");
       this.greeting  = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide(){
        
        this.input.hide();
        this.button.hide();    
        this.inputA.hide();
        this.reset.hide();
        this.greeting.hide();
        

    }

      
    display(){
       background(bg);

        
        this.title.html("Zombie Emulator");
        this.title.position(displayWidth/2 - 50,0);
        
        this.input.position(displayWidth/2 - 40,displayHeight/2 - 80);
      
        this.inputA.position(displayWidth/2 - 40,displayHeight/2 - 50);

        this.reset.position(displayWidth/2 + 40,displayHeight/2 - 20);
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
        });
        this.button.position(displayWidth/2 - 20,displayHeight/2 - 20)
        this.button.mousePressed(() =>{
            this.input.hide();
            this.inputA.hide();
            this.button.hide();
            this.reset.hide();
            player.name = this.input.value();          
           
            playerCount+=1;
            player.index = playerCount;
            player.update();
           
            player.updateCount(playerCount);
            fill(211,211,211);
           
           textSize(60);
           text('Welcome to My New Game ' + player.name,displayWidth/2 - 500,displayHeight/2 ) 
         
    
        });
        
     
        
    }
}


