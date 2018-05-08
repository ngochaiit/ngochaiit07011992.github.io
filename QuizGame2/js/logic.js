var questions = [{"question": "the first mechanical computer designed by Charles Babbage was called?",
    "option1": "Abacus",
    "option2": "Analytical Engine",
    "option3": "Caculator",
    "option4": "Processor",
    "answer": "2"},
    {"question": "the country which free tution free for their student and foreign student at university?",
    "option1": "Australia",
    "option2": "Viet Nam",
    "option3": "Russia",
    "option4": "Germany",
    "answer": "4"},
    {"question": "Who is the author has written one of the most popular  novels called HarryPotter?",
    "option1": "Xuan Dieu",
    "option2": "Dan Brown",
    "option3": "J.K Rowling",
    "option4": "David Volattor",
    "answer": "3"},
    {"question": " who is the richest people in the field of information technology in the world?",
    "option1": "Bill Gates",
    "option2": "Steve Job",
    "option3": "Mark Zuckerberg",
    "option4": "Nguyen Tu Quang",
    "answer": "1"},
    {"question": "web pages are written using?",
    "option1": "FTP",
    "option2": "HTTP",
    "option3": "HTML",
    "option4": "URL",
    "answer": "3"},
    {"question" : "Who is the first president in America?",
    "option1": "George Washington",
    "option2": "Donald Trump",
    "option3": "Barack Obama",
    "option4": "George Bush",
    "answer": "1"},
    {"question" : "wwho is the most attractive character in the famous seri comedy movies named The bigbang of Theory?",
    "option1": "Howard Holowit",
    "option2": "leonard hofstadter",
    "option3": "Penny Hofstadter",
    "option4": "Sheldon Cooper",
    "answer": "4"},
    {"question" : "which country has the highest happiness index in the world?",
    "option1":"Germany",
    "option2":"Quatar",
    "option3":"Canada",
    "option4":"Holand",
    "answer": "4"},
    {"question" : "Who was invented the first plane?",
    "option1": "Elon Musk",
    "option2": "Wilbur and Orville Wright",
    "option3": "Marie Curie",
    "option4": "Albert Einstein",
    "answer": "2" },
    {
     "question" : "Which is movies earning the most finance in 2016?",
     "option1": "Jurassic World",
     "option2": "Avanagers",
     "option3": "Thor",
     "option4": "DeadPool",
     "answer": "1"}];

     var currentQuestion = 0;
     var score = 0;
     var toQuestion = questions.length;
     var container = document.getElementById('interface');
     var displayQuestion = document.getElementById('inputQuestion');
     var opt1 = document.getElementById('opt1');
     var opt2 = document.getElementById('opt2');
     var opt3 = document.getElementById('opt3');
     var opt4 = document.getElementById('opt4');
     var btnNext = document.getElementById('btnClick');

     function loadQuestion(questionsIndex){
         var a = questions[questionsIndex];
         for( var questionIndex = 0; questionIndex < toQuestion; questionIndex ++)
         {
         displayQuestion.textContent = [questionsIndex +1] + '.' +a.question;
         opt1.textContent = a.option1;
         opt2.textContent = a.option2;
         opt3.textContent = a.option3;
         opt4.textContent = a.option4;
         }
         
    }
    loadQuestion(currentQuestion);

    function nextQuestion()
    {
        var selectedOption = document.querySelector('input[type=radio]:checked');
        
         
        if(!selectedOption)
        {
            alert('please select an answer!!!');
            return;
        }
        var Finalanswer = selectedOption.value;
        if(questions[currentQuestion].answer == Finalanswer)
        {
            score = score +10;
            currentQuestion++;
        }
        else
        {

            currentQuestion++;
        }
        if(currentQuestion == toQuestion -1)
        {
            btnNext.textContent = 'Finish';
        }
       if(currentQuestion == toQuestion)
        {
            
            console.log(score); 
            checkScore(score);
            
            }
            
           
             loadQuestion(currentQuestion);
            
         }
         
function checkScore(score)
{
    if(score == 100)
    {
        alert("you are winner");
        window.location.replace('index2.html');
    }
    else{
        btnNext.textContent = "play Again";

        alert("your score is" +score);
        btnNext.onclick = window.location.reload();
        
        }

}

