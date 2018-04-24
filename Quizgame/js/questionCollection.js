/*var questions = [{"question": "the first mechanical computer designed by Charles Babbage was called?",
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
				"answer": "3"}];
				function toNextQuestion()
{
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption)
	{
		alert('please select an answer!!');
		return;
	}
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer)
	{
		score += 10;
		alert("Correct!!");
	}
	else{
		alert('Wrong!!');
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == toQuestions - 1)
	{
		btnNext.textContent = 'Finish';
	}
	if(currentQuestion == toQuestions)
	{
		container.style.display = 'none';
		resultCount.style.display = '';
		resultCount.textContent = 'your score: ' +score;
		return;
	}
	loadQuestion(currentQuestion);
	
}
loadQuestion(currentQuestion);