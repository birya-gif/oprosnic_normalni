const questions = [
	{
	  question:
		'Каким документом определяется порядок организации и производства работ на одном объекте нескольких подразделений одной организации, эксплуатирующей ОПО?',
	  answers: [
		'Регламентом об организации безопасного производства работ, утвержденным руководителем этой организации.',
		'Положением о производственном контроле организации.',
		'Нарядом-допуском, оформленным техническим руководителем организации.',
		'Производственным заданием, выданным руководителем организации или лицом, его замещающим.',
		'Графиком взаимодействия, согласованным с вышестоящей организацией.',
	  ],
	  correct: 1,
	  commentar:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, eveniet!',
	},
  
	{
	  question:
		'Кем утверждается перечень работ, осуществляемых по наряду-допуску, порядок оформления нарядов-допусков, перечни должностей специалистов, имеющих право выдавать и утверждать наряды-допуски?',
	  answers: [
		'Руководителем организации.',
		'Техническим руководителем организации.',
		'Специалистом по охране труда.',
		'Представителем территориальных органов Ростехнадзора.',
	  ],
	  correct: 2,
	  commentar:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, eveniet!',
	},
	{
	  question:
		'По какому принципу должны быть идентифицированы ОПО при разведке и обустройстве нефтяных, газовых и газоконденсатных месторождений, содержащих сернистый водород и другие вредные вещества?',
	  answers: [
		'По радиусам возможных выбросов и утечек паров и газов.',
		'По уровням потенциальной и реальной угроз безопасности работников.',
		'По наличию в технологическом процессе агрессивных компонентов, вызывающих коррозию металла.',
		'По классам опасности возможных выбросов и утечек паров и газов в атмосферу.',
	  ],
	  correct: 4,
	  commentar:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, eveniet!',
	},
	{
	  question: 'Что допускается в пределах территории буферной зоны?',
	  answers: [
		'Функционирование спортивных сооружений, дошкольных, школьных, лечебно-профилактических и оздоровительных учреждений.',
		'Остановка и стоянка транзитного пассажирского железнодорожного и любого автомобильного транспорта на дорогах общего пользования.',
		'Строительство производственных и иных объектов, не связанных с разработкой месторождения.',
		'Размещение в вахтовых проселках рабочих, работающих на месторождении, при условии выполнения всех проектных решений по обустройству месторождения.',
	  ],
	  correct: 4,
	  commentar:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, eveniet!',
	},
	{
	  question: 'Какое требование установлено к освещению в зонах работ на открытых площадках в ночное время?',
	  answers: [
		'Освещенность площадок должна составлять не менее 100 лк.',
		'Применение ручных светильников с аккумуляторами в ночное время  не допускается.',
		'Необходимо предусматривать стационарное аварийное или эвакуационное освещение.',
		'Необходимо предусматривать комбинированное освещение, используя для местного освещения галогенные лампы.',
	  ],
	  correct: 3,
	  commentar:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, eveniet!',
	},
	{
	  question: 'С учетом чего должен производиться выбор вида освещения производственных и вспомогательных помещений?',
	  answers: [
		'С учетом максимального использования естественного освещения.',
		'С учетом минимального использования естественного освещения.',
		'С учетом режима экономии электроэнергии.',
		'С учетом оптимальной нагрузки на источники электроэнергии.',
	  ],
	  correct: 1,
	  commentar:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, eveniet!',
	},
	{
	  question: 'Чем должны оборудоваться объекты, для обслуживания которых требуется подъем рабочего на высоту?',
	  answers: [
		'При подъеме на высоту до 1,0 м – ступенями, а на высоту выше 1,0 м – лестницами с перилами.',
		'При подъеме на высоту до 0,75 м – настилом с планками, а на высоту выше 0,75 м – ступенями.',
		'При подъеме на высоту до 1,5 м – ступенями, а на высоту выше 1,5 м – лестницами с перилами.',
		'При подъеме на высоту до 0,75 м – ступенями, а на высоту выше 0,75 м – лестницами с перилами.',
	  ],
	  correct: 4,
	  commentar:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, eveniet!',
	},
	{
	  question: 'Из каких материалов изготавливается настил для рабочих площадок, расположенных на высоте?',
	  answers: [
		'Из металлических листов, исключающих возможность скольжения.',
		'Из досок толщиной не менее 40 мм.',
		'Из металлических листов, исключающих возможность скольжения, или из досок толщиной не менее 40 мм.',
		'Из пруткового (круглого) проката.',
		'При наличии перил на площадках допускается настил из гладких металлических листов.',
	  ],
	  correct: 3,
	  commentar:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, eveniet!',
	},
	{
	  question: 'С какой периодичностью следует испытывать предохранительные пояса и фалы статической нагрузкой?',
	  answers: [
		'Не реже одного раза в год.',
		'Не реже одного раза в квартал.',
		'Не реже одного раза в три года.',
		'Не реже двух раз в год.',
	  ],
	  correct: 4,
	  commentar:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, eveniet!',
	},
	{
	  question:
		'В каком случае допускается временное применение деревянных настилов из досок толщиной не менее 40 мм при ведении работ на пожаровзрывоопасных производствах (установках подготовки нефти, резервуарных парках)?',
	  answers: [
		'В случае выполнения аварийно-спасательных работ.',
		'В случае ведения работ с лесов во время ремонта полностью остановленных оборудования и аппаратов.',
		'Временное применение деревянных настилов не допускается.',
		'В случае ликвидации утечек опасных жидкостей.',
		'В случае ввода в эксплуатацию нового оборудования и аппаратов.',
	  ],
	  correct: 2,
	  commentar:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, eveniet!',
	},
	
  ];
  const right = [];
  const incorrect = [];
  
  //находим элементы
  const headerContainer = document.querySelector('#header');
  const listContainer = document.querySelector('#list');
  const submitBtn = document.querySelector('#submit');
  const rightNode = document.querySelector('#right');
  const incorrectNode = document.querySelector('#incorrect');
  const mod=document.querySelector('.mod2');
  
  //Переменные
  let score = 0; //количество правильных ответов
  let questionIndex = 0; // номер текущего вопроса
  let numberCurrentQuestion;
  
  clearPage();
  showQuestion();
  submitBtn.onclick = checkAnswer;


