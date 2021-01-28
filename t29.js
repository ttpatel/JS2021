// var myCar=new Object;
// myCar.maxSpeed=50;
// myCar.Driver="TT";

var myCar2={

    maxSpeed:100,
    driver:"Tirth",
    drive:function (speed,time) {
        console.log(speed*time);
    },
    logDriver:function(){
        console.log("driver name is " + this.driver);
    },
};
myCar2.logDriver();
console.log(myCar2.maxSpeed);
myCar2.drive(50,3);
