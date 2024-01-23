document.getElementById('myform').addEventListener('submit',(event)=>{
    event.preventDefault();
var firstname=document.getElementById("fn").value;
var lastname=document.getElementById("ln").value;
var emailid=document.getElementById("em").value;
var mobileno=document.getElementById("mn").value;
var city=document.getElementById("city").value;

document.getElementById("fname-r8").innerHTML=firstname;
document.getElementById("lname-r8").innerHTML=lastname;
document.getElementById("email-r8").innerHTML=emailid;
document.getElementById("mobile-r8").innerHTML=mobileno;
document.getElementById("city-r8").innerHTML=city;
//console.log(firstname,lastname,emailid,mobileno,city);
});
    