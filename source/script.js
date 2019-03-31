
var StringFirst = ["<p><b>2060 год.</b> На планете Земля серьёзная экологическая катастрофа." +
" Безрассудное техногенное воздействие человека на природу привело к страшным последствиям:</p>" +
"<ul class=\"list\"><li class=\"list-item\">биосфера истощена</li>" +
"<li class=\"list-item\">озоновый слой в критическом состоянии</li>" +
"<li class=\"list-item\">идут кислотные дожди</li>" +
"<li class=\"list-item\">произошло заболачивание и иссушение плодородных земель</li>" +
"<li class=\"list-item\">экономика разрушена</li>" +
"<li class=\"list-item\">социум деградировал</li></ul>" +
"<p>Принимаем решение. Совершить путешествие  в разные эпохи для формирования " +
"экологической культуры землян на основе законов физики.</p>" +
"<p>Отправиться спасать планету?</p>",

"<p><b>Около 1 миллиона лет до нашей эры. Освоение древнеми людми огня.</b></p><p>Леса" +
" – это легкие нашей планеты. От их объема и состояния во многом зависит то, " +
"каким воздухом мы дышим. Кроме того, лес – источник неисчерпаемых богатств, " +
"он кормит, одевает, согревает и лечит. Именно поэтому каждого человека, чья " +
"деятельность связана с лесной отраслью (кстати, одной из важнейших в России с " +
"точки зрения экономики), можно считать, хранителем будущего. Леса занимают " +
"около трети площади суши, и общая площадь лесов на Земле составляет 38 миллионов "+
"кв. км. Половина этой лесной зоны принадлежит тропическим лесам, четвертая часть " +
"расположена в северном полушарии. Площадь лесов в России составляет примерно 8 миллионов кв. км."];

var journal = document.getElementById("journal");
var buttonNext = document.getElementById("next");
var buttonYes = document.getElementById("play-yes");
var buttonNo = document.getElementById("play-no");
var action = document.getElementById("action");
var position = 0;

buttonNext.addEventListener("click", quest1_1);

function enableButtons(fnYes, fnNo)
{
  buttonYes.style.backgroundColor = "#4CAF50";
  buttonYes.addEventListener("click", fnYes);

  buttonNo.style.backgroundColor = "rgb(143, 6, 24)";
  buttonNo.addEventListener("click", fnNo);
}

function disableButtons(fnYes, fnNo)
{
  buttonYes.removeEventListener("click", fnYes);
  buttonNo.removeEventListener("click", fnNo);
  buttonYes.style.backgroundColor = "#333";
  buttonNo.style.backgroundColor = "#333";
}

function playYes()
{
  buttonNext.addEventListener("click", quest1_2);
  journal.innerHTML += "<p>Приключение начинается.</p>";
  disableButtons(playYes, playNo);
  buttonNext.click();
}

function playNo()
{
  journal.innerHTML += "<p>Планета продолжает умирать.</p>";
  action.innerHTML = "<img src=\"../media/quest1_3.jpg\"></img>";
  disableButtons(playYes, playNo);
}

// ПЕРВАЯ ЭПОХА

function quest1_1() {

  video = document.getElementsByTagName("video")[0];
  buttonNext.removeEventListener("click", quest1_1);
  video.play();

  video.addEventListener("ended", function () {
    action.innerHTML = "<img src=\"../media/quest1_2.png\"></img>";
    enableButtons(playYes, playNo);
    journal.innerHTML += StringFirst[0];
    journal.scrollTop = journal.scrollHeight;
  });
}

function quest1_2()
{
  buttonNext.removeEventListener("click", quest1_2);
  action.innerHTML = "<video src=\"../media/quest1_4.MP4\"></video>";
  video = document.getElementsByTagName("video")[0];
  video.play();
  video.addEventListener("ended", quest1_3);
  journal.innerHTML += StringFirst[1];
  journal.scrollTop = journal.scrollHeight;
}

function quest1_3()
{  
  action.innerHTML = "<div class=\"flex-container\"><p>За один год один человек на освещение, " +
    "обогрев жилья и для приготовления пищи  в среднем тратит " +
    "360 МДж энергии. Население России составляет 147 млн человек." +
    " Удельная теплота сгорания древесины составляет 13 МДж/кг, " +
    "средняя масса одного дерева равна 814 кг. Рассчитайте, сколько" +
    " деревьев могут сжечь для своих нужд жители России за год.</p>";
  action.innerHTML += "<div class=\"flex-container-row\">"+
    "<button class=\"min-button mistake\">1 мил.</button>" +
    "<button id=\"true-choose\" class=\"min-button\">50 мил.</button>" +
    "<button class=\"min-button mistake\">500 мил.</button>" +
    "<button class=\"min-button mistake\">300 тыc.</button>" +
    "<button class=\"min-button mistake\">3 мил.</button></div></div>";
  
  button = document.getElementById("true-choose");
  button.addEventListener("click", quest1_4);
}

