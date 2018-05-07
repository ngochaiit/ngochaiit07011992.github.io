var display = document.getElementById('input-id');
function addtoscreen(x)
{
    display.value +=x;
    if(x=='c')
    {
        display.value ='';
    }
}
function answer()
{
     x = display.value;
    result = eval(x);
    display.value = result;
}
function backspace()
{
    var number = display.value;
    var arrNumber = number.length -1;
    var newnumber = number.substring(0,arrNumber);
    display.value =newnumber;
}
function power(y)
{
    var x = display.value;
    x = Math.pow(x,y);
    display.value = x;
}
function cbrt()
{
    var z = display.value;
    var x = Math.cbrt(z);
    display.value = x;
}
function reciproc()
{
    var currentNumber = display.value;
    var x = 1/(currentNumber);
    display.value = x;
}