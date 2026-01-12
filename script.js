// ==================== ФУНКЦИИ ========================

// Функция для перемешивания массива
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// ================== ОБЪЕКТ ТЕСТОВ ===================
const tests = {
    geo: [
        {q:"Кадом уқёнус калонтарин аст?", a:["Атлантик","Ором","Ҳинд","Яхбанд"], c:1},
        {q:"Қитъаи калонтарин?", a:["Аврупо","Осиё","Африка","Амрико"], c:1},
        {q:"Харита чӣ нишон медиҳад?", a:["Вақт","Макон","Ҳарорат","Садо"], c:1},
        {q:"Кадом кӯҳ баландтар аст?", a:["Алп","Ҳимолой","Тиёншон","Урал"], c:1},
        {q:"Экватор чист?", a:["Кӯҳ","Хат","Дарё","Қитъа"], c:1},
        {q:"Кадом давлат баҳр надорад?", a:["Италия","Норвегия","Швейтсария","Испания"], c:2},
        {q:"Иқлим чист?", a:["Об","Об-ҳаво","Харита","Шамол"], c:1},
        {q:"Қутбҳо дар куҷоянд?", a:["Экватор","Шимол ва Ҷануб","Ғарб","Шарқ"], c:1},
        {q:"Дарё ба куҷо мерезад?", a:["Кӯҳ","Баҳр","Осмон","Ҷангал"], c:1},
        {q:"Қитъа чандто аст?", a:["4","5","6","7"], c:3},
        {q:"Сахро чист?", a:["Ҷангал","Биёбон","Кӯҳ","Дарё"], c:1},
        {q:"Харитаи сиёсӣ нишон медиҳад?", a:["Кӯҳ","Сарҳад","Иқлим","Об"], c:1},
        {q:"Кадом уқёнус сардтар аст?", a:["Ором","Атлантик","Яхбанд","Ҳинд"], c:2},
        {q:"Баландӣ чиро нишон медиҳад?", a:["Фосила","Сатҳ","Самт","Суръат"], c:1},
        {q:"Кадом қитъа гармтар аст?", a:["Африка","Аврупо","Антарктида","Осиё"], c:0},
        {q:"Кадом баҳр баста аст?", a:["Сиёҳ","Арал","Сурх","Кариб"], c:1},
        {q:"Масштаб чист?", a:["Андоза","Таносуб","Ранг","Шакл"], c:1},
        {q:"Кадом давлат калон аст?", a:["Фаронса","Чин","Ҷопон","Италия"], c:1},
        {q:"Шимол бо чӣ муайян мешавад?", a:["Қутб","Офтоб","Соя","Об"], c:0},
        {q:"География чиро меомӯзад?", a:["Таърих","Макон","Забон","Адабиёт"], c:1}
    ],
    history: [
        {q:"Таърих чиро меомӯзад?", a:["Оянда","Гузашта","Табиат","Забон"], c:1},
        {q:"Сарчашмаи таърихӣ чист?", a:["Афсона","Ҳуҷҷат","Хаёл","Реклама"], c:1},
        {q:"Аср чанд сол дорад?", a:["10","50","100","1000"], c:2},
        {q:"Тақвим барои чӣ лозим?", a:["Вақт","Ҷой","Масофа","Ҳарорат"], c:0},
        {q:"Империя чист?", a:["Шаҳр","Давлати калон","Қишлоқ","Ҷазира"], c:1},
        {q:"Ҷанг чӣ аст?", a:["Бозӣ","Низоъ","Сайр","Созиш"], c:1},
        {q:"Сулҳ чӣ маъно дорад?", a:["Низоъ","Созиш","Ҷанг","Фишор"], c:1},
        {q:"Солнома чист?", a:["Ҳикоя","Сабт","Афсона","Қоида"], c:1},
        {q:"Подшоҳ кист?", a:["Роҳбар","Омӯзгор","Сарбоз","Кишоварз"], c:0},
        {q:"Инқилоб чист?", a:["Оромӣ","Тағйироти калон","Сайр","Созиш"], c:1},
        {q:"Сана чист?", a:["Ҷой","Вақт","Шахс","Ҳодиса"], c:1},
        {q:"Давра чист?", a:["Фосила","Замон","Макон","Ранг"], c:1},
        {q:"Қонун чист?", a:["Маслиҳат","Қоида","Афсона","Реклама"], c:1},
        {q:"Таърихнигор кист?", a:["Муҳандис","Таърихшинос","Сайёҳ","Шоир"], c:1},
        {q:"Маданият чист?", a:["Ҷанг","Мерос","Фишор","Қоида"], c:1},
        {q:"Тамаддун чист?", a:["Дараҷа","Пешрафт","Бозӣ","Ҷазира"], c:1},
        {q:"Асри миёна кадом аст?", a:["XV–XVIII","V–XV","I–V","XX"], c:0},
        {q:"Қадим чӣ маъно дорад?", a:["Нав","Кӯҳна","Оянда","Ҳозира"], c:1},
        {q:"Сарчашмаи хаттӣ?", a:["Санг","Ҳуҷҷат","Овоз","Расм"], c:1},
        {q:"Таърих барои чӣ лозим?", a:["Фаҳмиш","Хаёл","Зебоӣ","Бозӣ"], c:0}
    ],
    tj: [
        {q:"Калимаи абстрактӣ кадом аст?", a:["Санг","Адолат","Дарахт","Китоб"], c:1},
        {q:"Матни мантиқӣ чӣ дорад?", a:["Эҳсос","Пайдарпайӣ","Ороиш","Қофия"], c:1},
        {q:"Синоними «таҳлил»?", a:["Баррасӣ","Пинҳонкунӣ","Ороиш","Нусхабардорӣ"], c:0},
        {q:"Кадом ҷумла далел аст?", a:["Ман фикр мекунам","Ба назарам","Тадқиқот исбот кард","Шояд"], c:2},
        {q:"Антоними «калон»?", a:["Васеъ","Баланд","Хурд","Дароз"], c:2},
        {q:"Калимаи умумӣ?", a:["Саг","Гурба","Ҳайвон","Асп"], c:2},
        {q:"Барои хулоса кадом калима лозим?", a:["Аммо","Зеро","Пас","Гарчанде"], c:2},
        {q:"Кадом услуб илмӣ аст?", a:["Эҳсосӣ","Гуфтугӯӣ","Илмӣ","Бадеӣ"], c:2},
        {q:"Матни илмӣ чӣ надорад?", a:["Факт","Истилоҳ","Эҳсос","Мантиқ"], c:2},
        {q:"Далели қавӣ чист?", a:["Андеша","Эҳсос","Омор","Тахмин"], c:2},
        {q:"Сабаб ва натиҷа ин…", a:["Пайванд","Бозӣ","Тасодуф","Ороиш"], c:0},
        {q:"Калимаи китобӣ?", a:["Раванд","Хона","Об","Даст"], c:0},
        {q:"Кадом зиёдатист?", a:["Тез","Оҳиста","Ором","Миз"], c:3},
        {q:"Мантиқ барои чӣ лозим?", a:["Ороиш","Фаҳмиш","Хаёл","Суръат"], c:1},
        {q:"Мақсади баҳс?", a:["Ғалаба","Ҳақиқат","Ханда","Зебоӣ"], c:1},
        {q:"Ҷумлаи объективӣ?", a:["Ман мехоҳам","Ба фикрам","Маълумот нишон медиҳад","Ман фикр мекунам"], c:2},
                {q:"Антоними «афзоиш»?", a:["Коҳиш","Илова","Баландӣ","Васеъшавӣ"], c:0},
        {q:"Матн чӣ гуна фаҳмо мешавад?", a:["Эҳсос","Сохтор","Ороиш","Қофия"], c:1},
        {q:"Калимаи абстрактӣ?", a:["Озодӣ","Курсӣ","Қалам","Девор"], c:0},
        {q:"Мантиқ чист?", a:["Бетартибӣ","Қоида","Эҳсос","Фантазия"], c:1}
    ],

    ru: [
        {q:"Кадом ибора далел аст?", a:["Ман фикр мекунам","Эҳтимол","Маълумот нишон медиҳад","Ба назари ман"], c:2},
        {q:"Синоними калимаи «анализировать»?", a:["Таҳлил кардан","Пинҳон кардан","Оро додан","Такрор кардан"], c:0},
        {q:"Чӣ матнро мантиқӣ мекунад?", a:["Эҳсосот","Пайвастагӣ","Ҳаҷм","Ороиш"], c:1},
        {q:"Кадом калима абстрактӣ аст?", a:["Миз","Хона","Озодӣ","Қалам"], c:2},
        {q:"Чӣ ба далел тааллуқ надорад?", a:["Факт","Мисол","Андеша","Омор"], c:2},
        {q:"Антоними «увеличить»?", a:["Илова кардан","Васеъ кардан","Баланд кардан","Кам кардан"], c:3},
        {q:"Кадом услуб бетараф аст?", a:["Гуфтугӯӣ","Илмӣ","Эҳсосӣ","Бадеӣ"], c:1},
        {q:"Калимаи хулоса?", a:["Аммо","Гарчанде","Пас","Зеро"], c:2},
        {q:"Кадом зиёдатист?", a:["Себ","Нок","Сабзӣ","Ангур"], c:2},
        {q:"Барои мулоҳиза муҳим аст?", a:["Қофия","Суръат","Сохтор","Баландӣ"], c:2},
        {q:"Кадом ҷумла объективӣ аст?", a:["Ман дӯст медорам","Ба фикрам","Ман мешуморам","Тадқиқот нишон дод"], c:3},
        {q:"Мантиқ чист?", a:["Эҳсос","Фантазия","Тартиб","Бетартибӣ"], c:2},
        {q:"Калимаи умумӣ?", a:["Арча","Санавбар","Дарахт","Бутта"], c:2},
        {q:"Чӣ барои матни илмӣ хос нест?", a:["Факт","Мантиқ","Эҳсос","Истилоҳ"], c:2},
        {q:"Сабаб ва натиҷа — ин…", a:["Пайванд","Тасодуф","Ороиш","Бозӣ"], c:0},
        {q:"Чӣ далелро қавитар мекунад?", a:["Эҳсос","Андеша","Факт","Савол"], c:2},
        {q:"Кадом калима китобӣ аст?", a:["Миз","Хона","Раванд","Даст"], c:2},
        {q:"Ҳадафи асосии мулоҳиза?", a:["Зебоӣ","Ҳақиқат","Ханда","Суръат"], c:1},
        {q:"Кадом зиёдатист?", a:["Тез","Оҳиста","Ором","Курсӣ"], c:3},
        {q:"Мантиқ кӯмак мекунад…", a:["Омехта кардан","Фаҳмидан","Оро додан","Хаёл кардан"], c:1}
    ],

    en: [
        {q:"What is a fact?", a:["Opinion","Feeling","Proven information","Guess"], c:2},
        {q:"Synonym of analyze?", a:["Break down","Hide","Decorate","Repeat"], c:0},
        {q:"Opposite of increase?", a:["Add","Raise","Reduce","Expand"], c:2},
        {q:"Abstract word?", a:["Table","Freedom","Book","Pen"], c:1},
        {q:"Logical text has?", a:["Emotion","Structure","Decoration","Rhyme"], c:1},
        {q:"What is evidence?", a:["Opinion","Fact","Guess","Feeling"], c:1},
        {q:"Purpose of logic?", a:["Confuse","Understand","Decorate","Dream"], c:1},
        {q:"Which is objective?", a:["I think","I like","Research shows","In my view"], c:2},
        {q:"Opposite of fast?", a:["Quick","Slow","Strong","Big"], c:1},
        {q:"General word?", a:["Apple","Fruit","Pear","Grape"], c:1},
        {q:"Scientific style avoids?", a:["Facts","Terms","Emotions","Logic"], c:2},
        {q:"Cause and effect is?", a:["Link","Chance","Game","Art"], c:0},
        {q:"Bookish word?", a:["Process","Home","Hand","Water"], c:0},
        {q:"Strong argument uses?", a:["Emotion","Opinion","Facts","Questions"], c:2},
        {q:"Logic helps to?", a:["Mix","Understand","Decorate","Confuse"], c:1},
        {q:"Opposite of old?", a:["Ancient","New","Past","Used"], c:1},
        {q:"Abstract idea?", a:["Chair","Justice","Wall","Stone"], c:1},
        {q:"Purpose of reasoning?", a:["Beauty","Truth","Speed","Fun"], c:1},
        {q:"Logical connector?", a:["But","Because","Therefore","Although"], c:2},
        {q:"Which is extra?", a:["Fast","Slow","Quiet","Chair"], c:3}
    ]
};