function quest1_4()
{

  journal.innerHTML += "<p>Участникам путешествия  необходимо предложить " +
    "жителям этой эпохи правила экологического поведения в соответствии " +
    "из одной зелёных аксиом. Это станет условием возможности путешествия" +
    " в следующую эпоху.</p>";
  action.innerHTML = "<div class=\"flex-container-row\">" +
    "<img id=\"true-choose\" class=\"axioms\" src=\"../media/quest1_5_1.png\"></img>" +
    "<img class=\"axioms mistake\" src=\"../media/quest1_5_2.png\"></img>" +
    "<img class=\"axioms mistake\" src=\"../media/quest1_5_3.png\"></img>" +
    "<img class=\"axioms mistake\" src=\"../media/quest1_5_4.png\"></img>" +
    "<img class=\"axioms mistake\" src=\"../media/quest1_5_5.png\"></img></div>";
  
  document.getElementById("true-choose").addEventListener("click", quest1_5);
}

function quest1_5()
{
  journal.innerHTML += "<p>Для перемещение в следующую эпоху нажмите зелёную кнопку.</p>";
  journal.scrollTop = journal.scrollWidth;
  buttonNext.addEventListener("click", quest2_1);
}

// ВТОРАЯ ЭПОХА

function quest2_1()
{
  buttonNext.removeEventListener("click", quest2_1);
  action.innerHTML = "<video src=\"../media/quest2_1.MP4\"></video>";
  video = document.getElementsByTagName("video")[0];
  video.play();
  video.addEventListener("ended", quest2_2);

  journal.innerHTML += "<p><b>Древний Египет. XXVI век до нашей эры.</b></p>" +
    "<p>Существует гипотеза о том, что для строительства пирамид" +
    " египтяне в 2670 году до н. э. использовали такие простые механизмы, как" +
    " клин, рычаг, блок, которые не давали им выигрыша в работе, но позволяли" +
    " выиграть в силе. При помощи этих устройств они доставляли огромные тяжёлые" +
    " блоки для строительства. Ученые отмечают, что всего за время существования" +
    " Древнеегипетского царства было построено более 80 пирамид.</p>" +
    "<p>Однако, простые механизмы использовались не только в мирных целях," +
    " но и как орудия во времена разрушительных войн. Например, Египет за" +
    " короткое время был завоёван трижды (арабами, ассирийцами и персами). В" +
    " этих войнах погибло огромное количество людей. Так простые механизмы были" +
    " использованы не для созидательной, а для разрушительной цели.</p>" +
    "<p>Поэтому любые достижения науки, будь то простые механизмы, или сложные" +
    " технологии необходимо использовать обдуманно, не делая резких движений в" +
    " условиях неустойчивого мира.</p>";
  
  journal.scrollTop = journal.scrollWidth;
}

function quest2_2()
{
  action.innerHTML = "<div class=\"flex-container\"><p>Исключите лишнее слово.</p>" +
    "<div class=\"flex-container-row\">" +
    "<button class=\"min-button mistake\">Блок</button>" +
    "<button class=\"min-button mistake\">Рычаг</button>" +
    "<button id=\"true-choose\" class=\"min-button\">Верёвка</button>" +
    "<button class=\"min-button mistake\">Клин</button></div></div>";

  trueChooce = document.getElementById("true-choose");
  trueChooce.addEventListener("click", quest2_3);
}

function quest2_3()
{
  action.innerHTML = "<div class=\"flex-container\"><p>Для поднятия камня массой 360 кг" +
    " используют рычаг длиной 5 м. На противоположный конец рычага 2 человека" +
    " действуют  с силой 900 Н. Чему равно наибольшее плечо рычага?</p>" +
    "<div class=\"flex-container-row\">" +
    "<button class=\"min-button mistake\">3 метра</button>" +
    "<button class=\"min-button mistake\">3.5 метра</button>" +
    "<button id=\"true-choose\" class=\"min-button\">4 метра</button>" +
    "<button class=\"min-button mistake\">4.5 метра</button></div></div>";

  trueChooce = document.getElementById("true-choose");
  trueChooce.addEventListener("click", quest2_4);
}

function quest2_4()
{
  action.innerHTML = "<div class=\"flex-container\"><p>Система из подвижного и неподвижного"+
    " блока даёт выигрыш в силе в 2 раза. Какой выигрыш при этом мы получаем в работе?</p>" +
    "<div class=\"flex-container-row\">" +
    "<button id=\"true-choose\" class=\"min-button\">1</button>" +
    "<button class=\"min-button mistake\">2</button>" +
    "<button class=\"min-button mistake\">3</button>" +
    "<button class=\"min-button mistake\">4</button></div></div>";

  trueChooce = document.getElementById("true-choose");
  trueChooce.addEventListener("click", quest2_5);
}

