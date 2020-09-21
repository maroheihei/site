var changed1 = true;
function change1()
{
    if (changed1 == true)
    {
        document.getElementById("1").src="images/face1 - copy.png";
        check();
        changed1 = false;
    }
    else
        {
            document.getElementById("1").src="images/face1.png";
        changed1 = true;
        }
}

var changed2 = true;
function change2()
{
    if (changed2 == true){
        document.getElementById("2").src="images/face2 - copy.png";
                check();
        changed2=false;
    }
    else
        {
            document.getElementById("2").src="images/face2.png";
            changed2=true;
        }
}

var changed3 = true;
function change3()
{
    if(changed3 == true)
        {
            document.getElementById("3").src="images/face3 - copy.png";
                    check();
            changed3=false;
        }
    else{
            document.getElementById("3").src="images/face3.png";
            changed3=true;
        }
}

var changed4 = true;
function change4()
{
    if(changed4 == true)
        {
             document.getElementById("4").src="images/face4 - copy.png";
                    check();
             changed4 = false;
        }
    else{
            document.getElementById("4").src="images/face4.png";
            changed4 = true;
    }
   
}

var changed5 = true;
function change5()
{
    if(changed5 == true)
        {
            document.getElementById("5").src="images/face5 - copy.png";
                    check();
            changed5 = false;
        }
    else{
            document.getElementById("5").src="images/face5.png";
            changed5 = true; 
        }
}
function check()
{
         if(changed1 == false)
        {
            change1();
        }
    else if(changed2 == false)
        {
            change2();
        }
    else if (changed3 == false)
        {
            change3();
        }
    else if(changed4 == false)
        {
            change4();
        }   
    else if(changed5 == false)
        {
            change5();
        }
}
function thanks()
{
    alert("your feedback is submitted .. thank you");
}