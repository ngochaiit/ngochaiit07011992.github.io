var inForStaffs = [{"avatar": "",
"name": "Leoleard Hofsater",
"role": "experimental physics",
"email": "leoleard@gmail.com",
"Phone": "(741)-034-4573"},
{"avatar": "card2.jpg",
"name": "Sheldon Cooper",
"role": "Theorical Physics",
"email": "SheldonCopper@gmail.com",
"Phone": "(543)-234-1567"},
{"avatar": "card3.jpg",
"name": "Penny HOfstater",
"role": "actress",
"email": "PennyHofstater@gmail.com",
"Phone": "(543)-234-3567"},
{"avatar": "card4.jpg",
"name": "Raj Koothrappali",
"role": "Rocket Science",
"email": " Koothrappali@gmail.com",
"Phone": "(978)-234-1567"},
{"avatar": "card5.jpg",
"name": "Emily Sweeney",
"role": "Doctor",
"email": "Sweeney@gmail.com",
"Phone": "(543)-234-1567"},
{"avatar": "card6.jpg",
"name": "Bernadette Rostenkowskir",
"role": "Medical",
"email": "Rostenkowskir@gmail.com",
"Phone": "(543)-234-9865"},
]



var tbody = $('#myTable');
var body = $('tbody');
var props = ["avatar", "name","role","email","Phone"];
var card = ["card1","card2","card3","card4","card5","card6"];


$.each(inForStaffs, function(i,inForstaff )
{
   
    var tr = $('<tr>').addClass('row'+i);
    body.append(tr);
 
  $.each(props, function(i, prop)
 {
       
            $('<td>').html(inForstaff[prop]).appendTo(tr);

            
       });
       var row = $(tr).children()[0];
       $(row).empty().append('<img src = "image/' + card[i] + '.jpg"/>')



})


function sortTable()
{
  var table, rows, switching, i,x,y,shouldSwitch;
    switching = true;
    while(switching)
    {
      switching = false;
      
      rows = $('tr');
      for( i = 1; i<(rows.length -1 ); i++)
      {
        shouldSwitch= false;
        x = $(rows[i]).children()[1];
        y = $(rows[i + 1]).children()[1];
        console.log(x);
        console.log(y);
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }

       
            }
            if (shouldSwitch) {
              /*If a switch has been marked, make the switch
              and mark that a switch has been done:*/
              rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
              switching = true;
            }

    }
}

function sortTableRole()
{
  var table, rows, switching, i,x,y,shouldSwitch;
    switching = true;
    while(switching)
    {
      switching = false;
      
      rows = $('tr');
      for( i = 1; i<(rows.length -1 ); i++)
      {
        shouldSwitch= false;
        x = $(rows[i]).children()[2];
        y = $(rows[i + 1]).children()[2];
        console.log(x);
        console.log(y);
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }

       
            }
            if (shouldSwitch) {
              /*If a switch has been marked, make the switch
              and mark that a switch has been done:*/
              rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
              switching = true;
            }

    }
}
function sortTableForMail()
{
  var x,y, shouldSwitch,rows, switching ,i;
  switching = true;
  while(switching)
  {
    switching = false;
    rows = $('tr');
    for (i = 1; i < (rows.length - 1); i++)
    {
      shouldSwitch = false;
      x = $(rows[i]).children()[3];
      y = $(rows[i + 1]).children()[3];

      if( x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase())
      {
        shouldSwitch = true;
        break;
      }
    }
    if(shouldSwitch)
    {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    
    }
  }
}
// $(function()
// {
   
//    var row0 = $('.row0').children()[0]; 
//    $(row0).empty().append('<img src="image/card1.jpg" height="60px" width="60px">');

//    var row1 = $('.row1').children()[0]; 
//    $(row1).empty().append('<img src="image/card2.jpg" height="60px" width="60px">');

//    var row2 = $('.row2').children()[0]; 
//    $(row2).empty().append('<img src="image/card3.jpg" height="60px" width="60px">');

//    var row3 = $('.row3').children()[0]; 
//    $(row3).empty().append('<img src="image/card4.jpg" height="60px" width="60px">');

//    var row4 = $('.row4').children()[0]; 
//    $(row4).empty().append('<img src="image/card5.jpg" height="60px" width="60px">');

//    var row5 = $('.row5').children()[0]; 
//    $(row5).empty().append('<img src="image/card6.jpg" height="60px" width="60px">');




// })

