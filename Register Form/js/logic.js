var currentYear = new Date().getFullYear();
const months = ["January","February","March","April","May","June","July","August","September","November","December"];

$(function()
{
    for(var i = 0; i< 80; i++)
    {
        $('#year').append(
            
            $('<option/>').attr('value', currentYear -i).text(currentYear -i)
        );
    }
})

$(function()
{
    for(var i = 0; i < months.length; i++)
    {
        $('#month').append(
            $('<option/>').attr('value', months[i]).text(months[i])
        );
    }
})

$(function()
{
    for(var i = 1; i <=31; i++)
    {
        $('#day').append(
            $('<option/>').attr('value',i).text(i)
        );
    }
})

function disPlayResult()
{
  
    var userName = $('#userName').val();
    var email = $('#email').val();
    var password = $('#psw').val();
    var repeatPassword = $('#psw-repeat').val();
    var day = $('#day').val();
    var month = $('#month').val();
    var year = $('#year').val();
    if($("input:radio[data-name='Male']").is(":checked"))
    {
        var genderChoice = $('#male').next('label:first').html();
    }
    else if($("input:radio[data-name='Female']").is(":checked"))
    {
        var genderChoice = $('#Female').next('label:first').html();
    }
    document.write("<h1>Thank You!!</h1>");
    document.write("<h3>Here is your data</h3>");
    document.write("User name:" +userName+ "<br/>");
    document.write("Email is: " +email+ "<br/>");
    document.write("password is" +password+ "<br/>");
    document.write("Your birthday is: " +day+ "/" +month+ "/" +year+ "<br/>" );
    document.write("you are:" +genderChoice);

}
$("#registerbtn").click(function(){
    $.get("result.html", function(){
        disPlayResult();
    });
});

$('#form-register').on('submit',function()
{
    var isValid = true;
    if($('#userName').val().trim() == ''||$('#userName').val().match(/^([a-zA-Z])[a-zA-Z_-]*[\w_-]*[\S]$|^([a-zA-Z])[0-9_-]*[\S]$|^[a-zA-Z]*[\S]$/) == null)
    {
          $('#userName').next('span').text('Name is empty or invaild. eg: David0701...');
        
      
            isValid = false;
        
    }
    else
    {
        $('#userName').next('span').text('');
    }

    if($('#email').val().trim() == '' || $('#email').val().match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) == null)
    {
          $('#email').next('span').text('Email is empty or invalid. eg:houson@gmail.com');
      
            isValid = false;
        
    }
    else
    {
        $('#email').next('span').text('');
    }

    if($('#psw').val().trim() == '')
    {
          $('#psw').next('span').text(' password is empty');
      
            isValid = false;
        
    }
    else
    {
        $('#psw').next('span').text('');
    }
    

    if($('#pwm-repeat').val().trim() == '')
    {
          $('#pwm-repeat').next('span').text('Please repeat your Password' );
      
            isValid = false;
        
    }
    else
    {
        $('#pwm-repeat').next('span').text('');
    }

    if($('#telephoneNumber').val().trim() == ''|| $('#telephoneNumber').val().match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) == null)
    {
          $('#telephoneNumber').next('span').text('telephone number is empty or invaild. eg: (123) 456-7890');
      
            isValid = false;
        
    }   
    else
    {
        $('#telephoneNumber').next('span').text('');
    }

    if($('#psw').val().trim() !== $('#pwm-repeat').val().trim())
    {
        $('#pwm-repeat').next('span').text(' Your repeat password is wrong');
        isValid = false;
    }
    else
    {
        $('#pwm-repeat').next('span').text('');
    }

    
    
    

    

    return isValid;
    
    
})