// ======================================================
// ================= ЭЛЕМЕНТЫ СТРАНИЦЫ =================
const menuDiv = document.getElementById("menu");
const testDiv = document.getElementById("test");
const resultDiv = document.getElementById("result");
const historyDiv = document.getElementById("history");
const historyListDiv = document.getElementById("historyList");
const studentNameInput = document.getElementById("studentName");
const roleSelect = document.getElementById("role");

const subjectTitleElement = document.getElementById("subjectTitle");
const questionNumberElement = document.getElementById("qNum");
const timerElement = document.getElementById("timer");
const questionTextElement = document.getElementById("question");
const answersContainer = document.getElementById("answers");

// ======================================================
// ================= ПЕРЕМЕННЫЕ ========================
let currentSubject = "";
let currentTestQuestions = [];
let currentQuestionIndex = 0;
let currentScore = 0;
let currentTimeInSeconds = 300;
let timerInterval;
let hasAnsweredCurrentQuestion = false;
let testResultsHistory = {};

// ======================================================
// =================== ФУНКЦИЯ НАЧАЛА ТЕСТА =================
function startTest(subject) {
    if (roleSelect.value === "teacher") {
        alert("Омӯзгор метавонад тестҳоро оғоз накунад");
        return;
    }

    if (!studentNameInput.value) {
        alert("Лутфан номатонро ворид кунед");
        return;
    }

    currentSubject = subject;
    currentTestQuestions = JSON.parse(JSON.stringify(tests[subject]));

    // Перемешивание вопросов
    shuffleArray(currentTestQuestions);

    // Перемешивание ответов внутри каждого вопроса
    for (let i = 0; i < currentTestQuestions.length; i++) {
        let questionObj = currentTestQuestions[i];
        let answerObjects = [];
        for (let j = 0; j < questionObj.a.length; j++) {
            answerObjects.push({text: questionObj.a[j], index: j});
        }
        shuffleArray(answerObjects);
        questionObj.a = answerObjects.map(ans => ans.text);
        for (let k = 0; k < answerObjects.length; k++) {
            if (answerObjects[k].index === questionObj.c) {
                questionObj.c = k;
                break;
            }
        }
    }

    menuDiv.classList.add("hidden");
    testDiv.classList.remove("hidden");
    subjectTitleElement.textContent = currentSubject;
    currentQuestionIndex = 0;
    currentScore = 0;
    currentTimeInSeconds = 300;
    timerElement.textContent = "05:00";
    startTimer();
    loadQuestion();
}

