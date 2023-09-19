import "./App.css"
import React,{useState} from "react"
import Scorecard from "./Scorecard.js"
const Submit=()=>{
let [isVisible,setVisible]=useState(false)
let [marks,updateMarks]=useState(0)
return(
<div>
<input type="submit" value="submit" id="submit-button" onClick={()=>{
setVisible(true)
for(var i=1;i<=5;i++){
switch(i){
case 1:
var card=document.getElementById("1");
if(card.querySelector("#answer1").checked){
document.getElementById("1").style.border="3px solid green"
document.getElementById("pr1").style.color="white";
document.getElementById("pr1").innerText="Status:Right";
updateMarks(++marks)
}
else if( card.querySelector("#answer2").checked || card.querySelector("#answer3").checked|| card.querySelector("#answer4").checked ){
document.getElementById("1").style.border="3px solid red"
document.getElementById("pr1").style.backgroundColor="red";
document.getElementById("pr1").style.color="white";
document.getElementById("pr1").innerText="Status:wrong";
}
else{
document.getElementById("1").style.border="3px solid orange"
document.getElementById("pr1").style.backgroundColor="blue";
document.getElementById("pr1").style.color="white";
document.getElementById("pr1").innerText="Status:Not attempted";
}
break
case 2:
var card1=document.getElementById("2");
if(card1.querySelector("#answer2").checked){
document.getElementById("2").style.border="3px solid green"
document.getElementById("pr2").style.color="white";
document.getElementById("pr2").innerText="Status:Right";
updateMarks(++marks)
}
else{
document.getElementById("2").style.border="3px solid red"
document.getElementById("pr2").style.backgroundColor="red";
document.getElementById("pr2").style.color="white";
document.getElementById("pr2").innerText="Status:wrong";
} 
break;
 case 3:
 var card2=document.getElementById("3");
if(card2.querySelector("#answer4").checked){
document.getElementById("3").style.border="3px solid green"
document.getElementById("pr3").style.color="white";
document.getElementById("pr3").innerText="Status:Right";
updateMarks(++marks)
}
else{
document.getElementById("3").style.border="3px solid red"
document.getElementById("pr3").style.backgroundColor="red";
document.getElementById("pr3").style.color="white";
document.getElementById("pr3").innerText="Status:wrong";
}  
break;
 case 4:
var card3=document.getElementById("4");
if(card3.querySelector("#answer4").checked){
document.getElementById("4").style.border="3px solid green"
document.getElementById("pr4").style.color="white";
document.getElementById("pr4").innerText="Status:Right";
updateMarks(++marks)
}
else{
document.getElementById("4").style.border="3px solid red"
document.getElementById("pr4").style.backgroundColor="red";
document.getElementById("pr4").style.color="white";
document.getElementById("pr4").innerText="Status:wrong";
} 
break;
case 5:
var card4=document.getElementById("5");
if(card4.querySelector("#answer1").checked){
document.getElementById("5").style.border="3px solid green"
document.getElementById("pr5").style.color="white";
document.getElementById("pr5").innerText="Status:Right";
updateMarks(++marks)
}
else{
document.getElementById("5").style.border="3px solid red"
document.getElementById("pr5").style.backgroundColor="red";
document.getElementById("pr5").style.color="white";
document.getElementById("pr5").innerText="Status:wrong";
}   
}
}
}
}/>
<div>
{isVisible && <Scorecard mark1={marks}/>}
</div>
</div>
)
}
export default Submit
