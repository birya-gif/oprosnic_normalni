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
    correct: 1,
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
    correct: 0,
  },
  {
    question: 'Каковы условия опрессовки технологических трубопроводов после их монтажа?',
    answers: [
      'В любом случае давление опрессовки должно составлять 1,1 рабочего давления.',
      'В любом случае давление опрессовки должно быть не менее 1,15 рабочего давления.',
      'Давление опрессовки должно быть равно рабочему давлению.',
      'Условия опрессовки устанавливаются проектной документацией, а также нормативно-техническими документами в области промышленной безопасности.',
    ],
    correct: 3,
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
    correct: 0,
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
    correct: 1,
  },
  {
    question: 'Каким образом производится резка талевых канатов?',
    answers: [
      'С использованием электросварки, имеющей надежное заземление.',
      'С использованием специальных приспособлений и применением защитных очков (масок).',
      'С использованием любой технологической резки.',
      'Только с использованием разрывной машины.',
    ],
    correct: 1,
  },
  {
    question: 'От чего зависит частота осмотров каната?',
    answers: [
      'От характера и условий работы.',
      'От рекомендаций экспертных организаций.',
      'От требований, установленных в нормативных документах.',
      'От рекомендаций завода-изготовителя.',
    ],
    correct: 0,
  },
  {
    question:
      'Какое напряжение должно применяться для питания переносных электрических светильников, используемых при работах в особо неблагоприятных условиях и наружных установках?',
    answers: ['Не выше 127 В.', 'Не выше 50 В.', 'Не выше 12 В.'],
    correct: 0,
  },
  {
    question: 'Кто должен обслуживать электрооборудование установки?',
    answers: [
      'Электротехнический персонал с группой по электробезопасности не ниже III.',
      'Электротехнический персонал с группой по электробезопасности не ниже II.',
      'Электротехнический персонал, имеющий соответствующую квалификацию и допуск к работе.',
    ],
    correct: 1,
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
    correct: 2,
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
const fio=document.querySelector('#fio');
const job=document.querySelector('#job');
const prov=document.querySelector('#pv');
const provd=document.querySelector('#pvd')

const btn = document.querySelector('#submit2');

if (btn) {
  btn.addEventListener('click', click);

  function click(e) {
    e.preventDefault();
    let fio = document.querySelector('#name').value;
    localStorage.setItem('name2', fio);

    let job=document.querySelector('#job').value;
    localStorage.setItem('job2',job);

    let prov=document.querySelector('#prov').value;
    localStorage.setItem('prov2',prov);
   
    let provd=document.querySelector('#provd').value;
    localStorage.setItem('provd2',provd);

    window.location.href = './opros.html';
  }
}

//Переменные
let score = 0; //количество правильных ответов
let questionIndex = 0; // номер текущего вопроса
let numberCurrentQuestion;

clearPage();
showQuestion();
submitBtn.onclick = checkAnswer;
setTimeout(clearPage, 602000);
setTimeout(showResults, 602001);

function clearPage() {
  headerContainer.innerHTML = '';
  listContainer.innerHTML = '';
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
				<b>Правильный ответ:</b> ${item.answers[item.correct]}
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
				<b>Правильный ответ:</b> ${item.answers[item.correct]}
			`;

      incorrectNode.appendChild(li);
    });
  }
  const name = localStorage.getItem('name2');
  fio.innerHTML = `<h1>ФИО:${name}</h1>`;
  fio.style.paddingTop = '15px';

  const job = localStorage.getItem('job2');
  jb.innerHTML = `<h1>Должность:${job}</h1>`;
  jb.style.paddingTop = '15px';

  const prov = localStorage.getItem('prov2');
  pv.innerHTML = `<h1>ФИО проверяющего:${prov}</h1>`;
  pv.style.paddingTop = '15px';

  const provd = localStorage.getItem('provd2');
  pvd.innerHTML = `<h1>Должность проверяющего:${provd}</h1>`;
  pvd.style.paddingTop = '15px';
}

function showQuestion() {
  numberCurrentQuestion = Math.round(0 - 0.5 + Math.random() * (questions.length - 1 - 0 + 1));

  //вопрос
  const headerTemplate = '<h2 class="title">%title%</h2>';
  const title = headerTemplate.replace('%title%', questions[numberCurrentQuestion].question);
  headerContainer.innerHTML = title;
  
  //варианты ответов
  let answerNumber = 1;
  for (answerText of questions[numberCurrentQuestion]['answers']) {
    const questionTemplate = `
		<li>
			<label>
				<input value="%number%" type="radio" class="answer" name="answer" />
				<span>%answer%</span>
			</label>
		</li>`;

    const answerHTML = questionTemplate.replace('%answer%', answerText).replace('%number%', answerNumber);

    listContainer.innerHTML= answerHTML +listContainer.innerHTML ;
    answerNumber++;
  }
  
  questionIndex++;
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
  const currentQuestion = questions.splice(numberCurrentQuestion, 1)[0];

  if (userAnswer === currentQuestion['correct'] +1) {
    score++;
    right.push(currentQuestion);
  } else {
    incorrect.push(currentQuestion);
  }

  if (questionIndex === 10) {
    clearPage();

    showResults();
    // clearTime();
  } else {
    clearPage();
    showQuestion();
    // clearTime();
  }
}

function showResults() {
  const timer = document.querySelector('#app');
  timer.remove();
  const resultsTemplate = `
  
		<h2 class="title">%title%</h2>
		<h3 class="summary">%message%</h3>
		<p class="result">%result%</p>
		`;
 

  let title, message;
  if (score === questions.length) {
    title = '';
    message = 'Вы ответили верно на все вопросы!';
  } else if ((score * 100) / questions.length >= 50) {
    title = '';
    message = 'Вы дали правильные ответы на более половины правильных ответов!';
  } else {
    title = '';
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
  submitBtn.innerText = 'Вернуться на главную';
  submitBtn.onclick = () => history.back(-17);

  createAllAnswers();
 

}

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: 'green',
  },
  warning: {
    color: 'orange',
    threshold: WARNING_THRESHOLD,
  },
  alert: {
    color: 'red',
    threshold: ALERT_THRESHOLD,
  },
};

const TIME_LIMIT = 600;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

startTimer();

function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  const timer = () => {
    const numberOfMinutes = 10.0;
    let deadlineTime = new Date(new Date().getTime() + numberOfMinutes * 60 * 1000);
    const countDown = setInterval(function () {
      let now = new Date().getTime();
      let remainingTime = deadlineTime - now;
      let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      document.getElementById('app').innerHTML = minutes + ':' + seconds;
      if (remainingTime < 0) {
        clearInterval(countDown);
        document.getElementById('app').innerHTML = '';
      }
    }, 1000);
  };
  timer();
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document.getElementById('base-timer-path-remaining').classList.remove(warning.color);
    document.getElementById('base-timer-path-remaining').classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document.getElementById('base-timer-path-remaining').classList.remove(info.color);
    document.getElementById('base-timer-path-remaining').classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(calculateTimeFraction() * FULL_DASH_ARRAY).toFixed(0)} 283`;
  document.getElementById('base-timer-path-remaining').setAttribute('stroke-dasharray', circleDasharray);
}
