var order = [' '];
var total = 0;
var s = 20;
var x; 
function p1()
{
x = document.getElementById("num1").value + ' ' + document.getElementById("kind1").innerHTML ;
order.push(x);
document.getElementById("order").innerHTML = order;
total+= parseFloat(document.getElementById("num1").value) * parseFloat(document.getElementById("money1").innerHTML);
}
function p2()
{
x = document.getElementById("num2").value + ' ' + document.getElementById("kind2").innerHTML ;
order.push(x);
document.getElementById("order").innerHTML = order;
total+= parseFloat(document.getElementById("num2").value) * parseFloat(document.getElementById("money2").innerHTML);
}
function p3()
{
x = document.getElementById("num3").value + ' ' + document.getElementById("kind3").innerHTML ;
order.push(x);
document.getElementById("order").innerHTML = order;
total+= parseFloat(document.getElementById("num3").value) * parseFloat(document.getElementById("money3").innerHTML);
}
function p4()
{
x = document.getElementById("num4").value + ' ' + document.getElementById("kind4").innerHTML ;
order.push(x);
document.getElementById("order").innerHTML = order;
total+= parseFloat(document.getElementById("num4").value) * parseFloat(document.getElementById("money4").innerHTML);
}
function p5()
{
x = document.getElementById("num5").value + ' ' + document.getElementById("kind5").innerHTML ;
order.push(x);
document.getElementById("order").innerHTML = order;
total+= parseFloat(document.getElementById("num5").value) * parseFloat(document.getElementById("money5").innerHTML);
}
function p6()
{
x = document.getElementById("num6").value + ' ' + document.getElementById("kind6").innerHTML ;
order.push(x);
document.getElementById("order").innerHTML = order;
total+= parseFloat(document.getElementById("num6").value) * parseFloat(document.getElementById("money6").innerHTML);
}
function p7()
{
x = document.getElementById("num7").value + ' ' + document.getElementById("kind7").innerHTML ;
order.push(x);
document.getElementById("order").innerHTML = order;
total+= parseFloat(document.getElementById("num7").value) * parseFloat(document.getElementById("money7").innerHTML);
}
function p8()
{
x = document.getElementById("num8").value + ' ' + document.getElementById("kind8").innerHTML ;
order.push(x);
document.getElementById("order").innerHTML = order;
total+= parseFloat(document.getElementById("num8").value) * parseFloat(document.getElementById("money8").innerHTML);
}
function p9()
{
x = document.getElementById("num9").value + ' ' + document.getElementById("kind9").innerHTML ;
order.push(x);
document.getElementById("order").innerHTML = order;
total+= parseFloat(document.getElementById("num9").value) * parseFloat(document.getElementById("money9").innerHTML);
}
function p10()
{
x = document.getElementById("num10").value + ' ' + document.getElementById("kind10").innerHTML ;
order.push(x);
document.getElementById("order").innerHTML = order;
total+= parseFloat(document.getElementById("num10").value) * parseFloat(document.getElementById("money10").innerHTML);
}
function p11()
{
x = document.getElementById("num11").value + ' ' + document.getElementById("kind11").innerHTML ;
order.push(x);
document.getElementById("order").innerHTML = order;
total+= parseFloat(document.getElementById("num11").value) * parseFloat(document.getElementById("money11").innerHTML);
}
function p12()
{
x = document.getElementById("num12").value + ' ' + document.getElementById("kind12").innerHTML ;
order.push(x);
document.getElementById("order").innerHTML = order;
total+= parseFloat(document.getElementById("num12").value) * parseFloat(document.getElementById("money12").innerHTML);
}

function display(id)
{
   
    document.getElementById(id).style.display="block";
    document.getElementById("home").style.display="none";
    document.getElementById("pay").innerHTML=total;
    document.getElementById("total").innerHTML=total+20;
}

function back()
{
    document.getElementById("text").style.display="none";
    document.getElementById("home").style.display="block";
}