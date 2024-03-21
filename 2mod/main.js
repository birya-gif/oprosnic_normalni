const questions = [
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
    commentar: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, eveniet!',
  },
  {
    question:
      'Где должны находиться запорные, отсекающие и предохранительные устройства, устанавливаемые на нагнетательном и всасывающем трубопроводах насоса или компрессора?',
    answers: [
      'На максимально приближенном расстоянии к насосу (компрессору).',
      'В помещении пульта управления насосами (компрессорами).',
      'На расстоянии не менее 100 диаметров трубопровода.',
      'Нормативными документами не регламентируется.',
    ],
    correct: 1,
  },
  {
    question: 'Каковы условия опрессовки технологических трубопроводов после их монтажа?',
    answers: [
      'В любом случае давление опрессовки должно составлять 1,1 рабочего давления.',
      'В любом случае давление опрессовки должно быть не менее 1,15 рабочего давления.',
      'Давление опрессовки должно быть равно рабочему давлению.',
      'Условия опрессовки устанавливаются проектной документацией, а также нормативно-техническими документами в области промышленной безопасности.',
    ],
    correct: 4,
  },
  {
    question:
      'Кем определяются критерии вывода из эксплуатации оборудования, инструментов, контрольно-измерительных приборов?',
    answers: [
      'Организацией-изготовителем.',
      'Ростехнадзором или его территориальным органом.',
      'Эксплуатирующей организацией или ее структурным подразделением.',
      'Поставщиком оборудования.',
    ],
    correct: 1,
  },
  {
    question:
      'Кем выполняются работы по определению возможности продления сроков безопасной эксплуатации технических устройств, оборудования и сооружений?',
    answers: [
      'Поставщиком оборудования.',
      'Экспертной организацией.',
      'Организацией-изготовителем.',
      'Территориальным органом Ростехнадзора.',
    ],
    correct: 2,
  },
  {
    question: 'Каким образом производится резка талевых канатов?',
    answers: [
      'С использованием электросварки, имеющей надежное заземление.',
      'С использованием специальных приспособлений и применением защитных очков (масок).',
      'С использованием любой технологической резки.',
      'Только с использованием разрывной машины.',
    ],
    correct: 2,
  },
  {
    question: 'От чего зависит частота осмотров каната?',
    answers: [
      'От характера и условий работы.',
      'От рекомендаций экспертных организаций.',
      'От требований, установленных в нормативных документах.',
      'От рекомендаций завода-изготовителя.',
    ],
    correct: 1,
  },
  {
    question:
      'Какое напряжение должно применяться для питания переносных электрических светильников, используемых при работах в особо неблагоприятных условиях и наружных установках?',
    answers: ['Не выше 127 В.', 'Не выше 50 В.', 'Не выше 12 В.'],
    correct: 1,
  },
  {
    question: 'Кто должен обслуживать электрооборудование установки?',
    answers: [
      'Электротехнический персонал с группой по электробезопасности не ниже III.',
      'Электротехнический персонал с группой по электробезопасности не ниже II.',
      'Электротехнический персонал, имеющий соответствующую квалификацию и допуск к работе.',
    ],
    correct: 3,
  },
  {
    question:
      'Разрешается ли последовательное соединение между собой заземляющих устройств разных зданий, сооружений, установок при помощи одного заземляющего проводника?',
    answers: [
      'Допускается.',
      'Допускается при условии, что общее сопротивление заземляющего проводника не превышает 20 Ом.',
      'Не допускается.',
      'Не допускается, за исключением аппаратов или резервуаров, установленных  в одном обваловании.',
    ],
    correct: 3,
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
const mod = document.querySelector('.mod2');

//Переменные
let score = 0; //количество правильных ответов
let questionIndex = 0; // номер текущего вопроса
let numberCurrentQuestion;

clearPage();
showQuestion();
submitBtn.onclick = checkAnswer;
setTimeout(showResults, 602000001);

function clearPage() {
  headerContainer.innerHTML = '';
  listContainer.innerHTML = '';
  mod.innerHTML = '';
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
      allAnswers.style.paddingLeft = '15px';
      item.answers.forEach((answer) => {
        const li = document.createElement('li');
        li.textContent = answer;
        allAnswers.appendChild(li);
      });

      console.log(allAnswers);

      const li = document.createElement('li');
      li.innerHTML = `
				  <b>Вопрос:</b> ${item.question} <br /> <br />
		  <b>Все ответы:</b> <br />  <ul style="padding-left: 25px">${allAnswers.innerHTML}</ul> <br />
				  <b>Правильный ответ:</b> ${item.answers[item.correct - 1]}
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
      allAnswers.style.paddingLeft = '15px';
      item.answers.forEach((answer) => {
        const li = document.createElement('li');
        li.textContent = answer;
        allAnswers.appendChild(li);
      });

      console.log(allAnswers);

      const li = document.createElement('li');
      li.innerHTML = `
				  <b>Вопрос:</b> ${item.question} <br /> <br />
		  <b>Все ответы:</b> <br />  <ul  style="padding-left: 25px">${allAnswers.innerHTML}</ul> <br />
				  <b>Правильный ответ:</b> ${item.answers[item.correct - 1]}
				  <b>Комментарий::</b> ${item.commentar}
			  `;

      incorrectNode.appendChild(li);
    });
  }
}

function showQuestion() {
  //вопрос
  const headerTemplate = '<h2 class="title">%title%</h2>';
  const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);
  headerContainer.innerHTML = title;

  //варианты ответов
  let answerNumber = 1;
  for (answerText of questions[questionIndex]['answers']) {
    const questionTemplate = `
  <li>
     <label>
	    <input value="%number%" type="radio" class="answer" name="answer" />
	     <span>%answer%</span>
     </label>
  </li>`;

    const answerHTML = questionTemplate.replace('%answer%', answerText).replace('%number%', answerNumber);

    listContainer.innerHTML = listContainer.innerHTML + answerHTML;
    answerNumber++;
  }
}

function checkAnswer() {
  //находим выбранную кнопку
  const checkedRadio = listContainer.querySelector('input[type="radio"]:checked');

  if (!checkedRadio) {
    submitBtn.blur();
    return;
  }
  //узнаем номер ответа пользователя
  const userAnswer = parseInt(checkedRadio.value);
  //если ответ верен

  const currentQuestion = questions[questionIndex];
  if (userAnswer === questions[questionIndex]['correct']) {
    score++;
    right.push(questions[questionIndex]);
  } else {
    incorrect.push(questions[questionIndex]);
  }
  if (questionIndex === questions.length - 1) {
    clearPage();
    showResults();
  } else {
    questionIndex++;
    clearPage();

    showQuestion();
  }
}

function showResults() {
  mod.innerHTML = 'Перейти к 1 билету';
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