function quest2_5()
{
  journal.innerHTML += "<p>Участникам путешествия  необходимо предложить " +
    "жителям этой эпохи правила экологического поведения в соответствии " +
    "из одной зелёных аксиом. Это станет условием возможности путешествия" +
    " в следующую эпоху.</p>";
  action.innerHTML = "<div class=\"flex-container-row\">" +
    "<img class=\"axioms mistake\" src=\"../media/quest1_5_1.png\"></img>" +
    "<img class=\"axioms mistake\" src=\"../media/quest1_5_2.png\"></img>" +
    "<img class=\"axioms mistake\" src=\"../media/quest1_5_3.png\"></img>" +
    "<img id=\"true-choose\" class=\"axioms\" src=\"../media/quest1_5_4.png\"></img>" +
    "<img class=\"axioms mistake\" src=\"../media/quest1_5_5.png\"></img></div>";

  document.getElementById("true-choose").addEventListener("click", quest2_6);
}

function quest2_6()
{
  journal.innerHTML += "<p>Для перемещение в следующую эпоху нажмите зелёную кнопку.</p>";
  journal.scrollTop = journal.scrollHeight;
  buttonNext.addEventListener("click", quest3_1);
}

// ТРЕТЬЯ ЭПОХА

function quest3_1()
{
  buttonNext.removeEventListener("click", quest3_1);
  action.innerHTML = "<video src=\"../media/quest3_1.MP4\"></video>"
  video = document.getElementsByTagName("video")[0];
  video.play();
  video.addEventListener("ended", quest3_2);

  journal.innerHTML += "<p><b>Древний Рим. Конец IV века до нашей эры.</b></p>" +
    "<p>Вода издавна считается одним из основных компонентов для поддержания" +
    " жизни человека и не случайно все большие города в древности возникали" +
    " именно на берегах рек. Являясь городом-властелином, Рим был символом" +
    " роскоши и богатства. Во времена его расцвета в городе проживало около" +
    " миллиона жителей, и на каждого из них приходилось до тысячи литров воды в сутки!</p>" +
    "<p>Главным достижением инженерной мысли древнего Рима часто признается" +
    " строительство акведуков. Именно эти сооружения выполняли важнейшую функцию" +
    " водоснабжения городов, потребляющих все больше и больше воды. Но в узком" +
    " смысле под акведуком понимают не всю систему водопровода, а лишь ее часть," +
    " являющуюся переправой через реки, овраги, дороги.</p>" + 
    "<p>Акведук в Риме появился уже в IV веке до нашей эры, а к III веку до н.э. " +
    "здесь их насчитывалось уже 11 штук.</p><p>Таким образом со времён древнего Рима" +
    " строительство водопроводов и каналов - первые в истории большие программы, в " +
    "ходе которых и складывались государства и цивилизации. Однако не всегда такие" +
    " программы будут безопасны для нашей планеты. Так, уже в 20 веке появится " +
    "проект переброски части стока Оби и Иртыша в бассейн Аральского моря. " +
    "Последствиями реализации этого проекта станет:</p>";
}

function quest3_2() 
{
  buttonNext.addEventListener("click", quest3_3);  

  journal.innerHTML += "<ul class=\"list\">" +
  "<li class=\"list-item\">ухудшение климата в Европе: согласно одной из гипотез," +
  " рост поступления пресной воды в Ледовитый океан снизит его соленость, что, в" +
  " конечном итоге, может привести к значительному изменению режима теплого течения Гольфстрим</li>" +
  "<li class=\"list-item\">возможно заболачивание и подтопление территории Западной Сибири, " +
  "с учетом прогноза глобального потепления</li>" +
  "<li class=\"list-item\">проект угрожает бассейну реки Обь экологической катастрофой" +
  " и социально-экономическим бедствием поскольку разрушит рыболовство и изменит локальный климат</li>" +
  "<li class=\"list-item\">крайняя затратность проекта</li></ul>";

journal.innerHTML += "<p>Хотим мы этого или нет, человечество стремительно " +
  "размножается, а площади идеально подходящие для жизни человека на планете не" +
  " так уж и велики. А значит грядут грандиозные преобразования географической " +
  "среды: строительство тысячекилометровых широченных каналов для обводнения " +
  "пустынь и превращения их в оазисы, вырубка тропических лесов и джунглей, " +
  "осушение болот, строительство новых автомагистралей и железных дорог, " +
  "освоение и заселение миллионами жителей громадных, доселе малообитаемых " +
  "регионов. \"Держать и не пущать\", оставляя природу нетронутой, при всём " +
  "желании не получится. Однако, реализовывать можно лишь те проекты, которые " +
  "находятся в рамках дозволенных самой ПРИРОДОЙ…</p>";
}