// ======================================================
// =================== ТАЙМЕР ===========================
function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(function() {
        currentTimeInSeconds--;
        let minutes = String(Math.floor(currentTimeInSeconds / 60)).padStart(2,"0");
        let seconds = String(currentTimeInSeconds % 60).padStart(2,"0");
        timerElement.textContent = minutes + ":" + seconds;

        if (currentTimeInSeconds <= 0) {
            finishTest();
        }
    }, 1000);
}

// ======================================================
// =================== ЗАГРУЗКА ВОПРОСА =================
function loadQuestion() {
    hasAnsweredCurrentQuestion = false;
    questionNumberElement.textContent = currentQuestionIndex + 1;
    questionTextElement.textContent = currentTestQuestions[currentQuestionIndex].q;
    answersContainer.innerHTML = "";

    for (let i = 0; i < currentTestQuestions[currentQuestionIndex].a.length; i++) {
        const btn = document.createElement("button");
        btn.textContent = currentTestQuestions[currentQuestionIndex].a[i];
        btn.onclick = function() { answerQuestion(i, btn); };
        answersContainer.appendChild(btn);
    }
}

// ======================================================
// =================== ОТВЕТ НА ВОПРОС =================
function answerQuestion(selectedIndex, buttonElement) {
    if (hasAnsweredCurrentQuestion) return;
    hasAnsweredCurrentQuestion = true;

    const correctIndex = currentTestQuestions[currentQuestionIndex].c;
    const allButtons = answersContainer.querySelectorAll("button");

    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].disabled = true;
        if (i === correctIndex) {
            allButtons[i].classList.add("correct");
        }
    }

    if (selectedIndex === correctIndex) {
        currentScore += 10;
    } else {
        buttonElement.classList.add("wrong");
    }
}

