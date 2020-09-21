
function valid()
{
    var check=/^([a-z A-z 0-9 \. -]+)@([a-z A-z -]+)\.([a-z]{2,10})$/;
    var email= document.getElementById("text1").value;
    var pass=document.getElementById("text2").value;
    if(check.test(email)==false ||pass.length<8)
    {
        document.getElementById("warn").style.visibility="visible";
        return false;
    }
    else 
    {
       return true;
    }
}

