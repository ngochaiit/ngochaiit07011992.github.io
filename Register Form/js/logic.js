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

//  $(document).on("submit", "form", function(event)
//  {
//     event.preventDefault();

//     var url=$(this).attr("action");
//     $.ajax({
//         url: url,
//          type: 'GET',
//        dataType: "JSON",
//         data: new FormData(this),
//        processData: false,
//        contentType: false,
//        success: function (data, status)
//        {
//            $('#demo').html(data); //content loads here

//        },
//        error: function (xhr, desc, err)
//        {
//            console.log("error");

//        }
//    });        
//  });