// ======================================================
// =================== СЛЕДУЮЩИЙ ВОПРОС =================
function nextQuestion() {
    if (!hasAnsweredCurrentQuestion) return;

    currentQuestionIndex++;
    if (currentQuestionIndex >= currentTestQuestions.length) {
        finishTest();
    } else {
        loadQuestion();
    }
}

// ======================================================
// =================== ЗАВЕРШЕНИЕ ТЕСТА =================
function finishTest() {
    clearInterval(timerInterval);
    testDiv.classList.add("hidden");
    resultDiv.classList.remove("hidden");

    let percent = Math.round(currentScore / (currentTestQuestions.length * 10) * 100);
    let grade = percent >= 90 ? 10 :
                percent >= 80 ? 9 :
                percent >= 70 ? 8 :
                percent >= 60 ? 7 :
                percent >= 50 ? 6 :
                percent >= 40 ? 5 :
                percent >= 30 ? 4 :
                percent >= 20 ? 3 :
                percent >= 10 ? 2 : 1;

    resultDiv.innerHTML = "<b>" + studentNameInput.value + "</b><br>" +
                          "Хол: " + currentScore + "/" + (currentTestQuestions.length * 10) + "<br>" +
                          percent + "%<br>" +
                          "<b>Баҳо: " + grade + "</b><br><br>" +
                          "<button class='next' onclick='goToMenu()'>Ба саҳифаи асосӣ</button>";

    testResultsHistory[currentSubject] = currentScore;
}

// ======================================================
// =================== ВОЗВРАТ В МЕНЮ =================
function goToMenu() {
    resultDiv.classList.add("hidden");
    menuDiv.classList.remove("hidden");
}

// ======================================================
// =================== ИСТОРИЯ РЕЗУЛЬТАТОВ ===========
function showResultsHistory() {
    menuDiv.classList.add("hidden");
    historyDiv.classList.remove("hidden");
    historyListDiv.innerHTML = "";

    for (let subjectName in tests) {
        const score = testResultsHistory[subjectName] !== undefined ? testResultsHistory[subjectName] : 0;
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("history-item");
        itemDiv.innerHTML = "<span>" + subjectName + "</span><span>" + score + "</span>";
        historyListDiv.appendChild(itemDiv);
    }
}

// ======================================================
// =================== ВОЗВРАТ НА ГЛАВНУЮ =============
function goHome() {
    historyDiv.classList.add("hidden");
    menuDiv.classList.remove("hidden");
}