function quest3_3()
{
  buttonNext.removeEventListener("click", quest3_3);  

  action.innerHTML = "<div class=\"flex-container\"><p>Строительство широкого канала " +
  "для переброски части стока Оби и Иртыша в бассейн Аральского моря означает огромные " +
  "потери воды, за счет испарения, фильтрации и других причин. Общая площадь канала " +
  "может достигать 766 кв. км. При этом с 1кв.км. в сутки в среднем испаряется 1400 м<sup>" +
  "<small>3</small></sup> воды. Сколько канал будет терять пресной воды в год только за " +
  "счёт испарения. Как измениться при этом влажность воздуха и как это повлияет на климат.</p>" +
  "<div class=\"flex-container\">" +
  "<button class=\"button-long mistake\">m = 391.426 * 10<sup><small>5</small></sup> кг, влажность понизится, климат станет более мягким.</button>" +
  "<button id=\"true-choose\" class=\"button-long\">m = 391.426 * 10<sup><small>6</small></sup> кг, влажность повысится, климат станет более мягким.</button>" +
  "<button class=\"button-long mistake\">m = 391.426 * 10<sup><small>5</small></sup> кг, влажность понизится, климат станет более мягким.</button>" +
  "<button class=\"button-long mistake\">m = 391.426 * 10<sup><small>6</small></sup> кг, влажность повысится, климат станет более жёстким.</button></div></div>";

  trueChooce = document.getElementById("true-choose");
  trueChooce.addEventListener("click", quest3_4);
}


function quest3_4()
{
  journal.innerHTML += "<p>Знаете ли вы, что…</p><ul class=\"list\">" +
    "<li class=\"list-item\">По нормам на каждого жителя города приходится <b>220 литров холодной воды в сутки</b></li>" +
    "<li class=\"list-item\">Принимая душ в течении 5 минут, Вы расходуете <b>около 100 литров воды</b></li>" +
    "<li class=\"list-item\">Каждый раз, когда вы чистите зубы, вы расходуете <b>более 1 литра воды</b></li>" +
    "<li class=\"list-item\">Во время влажной уборки расходуется <b>не менее 10 литров воды</b></li>" +
    "<li class=\"list-item\">Через обычный водопроводный кран проходит <b>15 литров воды в минуту</b></li>" +
    "<li class=\"list-item\">Даже самая малая утечка уносит до <b>80 литров воды в сутки</b></li></ul>";

  action.innerHTML = "<div class=\"flex-container\"><p>В квартире на пятом этаже забыли " +
    "закрыть кран на 2 часа. Сколько энергии по доставке воды по водопроводу на данный " +
    "этаж было затрачено впустую, если высота каждого этажа 4 метра?</p>" +
    "<div class=\"flex-container-row\">" +
    "<button class=\"min-button mistake\">2 МДж</button>" +
    "<button class=\"min-button mistake\">840 кДж</button>" +
    "<button class=\"min-button mistake\">900 Дж</button>" +
    "<button id=\"true-choose\" class=\"min-button\">360 кДж</button></div></div>";
    
  journal.scrollTop = journal.scrollHeight;
  trueChooce = document.getElementById("true-choose");
  trueChooce.addEventListener("click", quest3_5);
}

function quest3_5()
{
  action.innerHTML = "<div class=\"flex-container\"><p>Перед вами два кофейника одинаковой ширины: " +
    "один высокий, другой — низкий. Какой из них вместительнее? В какой из этих кофейников " +
    "можно налить больше жидкости?</p><img src=\"../media/quest3_2.png\"></img>" +
    "<div class=\"flex-container-row\">" +
    "<button class=\"min-button mistake\">больше в правый</button>" +
    "<button id=\"true-choose\" class=\"min-button\">вместимость кофейников одинакова</button>" +
    "<button class=\"min-button mistake\">больше в левый</button></div></div>";

  trueChooce = document.getElementById("true-choose");
  trueChooce.addEventListener("click", quest3_6);
}

function quest3_6()
{
  journal.innerHTML += "<p>Участникам путешествия  необходимо предложить " +
    "жителям этой эпохи правила экологического поведения в соответствии " +
    "из одной зелёных аксиом. Это станет условием возможности путешествия" +
    " в следующую эпоху.</p>";

  action.innerHTML = "<div class=\"flex-container-row\">" +
    "<img class=\"axioms mistake\" src=\"../media/quest1_5_1.png\"></img>" +
    "<img class=\"axioms mistake\" src=\"../media/quest1_5_2.png\"></img>" +
    "<img id=\"true-choose\" class=\"axioms\" src=\"../media/quest1_5_3.png\"></img>" +
    "<img class=\"axioms mistake\" src=\"../media/quest1_5_4.png\"></img>" +
    "<img class=\"axioms mistake\" src=\"../media/quest1_5_5.png\"></img></div>";

  journal.scrollTop = journal.scrollHeight;
  document.getElementById("true-choose").addEventListener("click", quest3_7);
}

