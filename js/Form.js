class Form{
    constructor(){

     this.title=createElement("h1");
    this.phybutton=createButton("Physical & Motor Development");
    this.mathbutton=createButton("Mathematical Development");
    this.prsbutton=createButton("Personal Development");
    this.twrbutton=createButton("Building Blocks");
    this.back=createButton("Back<<");
    this.story=createButton("Stories");
    this.routine=createButton("Daily Routine");
    this.st1=createButton("1. The Ant and the Dove");
    this.st2=createButton("2. Monkey and the Crocodile");
    this.st3=createButton("3. The Starfish");
    this.st4=createButton("4. A Rainy Day");
    this.chart=createButton("Number Chart");
    this.numbergame=createButton("Count & Write");
    this.input1=createInput(" ");
    this.input2=createInput(" ");
    this.input3=createInput(" ");
    this.input4=createInput(" ");
    this.input5=createInput(" ");
    this.input6=createInput(" ");
    this.input7=createInput(" ");
    this.input8=createInput(" ");
    this.submit=createButton("Submit");
    }
    display(){
        this.title.html("Luceat");
        this.title.position(width/2-40,20);
        this.back.hide();
        this.phybutton.position(width/2-100,100);
        this.prsbutton.position(width/2-70,150);
        this.mathbutton.position(width/2-80,200);
        this.phybutton.mousePressed(()=>{
            this.hide();
            this.twrbutton.show();
            this.twrbutton.position(width/2-50,100);
        });
        this.twrbutton.mousePressed(()=>{
            gameState=1;
            this.back.position(20,20);
        });
    
        this.back.mousePressed(()=>{
            gameState=0;
            this.phybutton.show();
            this.prsbutton.show();
        });
        this.prsbutton.mousePressed(()=>{
            this.hide();
            this.story.show();
            this.story.position(width/2-20,100);
            this.routine.show();
            this.routine.position(width/2-40,150);
        })

        this.story.mousePressed(()=>{
            this.hide();
            this.st1.show();
            this.st2.show();
            this.st3.show();
            this.st4.show();
            this.st1.position(width/2-70,100);
            this.st2.position(width/2-90,140);
            this.st3.position(width/2-50,180);
            this.st4.position(width/2-50,220);
        });

        this.st1.mousePressed(()=>{
            this.hide();
            gameState=3;
        });

        this.st2.mousePressed(()=>{
            this.hide();
            gameState=4;
        });
        
        this.st3.mousePressed(()=>{
            this.hide();
            gameState=5;
        });

        this.st4.mousePressed(()=>{
            this.hide();
            gameState=6;
        });

        this.routine.mousePressed(()=>{
            gameState=2;
            this.hide();
        });

        this.mathbutton.mousePressed(()=>{
            this.hide();
           this.chart.position(width/2-40,100);
           this.numbergame.position(width/2-40,150);
           this.chart.show();
           this.numbergame.show();
        });
        
        this.numbergame.mousePressed(()=>{
            gameState=7;
            this.hide();
            this.input1.position(width/2,100);
            this.input2.position(width/2,150);
            this.input3.position(width/2,200);
            this.input4.position(width/2,250);
            this.input5.position(width/2,300);
            this.input6.position(width/2,350);
            this.input7.position(width/2,400);
            this.input8.position(width/2,450);
            this.submit.position(width/2,500);
        });

        this.submit.mousePressed(()=>{
            this.hide();
            if(this.input1.value()===2){
                score++;
            }
            2,7,4,3,6,4,5,3
            if(this.input2.value()===7){
                score++;
            }
            if(this.input3.value()===4){
                score++;
            }
            if(this.input4.value()===3){
                score++;
            }
            if(this.input5.value()===6){
                score++;
            }
            if(this.input6.value()===4){
                score++;
            }
            if(this.input7.value()===5){
                score++;
            }
            if(this.input8.value()===3){
                score++;
            }
            
        });

        
    }
    hide(){
        this.phybutton.hide();
        this.prsbutton.hide();
        this.mathbutton.hide();
        this.twrbutton.hide();
        this.story.hide();
        this.st1.hide();
        this.st2.hide();
        this.st3.hide();
        this.st4.hide();
        this.routine.hide();
        this.chart.hide();
        this.submit.hide();
        this.numbergame.hide();
        this.input1.hide();
        this.input2.hide();
        this.input3.hide();
        this.input4.hide();
        this.input5.hide();
        this.input6.hide();
        this.input7.hide();
        this.input8.hide();
    }
}