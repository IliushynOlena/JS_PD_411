
// OOP - Class
class Car{  

    constructor(model,year,color)
    {
        this.model = model;
        this.year = year;
        this.color = color;
        this.speed = 0;
    }
    //getter /setter
    set Speed(value)
    {
         if(value>=0)
            this.speed = value;
        else
            this.speed = 0;
    }
    get Mils()
    {
        return this.speed *0.621;
    }

    // setSpeed(value)
    // {
    //     if(value>=0)
    //         this.speed = value;
    //     else
    //         this.speed = 0;
    // }
    paint(newColor)
    {
        this.color = newColor;
    }
    print(){
        console.log(`Car : ${this.model}, Year : ${this.year}.Color : ${this.color}. Speed : ${this.speed}`)
    }

}

const myCar = new Car("Toyota",2022,"Pink");
// myCar.model= "Toyota";
// myCar.year= 2022;
// myCar.color= "Coral";
// myCar.speed= 300;

//myCar.setSpeed(250);
myCar.Speed = 280;
myCar.paint("Red");
myCar.print()
console.log("Speed in miles : " + myCar.Mils + "mi/h")
const Car2 = new Car("Nissan",2000,"Grey");
Car2.print();

//================ Extends =============
class PoliceCar extends Car
{
    constructor(model, year, color, volume)
    {
        super(model,year,color);
        this.volume = volume;
    }
    beep()
    {
        console.log("STOP!!!! BEEP BEEP BEEP : " + this.volume);
    }
    print()
    {
        super.print();
        console.log("Volume : " + this.volume);
    }
}
console.log("========================================")
let police = new PoliceCar("Toyota Prius",2018,"White",2000);
police.print();
police.beep();

//5555/3600- h; 5555/60%60 – m; 5555%60 - s

//5555
//h = 5555/3600       = 1
//m = 5555/60%60      = 92  // 32 
//s =  5555%60        //35