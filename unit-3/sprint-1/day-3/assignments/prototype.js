function car(){
    this.logo="TATA"
    this.wheel=4
    this.engine=1
    this.AirConditioning=true
    this.ABS=true
    this.NavigationSystem=true
    this.FrontAndRearParkingSensors=true
    this.seatbelts=4
    this.airbags=true
}

let automobile=new car();

let car1=Object.create(automobile)
let car2=Object.create(automobile)
let car3=Object.create(automobile)
let car4=Object.create(automobile)

console.log(car1,car2,car3,car4)