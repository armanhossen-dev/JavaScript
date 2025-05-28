// const = a variable that can't be changed

///let pi = 3.1416;
const PI = 3.1416; // because it is gonna be constant i made this variable uppercase
let radius;
let circumference;
let area;
// radius = window.prompt(`Enter the radius of a circle`);
// radius = Number(radius);
// circumference = 2 * PI * radius;
// console.log(circumference);
// console.log(PI);
// PI = 50;
// console.log(PI); //3.1416 it didn't change
// window.alert( `circumference of that circle is: ${circumference} ² unit`);

// lets do it by text box
document.getElementById("cal_btn").onclick = function(){
    radius = document.getElementById("ip_box").value;
    circumference = 2 * PI * radius;
    area = PI * radius * radius;    
    // document.getElementById("output").textContent = circumference;
    document.getElementById("output_circumference").textContent = `circumference of that circle is : ${circumference}unit`;
    document.getElementById("output_area").textContent = `Area of that circle is : ${area}unit²`;
}

