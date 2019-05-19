"use strict";
var plate;
var brand;
var color;
var diameter1;
var diameter2;
var diameter3;
var diameter4;
var mr1;
var mr2;
var mr3;
var mr4;
function addCarInfo() {
    plate = document.getElementById("plate").value;
    brand = document.getElementById("brand").value;
    color = document.getElementById("color").value;
    console.log(plate, brand, color);
    //Check first Form Condition 
    var letterNumberCondition = /[A-Za-z]{4}[0-9]{3}\b/;
    if ((plate.match(letterNumberCondition))) {
        //Show in HTML the values
        document.getElementById("carRes").innerHTML = "Car";
        document.getElementById("plateRes").innerHTML = "Plate: " + plate;
        document.getElementById("brandRes").innerHTML = "Brand: " + brand;
        document.getElementById("colorRes").innerHTML = "Color: " + color;
        //Show and Hide Forms
        document.getElementById("addcarfrm").style.display = "none";
        document.getElementById("addwheelsfrm").style.display = "block";
    }
    else {
        alert('Debes revisar la Matricula.  El formato tiene que ser: AAAA123');
        return false;
    }
    ;
}
;
//ADD Car Wheels
function AddWheels() {
    //Get Form Values
    console.log("AddWheels");
    diameter1 = parseFloat(document.getElementById("dr1").value);
    diameter2 = parseFloat(document.getElementById("dr2").value);
    diameter3 = parseFloat(document.getElementById("dr3").value);
    diameter4 = parseFloat(document.getElementById("dr4").value);
    mr1 = (document.getElementById("mr1").value);
    mr2 = (document.getElementById("mr2").value);
    mr3 = (document.getElementById("mr3").value);
    mr4 = (document.getElementById("mr4").value);
    var car = new Car(plate, color, brand);
    car.addWheel(new Wheel(diameter1, mr1));
    car.addWheel(new Wheel(diameter2, mr2));
    car.addWheel(new Wheel(diameter3, mr3));
    car.addWheel(new Wheel(diameter4, mr4));
    console.log(car);
    console.log(car.wheels);
    //Check Wheels condition
    var i;
    var count = 0;
    for (i = 0; i < car.wheels.length; i++) {
        if (0.4 < car.wheels[i]['diameter'] && car.wheels[i]['diameter'] < 2) {
            count++;
            if (car.wheels.length == count) {
                PrintResults();
            }
        }
        else {
            alert("Es diametro de la rueda de " + car.wheels[i]['diameter'] + " tiene que ser >0.4 y <2");
        }
        ;
    }
    //Show the values in the  HTML 
    function PrintResults() {
        document.getElementById("wheelsRes").innerHTML = "Wheels";
        document.getElementById("wheel1Res").innerHTML = '<p> Wheel 1: <br>'
            + 'Marca Rueda: ' + mr1 + ' <br> ' + 'Diametro: ' + diameter1 + '</p>';
        document.getElementById("wheel2Res").innerHTML = '<p> Wheel 2: <br>'
            + 'Marca Rueda: ' + mr2 + ' <br> ' + 'Diametro: ' + diameter2 + '</p>';
        document.getElementById("wheel3Res").innerHTML = '<p> Wheel 3: <br>'
            + 'Marca Rueda: ' + mr3 + ' <br> ' + 'Diametro: ' + diameter3 + '</p>';
        document.getElementById("wheel4Res").innerHTML = '<p> Wheel 4: <br>'
            + 'Marca Rueda: ' + mr4 + ' <br> ' + 'Diametro: ' + diameter4 + '</p>';
    }
}