function clearPage() {
  headerContainer.innerHTML = '';
  listContainer.innerHTML = '';
  mod.innerHTML='';
  submitBtn.innerText = 'Ответить';
}

function createAllAnswers() {
	rightNode.style.display = 'block';
	rightNode.style.paddingBottom = '20px';
	rightNode.style.borderBottom = '1px solid black';
	incorrectNode.style.display = 'block';
	incorrectNode.style.paddingBottom = '20px';
	incorrectNode.style.borderBottom = '1px solid black';
  
	if (!right.length) {
	  rightNode.innerHTML = '<h1>Правильных ответов нет</h1>';
	} else {
	  // рендер верных
	  right.forEach((item) => {
  
		// делаем список ВСЕХ ответов
		const allAnswers = document.createElement('ul');
		allAnswers.style.paddingLeft = '15px'
		item.answers.forEach(answer => {
		  const li = document.createElement('li');
		  li.textContent = answer;
		  allAnswers.appendChild(li);
		});
  
		console.log(allAnswers)
  
		const li = document.createElement('li');
		li.innerHTML = `
				  <b>Вопрос:</b> ${item.question} <br /> <br />
		  <b>Все ответы:</b> <br />  <ul style="padding-left: 25px">${allAnswers.innerHTML}</ul> <br />
				  <b>Правильный ответ:</b> ${item.answers[item.correct-1]}
		  <br />
		  <b>Комментарий::</b> ${item.commentar}
		  <br />
			  `;
  
		rightNode.appendChild(li);
	  });
	}
  
	if (!incorrect.length) {
	  incorrectNode.innerHTML = '<h1>Неправильных ответов нет</h1>';
	} else {
	  // рендер неверных
	  incorrect.forEach((item) => {
  
		// делаем список ВСЕХ ответов
		const allAnswers = document.createElement('ul');
		allAnswers.style.paddingLeft = '15px'
		item.answers.forEach(answer => {
		  const li = document.createElement('li');
		  li.textContent = answer;
		  allAnswers.appendChild(li);
		});
		
		console.log(allAnswers)
  
		const li = document.createElement('li');
		li.innerHTML = `
				  <b>Вопрос:</b> ${item.question} <br /> <br />
		  <b>Все ответы:</b> <br />  <ul  style="padding-left: 25px">${allAnswers.innerHTML}</ul> <br />
				  <b>Правильный ответ:</b> ${item.answers[item.correct-1]}
				  <b>Комментарий::</b> ${item.commentar}
			  `;
  
		incorrectNode.appendChild(li);
	  });
	}
  }


function showQuestion(){



//вопрос
const headerTemplate='<h2 class="title">%title%</h2>';
const title=headerTemplate.replace('%title%', questions[questionIndex]['question']);
headerContainer.innerHTML=title;




//варианты ответов
let answerNumber=1;
for (answerText of questions[questionIndex]['answers']){
	

const questionTemplate=`
  <li>
     <label>
	    <input value="%number%" type="radio" class="answer" name="answer" />
	     <span>%answer%</span>
     </label>
  </li>`;
 
  const answerHTML=questionTemplate
  .replace('%answer%',answerText )
  .replace('%number%', answerNumber);



 listContainer.innerHTML=listContainer.innerHTML+answerHTML;
answerNumber++;
}

}


function checkAnswer(){
	
     //находим выбранную кнопку
	 const checkedRadio=listContainer.querySelector('input[type="radio"]:checked')
	 
	 
	 if (!checkedRadio){
		submitBtn.blur();
		return
	 }
//узнаем номер ответа пользователя
	 const userAnswer=parseInt(checkedRadio.value)
	 //если ответ верен
	
	 const currentQuestion=questions[questionIndex]
	 if (userAnswer===questions[questionIndex]['correct']){
		score++;
		right.push(questions[questionIndex]);
	 } else {
		incorrect.push(questions[questionIndex]);
	 

	 }
	 if (questionIndex===questions.length-1){
		clearPage();
		showResults();
		
	 }else{
		questionIndex++;
		clearPage();
		
		showQuestion();
		
	 }
	
}
	
	
	function showResults() {
		mod.innerHTML='Перейти к 2 билету';
		const resultsTemplate = `
			  
			  <h2 class="title">%title%</h2>
			  <h3 class="summary">%message%</h3>
			  <p class="result">%result%</p>
			  `;
		let title, message;
		if (score === questions.length) {
		  title = 'Поздравляем!';
		  message = 'Вы ответили верно на все вопросы!';
		} else if ((score * 100) / questions.length >= 50) {
		  title = 'Неплохой результат!';
		  message = 'Вы дали правильные ответы на более половины правильных ответов!';
		} else {
		  title = 'Вам стоит постараться еще раз';
		  message = 'Вы дали меньше половины правильных ответов!';
		}
	  
		// результат
	  
		let result = `${score} из 10`;
	  
		const finalMessage = resultsTemplate
		  .replace('%title%', title)
		  .replace('%message%', message)
		  .replace('%result%', result);
		headerContainer.innerHTML = finalMessage;
		submitBtn.blur();
		submitBtn.innerText = 'попробовать снова';
		submitBtn.onclick = () => history.go();
	  
		createAllAnswers();
	  }