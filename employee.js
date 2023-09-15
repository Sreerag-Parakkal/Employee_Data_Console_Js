const r = require("readline-sync");
var employee= [
    [1,"ram","10 years",35],
    [2,"anil","2 years",25],
    [3,"nikhil","4 years",28],
    [4,"nikhil","4 years",25],
]

 let res1 =  employee.some((emp)=>emp[2]=== "10 years");

 console.log(res1);


 let res2 = employee.find((emp)=>emp[1]==="nikhil");

 console.log(res2);


 let num1=[10,20,30,40]

 let res3 =num.indexOf(40); //(if undefined values in array was checked , the output will be -1) 

 console.log(res3);


 let num2 =[10,20,30,40]

 let res4 =num2.findIndex((num2)=>num2>20);

 console.log(res);


 let num3=[
     [10,20,30],
     [40,50,60],
     [70,80,90]
 ]

 let res=num3.flat();

 console.log(res);