function quest3_7()
{
  journal.innerHTML += "<p>Для перемещение в следующую эпоху нажмите зелёную кнопку.</p>"; 
  journal.scrollTop = journal.scrollHeight;
  buttonNext.addEventListener("click", quest4_1);  
}

function quest4_1()
{
  buttonNext.removeEventListener("click", quest4_1);
  
  journal.innerHTML += "<p><b>18 век нашей эры.</b></p>" +
  "<p>Ещё в давние времена люди старались использовать энер­гию топлива " +
  "для превращения её в механическую. В 17 в. был изобретён тепловой двигатель, " +
  "который в последующие годы был усовершенствован, но идея осталась той же.</p>" +
  "<p>К тепловым двигателям относятся: паровая машина, двигатель внутреннего " +
  "сгорания, паровая и газовая турбины, реактивный двигатель. Их топливом является " +
  "твёрдое и жидкое топливо, солнечная и атомная энергии.</p>";

  action.innerHTML = "<video src=\"../media/quest4_1.mp4\"></video>";
  video = document.getElementsByTagName("video")[0];
  video.play();
  video.addEventListener("ended", quest4_2);
}

function quest4_2()
{
  action.innerHTML = "<img src=\"../media/quest4_2.jpg\"></img>";

  journal.innerHTML += "<p>На всех основных видах современного транспорта преимущественно " +
  "используются тепловые двигатели: на автомобильном - поршневые двигатели внутреннего " +
  "сгорания; на водном - ДВС и паровые турбины; на железно-дорожном - тепловозы с дизельными " +
  "установками; в авиации - поршневые, турбореактивные и реактивные двигатели. Тепловые " +
  "двигатели на всех типах электростанций позволяют современному человеку получать электроэнергию. " +
  "Без тепловых двигателей современная цивилизация немыслима.</p><p><b>Отрицательное влияние " +
  "тепловых машин на окружающую среду:</b></p>";

  journal.innerHTML += "<ul class=\"list\">" +
  "<li class=\"list-item\">при сжигании топлива <b>используется кислород из атмосферы</b>, " +
  "вследствие чего содержание кислорода в воздухе постепенно уменьшается.</li>" +
  "<li class=\"list-item\">сжигание топлива сопровождается <b>выделением в атмосферу углекислого газа.</b></li>" +
  "<li class=\"list-item\">при сжигании угля и нефти <b>атмосфера загрязняется азотными " +
  "и серными соединениями</b>, вредными для здоровья человека и других биологических " +
  "видов. А автомобильные двигатели ежегодно выбрасывают <b>в атмосферу два-три тонн свинца.</b></li></ul>";

  journal.innerHTML += "<p>Все перечисленные факторы  угрожают сокращению биоразнообразия " +
  "на нашей планете. Уже с 1600 года на Земле вымерло 94 вида птиц. Из них гибель 86% " +
  "птиц связана с деятельностью человека. В городах, где количество автотранспорта на " +
  "душу населения с каждым годом возрастает, хвойные деревья живут в 2,5 раза меньше, "+
  "чем в лесу( до 400 лет).</p><p><b>Проблема сохранения биологического разнообразия</b> " +
  "(биоразнообразия) и устойчивого (неистощительного) использования природных биологических " +
  "ресурсов вынуждают людей всех стран совместно искать пути предотвращения обеднения " +
  "природных экосистем, частью которых мы все тоже являемся.</p>";

  buttonNext.addEventListener("click", quest4_3);
}

function quest4_3()
{
  buttonNext.removeEventListener("click", quest4_3);

  action.innerHTML = "<div class=\"flex-container\"><p>Автомобильный двигатель мощностью 75 кВт имеет КПД 30%. " +
  "Определить, сколько бензина надо на переезд из Москвы в Петербург (650 км) при средней скорости 72 км/час. " +
  "Каков суммарный объем выхлопных газов, если 1 л сжигаемого бензина приводит к образованию 16 кубометров " +
  "смеси различных газов; токсичность по количественным показателем ЕВРО-3 (CH до 0,2 г/км; CO до 2,1 г/км; " +
  "NOx до 0,15 г/км)</p>" +
  "<div class=\"flex-container-row\">" +
  "<button class=\"min-button mistake\">250 литров; 2000 м<sup><small>3</small></sup></button>" +
  "<button class=\"min-button mistake\">200 литров; 3500 м<sup><small>3</small></sup></button>" +
  "<button class=\"min-button mistake\">350 литров; 4000 м<sup><small>3</small></sup></button>" +
  "<button id=\"true-choose\" class=\"min-button\">250 литров; 4000 м<sup><small>3</small></sup></button></div></div>";
  
  trueChooce = document.getElementById("true-choose");
  trueChooce.addEventListener("click", quest4_4);
}

