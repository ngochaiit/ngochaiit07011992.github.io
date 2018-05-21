var cards = ['card1', 'card2','card3','card4','card5','card6','card7','card8','card9','card10'];
current = null;
shuffle(cards);
console.log(shuffle(cards));
score = 0;
function shuffle(array)
{
    var currentIndex =  array.length , temporaryValue, randomIndex;
    
    //While there remain elements to shuffle....
    while (0 !== currentIndex)
    {
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex -= 1;
        // And swap it with the current Element
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

//function lat bai

function flip(card)
{
    
   let cardBack2 = $(card).children()[1];
   let cardBack1 = $(current).children()[1];
   let cardFont1 = $(current).children()[0];
   
   $(cardBack2).toggleClass('open'); 
   

   
   if(!current)
   {
       current =$(card);
       $(current).css('pointer-events', 'none');
       

   }
   else{
       if(current.attr('data-name') != $(card).attr('data-name'))
       {
           //khac nhau
           $(current).css('pointer-events', 'auto');
           
           setTimeout(function()
        {
            console.log("Khac nhau");
         
        $(cardBack1).toggleClass('open');
         $(cardBack2).toggleClass('open'); 
           
           current = null;
        }, 500);
           
       }
       else

       {
           setTimeout(function()
        {
            score = score +1;
            
            console.log('giong nhau');
           $(cardFont1).css('opacity', '0');
            $(card).css('opacity','0');
            $(current).css('pointer-events', 'none');
            $(card).css('pointer-events','none');
            current = null;
            if(score == 10)
            {
                alert("You are Win");
            }
        },200);
           //Giong nhau
          
       }
   }
   

}

 $(function()
{
    // nhan doi mang de tao ra cac cap bai
    cards = cards.concat(cards);
    //dao vi tri cac quan bai
    cards = shuffle(cards);
    // chen noi dung (cac quan bai vao trong element co class content la grid)
    var html = '';
    for(var i = 0; i< cards.length; i++)
    {
        html += '<div class = "card" data-name = "' + cards[i] + '" onclick = "flip(this)">' +
        '<div class = "effect-picture"><img src = "image/' +cards[i] +'.png"></div>' +
        '<div class = "cardback"><img src = "image/cardback.png"></div>'+
        '</div>'

    };
    $('.grid').html(html);
})

function test()
{
    $('.cardback').addClass('open1');
}

function progress(timeleft, timetotal, $element) {
    var progressBarWidth = timeleft * $element.width() / timetotal;
    $element.find('div').animate({ width: progressBarWidth }, 500).html(Math.floor(timeleft/60) + ":"+ timeleft%60);
    if(timeleft > 0) {
        setTimeout(function() {
            
            progress(timeleft - 1, timetotal, $element);
            if(timeleft ==1)
            {
                window.location.href = "index2.html";
            }
        }, 1000);
    }
    
};
progress(200,200, $('#progressBar'));
