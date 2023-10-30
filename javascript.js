 let a1=document.getElementById("d2").style.display="none"
 	let i=0;

 function onc1()
 {
  	i++;
let a=document.getElementById("d2").style.display="inline"


if(i==2)
{
document.getElementById("d2").style.display="none"
i=0;
}
}
// function ono1()
//  {
// let b=document.getElementById("d2").style.display="none"
// }
// function ono2()
//  {
// let b=document.getElementById("d2").style.display="block"
// }
// function onm2()
// {
// let c=document.getElementsByClassName('a1');
// c.style.fontSize="x-large"

// }
// function onm3()
// {
// let d=document.getElementsByClassName('a1');
// d.style.fontSize="10px"
// }
del=()=>
{
var ab=document.getElementById("d1").style.cssText="background-image:url('images/caluc.jpg');background-size:1279px 750px; "
document.getElementById('h11').style.display="none"
setTimeout(feu,1700);
document.getElementById("d2").style.display="none";
document.getElementById("btn_1").style.display="none";
}
feu=()=>
{
window.location="cal.html"

}
dek3=()=>
{
var ab=document.getElementById("d1").style.cssText="background-image:url('images/caluc.jpg');background-size:1279px 750px; "
document.getElementById('h11').style.display="none"
setTimeout(feu1,1700);
document.getElementById("d2").style.display="none";
document.getElementById("btn_1").style.display="none";
}
feu1=()=>
{
window.location="memorygame.html"

}
geth=()=>
{
document.getElementById('por').innerHTML="<h1>KASI</h1>frontend Devloper"
setTimeout(getr,4700)

}
setTimeout(getr=()=>
{
document.getElementById('por').innerHTML="<h1>KARTHIK</h1>frontend Devloper"
setTimeout(getl,4700)
},2000)
getl=()=>
{
document.getElementById('por').innerHTML="<h1>Yogesh</h1>frontend Devloper"
setTimeout(getE,4700)

}
getE=()=>
{
document.getElementById('por').innerHTML="<h1>JANARDHANA RAJESH</h1>frontend devloper"
setTimeout(geth,4700)

}