function quest4_4()
{
  journal.innerHTML += "<p>Участникам путешествия  необходимо предложить " +
    "жителям этой эпохи правила экологического поведения в соответствии " +
    "из одной зелёных аксиом. Это станет условием возможности путешествия" +
    " в следующую эпоху.</p>";

  action.innerHTML = "<div class=\"flex-container-row\">" +
    "<img class=\"axioms mistake\" src=\"../media/quest1_5_1.png\"></img>" +
    "<img class=\"axioms mistake\" src=\"../media/quest1_5_2.png\"></img>" +
    "<img class=\"axioms mistake\" src=\"../media/quest1_5_3.png\"></img>" +
    "<img class=\"axioms mistake\" src=\"../media/quest1_5_4.png\"></img>" +
    "<img id=\"true-choose\" class=\"axioms\" src=\"../media/quest1_5_5.png\"></img></div>";

  journal.scrollTop = journal.scrollHeight;
  document.getElementById("true-choose").addEventListener("click", quest4_5);
}

function quest4_5()
{
  journal.innerHTML += "<p>Для перемещение в следующую эпоху нажмите зелёную кнопку.</p>"; 
  journal.scrollTop = journal.scrollHeight;
  buttonNext.addEventListener("click", quest5_1);  
}

function quest5_1()
{
  buttonNext.removeEventListener("click", quest5_1);  

  journal.innerHTML += "<p><b>20 век нашей эры.</b></p>" +
  "<p>Начиная с 20 века представить жизнь без электроэнергии " +
  "нельзя. Её вырабатывают на всех видах электростанций, среди которых наиболее " +
  "распространены ТЭС. Основным топливом для ТЭС в мире являются уголь (40%), нефть " +
  "(27%) и газ (21%). Это невосполнимые природные ресурсы. По некоторым оценкам этих " +
  "запасов хватит на 270, 50 и 70 лет соответственно и то при условии сохранения " +
  "нынешних темпов потребления.</p>";


  action.innerHTML = "<video src=\"../media/quest5_1.mp4\"></video>";
  video = document.getElementsByTagName("video")[0];
  video.play();
  video.addEventListener("ended", quest5_2);
}

function quest5_2()
{
  action.innerHTML = "<img src=\"../media/quest5_2.jpg\"></img>";
  buttonNext.addEventListener("click", quest5_3);
  
  journal.innerHTML += "<p>При сжигании топлива на ТЭС <b>образуются крайне вредные для " + 
  "всего живого на Земле продукты сгорания</b>, в которых содержатся: летучая зола, " +
  "окислы серы, оксид азота, газообразные продукты неполного сгорания, соединения " +
  "ванадия, кокс, соли натрия, частицы сажи, углекислый газ СО2 и другие парниковые " +
  "газы. В золе некоторых видов топлива присутствует мышьяк, свободный диоксид " +
  "кальция, свободный диоксид кремния.  Золоотвалы требуют значительных территорий, " +
  "являются очагами скопления тяжёлых металлов и обладают повышенной радиоактивностью. " +
  "ТЭС загрязняют водоёмы, сбрасывая в них тёплую воду, в результате чего водоём " +
  "зарастает водорослями, в нём нарушается кислородный баланс, что несёт угрозу " +
  "жизни всем его обитателям.</p>";
  
  journal.innerHTML += "<p>Единственным способом уменьшить вред, наносимый природе " +
  "тепловыми электростанциями, является уменьшение опасных выбросов и <b>экономия " +
  "электроэнергии для сохранения природных ресурсов.</b></p>" +
  "<p><b>Кто эффективно использует энергию, тот предотвращает злоупотребление " +
  "ресурсами и охраняет окружающую среду.</b></p><p>Мало кто задумывается о том, " +
  "что следование элементарному совету по экономии электроэнергии <b>«Уходя, " + 
  "гасите свет»</b> в масштабе всей страны позволит сберечь мегаватты электроэнергии, " +
  "сэкономить тысячи кубометров газа, предотвратить тонны вредных выбросов в атмосферу.</p>" +
  "<p><b>Установка энергосберегающих ламп</b> в одной квартире способна уменьшить семейные " +
  "траты на электричество на 75%. Если этому примеру последует хотя бы половина " +
  "жителей такого города как Москва, столица сбережет не менее 1000 МВт электрической " +
  "мощности в год, что сопоставимо с мощностью крупной ГРЭС. А применение " +
  "инновационных энергосберегающих осветительных технологий в масштабе всей " +
  "России сбережет стране свыше 260 млрд рублей в год, а также сократит годовое " +
  "количество выбросов углекислого газа на 20 млн тонн.</p>";

  journal.innerHTML += "<p>Вовремя выключенный свет и использование энергосберегающих " +
  "ламп в мировом масштабе сэкономит 2 терраватта электроэнергии и 1,5 млрд баррелей нефти в год.</p>";
}

