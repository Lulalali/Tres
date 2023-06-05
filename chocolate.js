function newAlert()
{
    alert("you just called a function!")
   
}

function upDate()
{   var num1  = Math.ceil(Math.random() *10);
    var num2  = Math.ceil(Math.random() *10);
    var sum = num1 + num2;

    if  (num1 === num2)
    {
        document.getElementById("result").innerHTML = "even and equal - you win"
    }
    else if (num1 > num2))
    {
        document.getElementById("result").innerHTML = "you lose"
    }
    else
    {
    
        document.getElementById("result").innerHTML = "push - no win/no loss"
    }
    document.getElementById("num1").innerHTML = "num1 = " + num1;
    document.getElementById("num2").innerHTML = "num2 = " + num2;
}
   