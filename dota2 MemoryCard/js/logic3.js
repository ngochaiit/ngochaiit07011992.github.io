var cards = ['card1', 'card2', 'card3','card4','card5','card6','card7','card8','card9', 'card10', 'card11', 'card12', 'card13', 'card14', 'card15'];
shuffle(cards);
var current = null;
var count = 0;

// flip(cards);

// $(document).hover(function()
// {
//     $('.card').css('pointer-events', 'none');
// }

function shuffle(array)
{
    var currentIndex = array.length, temporaryValue, randomIndex;
    //While there remain elements to shuffle...
    while (0!== currentIndex)
    {
        //Pick a remaining element...
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex -= 1;
        //swap it with the current Element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;

    }
    return array;
}



function flip(card)
{    
    // $('.cardback').on('click', function(){
    //     // $("[attribute=data-name]").css('pointer-events', 'auto');
    //     $(this).addClass('open');
    //     console.log(this);;
    // })
    
    // $()
    let dataName =$(card).attr('data-name');
    let cardBack =$(card).children()[1];
     console.log(card);   
     let cardFont = $(card).children()[0];
     $(cardBack).toggleClass('open');
     $(cardFont).toggleClass('rotate');
    if(!current)
    {
         current = $(card);
        console.log(current);
      
          }
          else
          {
       
        if(current.attr('data-name') !== $(card).attr('data-name'))
        {
            //khac nhau
           
            console.log('khac nhau');
            console.log(card);
           setTimeout(function()
        {
            $(cardBack).toggleClass('open1'); 
            let temporaryCardBack = $(current).children()[1];
            $(temporaryCardBack).toggleClass('open1');
            current = null;
           console.log(current);
          
        },500);
         }
        else{
            //giong nhau
           setTimeout(function()
        {
            let temporaryFontBack = $(current).children()[0];
            $(temporaryFontBack).css('opacity', '0');
            console.log('Giong nhau');
            console.log(current);
            console.log(card);
            $(card).css('opacity', '0');
            current = null;
            count++;
      
            if(count == 15)
            {
                alert("you are win");
                window.location.href = "index2.html";
                }    
        },500);
     }   
    }
}




function progress(timeleft, timetotal, $element) {
    var progressBarWidth = timeleft * $element.width() / timetotal;
    $element.find('div').animate({ width: progressBarWidth }, 500).html(Math.floor(timeleft/60) + ":"+ timeleft%60);
    if(timeleft > 0) {
        setTimeout(function() {
            
            progress(timeleft - 1, timetotal, $element);
            if(timeleft == 1 && count < 15)
            {   

                $(".btn").text("Play again");
                $(".btn").click(function()
            {
                window.location.reload();
            })
            }
        }, 1000);
    }
    
};


function playGame()
{
    progress(50,50, $('#progressBar'));
    $(function()
{
    //nhan doi mang de tao ra cac la bai.
    cards = cards.concat(cards);
    // dao vi tri cac quan bai
    cards = shuffle(cards);
    // chen noi dung vao cac quan bai trong class grid.
    var html = '';
    for(var i = 0; i< cards.length; i++)
    {
        html += '<div class = "card" data-name = "'+ cards[i] +'" onclick ="flip(this)">' +
        '<div class = "effect-picture"><img src = "image/' + cards[i] + '.png"/></div>' +
        '<div class = "cardback" ><img src = "image/cardback.png"/></div>' +
        '</div> '
    };
    $('.grid').html(html);
});


}