function quest5_3()
{
  buttonNext.removeEventListener("click", quest5_3);

  action.innerHTML = "<div class=\"flex-container\"><p>Сколько электроэнергии можно сэкономить " +
  "в день на освещении одного кабинета, если выключать свет на каждой перемене по 10 минут. " +
  "Кабинет имеет 11 светильников, в каждом светильнике лампа мощностью по 60 кВт. Сколько при " +
  "этом сохраняется каменного угля на ТЭЦ, если для производства 1 КВтч электроэнергии надо " +
  "сжечь 370 граммов высококачественного донецкого каменного угля.</p>" +
  "<div class=\"flex-container-row\">" +
  "<button class=\"min-button mistake\">330 кВтч; 140 кг</button>" +
  "<button class=\"min-button mistake\">240 кВтч; 153 кг</button>" +
  "<button id=\"true-choose\" class=\"min-button\">330 кВтч; 122 кг</button>" +
  "<button class=\"min-button mistake\">300 кВтч; 122 кг</button></div></div>";
  
  trueChooce = document.getElementById("true-choose");
  trueChooce.addEventListener("click", quest5_4);
}

function quest5_4()
{
  journal.innerHTML += "<p>Участникам путешествия  необходимо предложить " +
    "жителям этой эпохи правила экологического поведения в соответствии " +
    "из одной зелёных аксиом. Это станет условием возможности путешествия" +
    " в следующую эпоху.</p>";

  action.innerHTML = "<div class=\"flex-container-row\">" +
    "<img class=\"axioms mistake\" src=\"../media/quest1_5_1.png\"></img>" +
    "<img id=\"true-choose\" class=\"axioms\" src=\"../media/quest1_5_2.png\"></img>" +
    "<img class=\"axioms mistake\" src=\"../media/quest1_5_3.png\"></img>" +
    "<img class=\"axioms mistake\" src=\"../media/quest1_5_4.png\"></img>" +
    "<img class=\"axioms mistake\" src=\"../media/quest1_5_5.png\"></img></div>";

  journal.scrollTop = journal.scrollHeight;
  document.getElementById("true-choose").addEventListener("click", quest5_5);
}

function quest5_5()
{
  journal.innerHTML += "<p>Для перемещение в следующую эпоху нажмите зелёную кнопку.</p>"; 
  journal.scrollTop = journal.scrollHeight;
  buttonNext.addEventListener("click", quest6_1);  
}

function quest6_1()
{
  buttonNext.removeEventListener("click", quest6_1);
  journal.innerHTML += "<p><b>Наше время.</b></p><p>Наша экспедиция завершается. " +
  "Теперь вы знаете способы предотвращения экологической катастрофы на нашей планете.</p>";

  action.innerHTML = "<img src=\"../media/quest6_1.jpg\"></img>";
  journal.innerHTML += "<p>ТЕПЛОСБЕРЕЖЕНИЕ</p>" +
  "<p>Не выпускайте тепло. На ночь опускайте жалюзи, закрывайте шторы, чтобы " + 
  "уменьшить потери тепла через окна.</p><p>Не преграждайте путь теплу. " +
  "Длинные шторы, радиаторные экраны, стойки для сушки белья перед батареями " +
  "могут поглотить до 20% тепла.</p><p>Прикрывайте вентиляционную решетку.</p>" +
  "<p>Расставляйте мебель таким образом, чтобы нагревательные приборы " +
  "оставались открытыми и эффективно обогревали помещенияме.</p>" + 
  "<p>Чистите радиаторы и обогреватели от пыли, старайтесь реже их красить," + 
  " чтобы не сеижать их теплоотдачу.</p><p>Утепляйте старые окна и двери или " +
  "заменяйте их на новые с теплозащитными свойствами.</p><p>Окно, часами " +
  "остающееся приоткрытым, вряд ли обеспечит вам приток свежего воздуха, но " +
  "большой счёт за отопление. Лучше открывать окно широко и всего на несколько минут.</p>" +
  "<p>Между радиаторной батареей и стеной установите защитный экран из алюминиевой " +
  "фольги. Она отражает тепло и направляет его обратно в комнату.</p>" +
  "<p>Входная дверь - ещё один серьезный источник потери тепла. Утеплите ее, " +
  "убедитесь в отсутствии щелей, воспользуйтесь специальной обшивкой.</p>";

  buttonNext.addEventListener("click", quest6_2);
}

function quest6_2()
{
  buttonNext.removeEventListener("click", quest6_2);
  action.innerHTML = "<img src=\"../media/quest6_2.jpg\"></img>";
  
  journal.innerHTML += "<p>ВОДОСБЕРЕЖЕНИЕ</p>" +
  "<p>Устраните места утечек холодной и горячей воды через неплотно закрытые " +
  "краны, текущие трубы, сливной бачок.</p><p>Оснастите туалеты экономичными " +
  "сливными бачками.</p><p>Принимать не ванну, а душ - таков девиз всех, кто " +
  "экономит воду. Для полной ванны требуется 140-160 л воды, для душа - только " +
  "30-50 л.</p><p>Мойте посуду не под текущей струей воды, а в раковине, закрыв " +
  "отверстие пробкой.</p><p>Не полощите белье под проточной водой. Для этих целей " +
  "лучше использовать наполненый таз.</p><p>За минуту из полностью открытого крана " +
  "вытекает 12-20 литров воды. Его следует закрывать, когда вы чистите зубы, "
  "а для полоскания рта пользоваться стаканом.</p><p>10 капель воды в минуту " +
  "равносильны потере 2000 литров питьевой воды в год.</p><p>Используйте стиральную "
  "машину по возможности при полной загрузке.</p><p>При выборе смесителей - " +
  "отдайте предпочтение рычаговым. Они быстрее смешивают воду чем смесители с двумя "
  "кранами, а значит меньше уходит воды.</p>";

  buttonNext.addEventListener("click", quest6_3);
}

function quest6_3()
{
  buttonNext.removeEventListener("click", quest6_3);
  action.innerHTML = "<img src=\"../media/quest6_3.jpg\"></img>";

  journal.innerHTML += "<p>ЭЛЕКТРОСБЕРЕЖЕНИЕ</p>" + 
  "<p>Своевременно удаляйте накипь из чайника и других нагревательных приборов. " +
  "Из-за низкой теплопроводности накипи вода нагревается медленно, а расход " +
  "энергии увеличивается.</p><p>Применяйте посуду с дном, диаметр которого равен " +
  "или чуть превосходит диаметр конфорки. Это позволит сохранить 5-10% энергии.</p>" +
  "<p>Не кладите в холодильник и морозильник горячую еду - это позволит им потреблять " +
  "меньше электроэнергии для охлаждения.</p><p>Располагайте холодильники и морозильники " +
  "вдали от источников тепла.</p><p>Полностью отключайте электроприборы и зарядные " +
  "устройства от сети, так как постоянно находясь в режиме ожидания, они " +
  "незаметно потребляют больше кол-ва электроэнергии.</p>" + 
  "<p>Старайтесь кипятить такое кол-во воды, которое необходимо в данный момент, вместо "
  "того, чтобы кипятить ее \"про запас\".</p><p>Чаще меняйте мешки для сбора пыли в " +
  "пылесосе, чтобы он работал в более экономичном режиме и меньше изнашивался.</p>" +
  "<p>Гладьте сначала вещи, которые требуют низкие температуры, затем повышайте нагрев " +
  "пл мере необходимости.</p><p>Выключайте конфорку за некоторое время до готовности " +
  "пищи, чтобы использовать остаточное тепло разогретой конфорки.</p>";

  buttonNext.addEventListener("click", quest6_4);
}

function quest6_4()
{
  buttonNext.removeEventListener("click", quest6_4);
  action.innerHTML = "<img src=\"../media/quest6_4_0.jpg\"></img>";
  
  setTimeout(function (){action.innerHTML = "<img src=\"../media/quest6_4_1.jpg\"></img>";}, 6000);
  setTimeout(function (){action.innerHTML = "<img src=\"../media/quest6_4_2.jpg\"></img>";}, 12000);
  setTimeout(function (){action.innerHTML = "<img src=\"../media/quest6_4_3.jpg\"></img>";}, 18000);
  setTimeout(function (){action.innerHTML = "<img src=\"../media/quest6_4_4.jpg\"></img>";}, 24000);
  setTimeout(function (){action.innerHTML = "<img src=\"../media/quest6_4_5.jpg\"></img>";}, 30000);
  setTimeout(function (){action.innerHTML = "<img src=\"../media/quest6_4_6.jpg\"></img>";}, 36000);
  setTimeout(function (){action.innerHTML = "<img src=\"../media/quest6_4_7.jpg\"></img>";}, 42000);
}
