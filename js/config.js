//       _           _    _                     _ 
//      | |         | |  | |                   | |
//   ___| | ___  ___| | _| |     ___   __ _  __| |
//  / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
//  \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
//  |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
//     version 2.16

// URL for the server logo
// Leave it blank to use text instead
// (Put the files in the images folder)
// (You can also use external URL)
var l_serverImage = "";

// Center logo?
// 'true' or 'false'
var l_centerLogo = false;

// Display current map and gamemode?
// 'true' or 'false'
var l_displayMapGamemode = false;

// Custom server name configuration
// Leave it blank for automatic server name
var l_serverName = "";

// Use a video for the background?
// Otherwise it will use images
// 'true' or 'false'
var l_bgVideo = false;

// Default available videos:
// "aurora.webm"
// "bluefall.webm"
// "bluetilefloor.webm"
// "bluewhitecircles.webm"
// "bokehlens.webm"
// "cleanbokeh.webm"
// "coldnight.webm"
// "colorfulburst.webm"
// "dancingstars.webm"
// "dropsflares.webm"
// "focusorangebokeh.webm"
// "glimmering.webm"
// "glowingrings.webm"
// "greencircles.webm"
// "hues.webm"
// "inthedeep.webm"
// "modernflourish.webm"
// "orangeaura.webm"
// "warminside.webm"
// "yellowgreen.webm"
//
// You can add your own video backgrounds
// Just make sure they are using webm VP8 format 
// (Place the videos in the backgrounds/videos folder)
// (You can also use external URL)
var l_background = "";

// (Image-background only)
// Enable map-based background image?
// If enabled, the background will be an image based on the server current map
// You need to have a background image with the same name as the map
// Also, the image needs to be in .jpg format
// E.g: gm_flatgrass.jpg, gm_construct.jpg, rp_downtown_v4c_v2.jpg
// 'true' or 'false'
var l_bgImageMapBased = false;

// (Image-background only)
// Place one or more images
// Multiple images will automatically shuffle between them
// (Place the files in the backgrounds/images folder)
// (You can also use external URL)
var l_bgImages = [
	"4.jpg",
	"5.jpg",
	"6.jpg",
	"b.jpg",
	"b1.jpg",
	"b2.jpg",
	"bs.jpg",
	"s1.jpg",
	"s2.jpg",
	"s3.jpg",
	"s4.jpg",
	"s5.jpg"
];

// (Image-background only)
// Random background images order?
// 'true' or 'false'
var l_bgImagesRandom = true;

// (Image-background only)
// Delay between background images changes
// in milliseconds
var l_bgImageDuration = 60000;

// (Image-background only)
// Image background fade velocity
// in milliseconds
var l_bgImageFadeVelocity = 2000;

// Enable background overlay?
// 'true' or 'false'
var l_bgOverlay = true;

// Background darkening amount
// 0 for none (0%), 100 for pitch black (100%)
var l_bgDarkening = 45;

// Play music during the loading screen?
// 'true' or 'false'
var l_music = true;

// Display current music name?
// 'true' or 'false'
var l_musicDisplay = true;

// Music playlist
// Add as many youtube ids/urls or ogg files you want
// (Place the ogg files in the music folder)
// (You can also use external URL for the ogg files)
var l_musicPlaylist = [
	{youtube: "https://youtu.be/Vrjq4emHk58?list=RDMM", name: "Feel"},
];

// Random music order?
// 'true' or 'false'
var l_musicRandom = false;

// Music volume
// Choose a value between 0 (quietest) and 100 (loudest)
var l_musicVolume = 5;

// Enable custom messages?
// 'true' or 'false'
var l_messagesEnabled = true;

// Enter your custom messages below
var l_messages = [
	"Добро пожаловать на сервер S.C.P Beyond | Chapter Two!",
	"Данный сервер основывается на вселенной SCP.",
	"На сервере вы можете стать как научным сотрудником так и оперативником Мобильно Оперативной Группы.",
	"Не забывайте заходить в наш дискорд! В нём вы сможете найти информацию об обновления и новости о сервере.",
	"Подходите к созданию персонажа с ответственностью, помните что в первую очередь именно вы будете играть за вашего персонажа.",
	"Ежедневно проводятся спец.операции. Вы сможете взять на себя роль оперативника МОГ и отправится на выполнение опасного задания! Кто знает что вас ждёт на спец.операции.",
	"Игра за сотрудников Класса-Д, не является обязательной. Однако всё самое интересное, зачастую достается именно этим ребятам.",
	"SCP ( Secure, Contain, Protect ) — «Обезопасить, Удержать, Сохранить»",
	"Сервер базируется на игровом моде NutScript.",
	"Основное времяпрепровождение вы можете проводить занимая такие роли как Медик, Научный Сотрудник, сотрудника Класс-Д, сотрудник Службы Безопасности.",
	"Уклон сервера впервую очередь идёт на силовые структуры фонда. Однако вы имеете 3 слота для персонажа Класс-Д, Сотрудник МОГ и третий слот по вашему желанию!",
	"Убедительная просьба ознакомиться с правилами сервера и уставом, так же обязательно вступите в наш дискорд!",
	"Дискорд сервера - команда в чате '/discord'.",
	"После создания персонажа, обязательно ознакомьтесь со всей информацией находящейся возле вас.",
	"Наставники обучают Рекрутов и распределяют в отделы.",
	"Если вы желаете заступить на роль капитана отряда, убедительная просьба пройти в соответствующий канал в дискорде.",
	"Помните, что смерть вашего персонажа - это ещё не конец.",
	"Я походу опять забыл свои таблетки, - Начальник Службы Безопасности.",
	"А нам вообще можно находится у этого кабинета ? - Оперативник МОГ Эпсилон 11.",
	"Недавно МОГ выезжал есть шашлыки за Зоной, а меня не взяли... - Начальник Службы Безопасности.",
	"Я тут что ли единственный чернокожий сотрудник класса-Д ?! - Сотрудник Класса-Д.",
	"У нас не Научный Отдел, а целая теплица с огородом! - Доктор Вайс.",
	"Замолчи Хайтавер! - Доктор Вайс.",
	"Рабочий день только начался, а я допиваю вторую кружку кофе, пора бы завязывать.  - Доктор Вайс.",
	"Я работаю 3 сутки подряд, я хочу спать! - Асистент Сэн.",
	"Запомни, я Йокай, - Оперативник Мю-13 Йокай.",
	"*неразборчивое урчание* - Оперативник Мю-13 Гласс.",
	"А как камеру содержания закрыть ? - Неизвестный Научный Сотрудник.",
	"ДА ЗАТКНИТЕСЬ!!! - Капитан MazHatters Curmageddon.",
	"Наш рост, означает уровень нашего IQ. - Неизвестный Оперативник Кротокрыс.",
	"Бананы, - Доктор Брайт.",
	"Я излечу вас, - SCP-049 - Чумной Доктор.",
	"Ну же, ближе, подойди ещё ближе, - SCP-035 - Маска одержимости.",
	"Поджигатели или Пожиратели, слушай, а чего они без огнемётов то ? - Оперативник МОГ Эпсилон-11.",
	"Их не зовут, они сами приходят, - ХОС Flavian.",
	"Капитан, я ног не чувствую, - SCP-076-2 Авель.",
	"ДА НЕ ЗНАЮ Я!!! НЕ ЗНАЮ!!! - Исао Вайс.",
	"Ну всё, я в кому, - Исао Вайс.",
	"*BONK* - Искуситель.",
	"А чё делать-то ? - Ассистент Научных Сотрудников.",
	"Я спрятался, - Г.Н.С Крокодильников.",
	"Вэскер, где же ты ? - Оперативник МОГ Турист.",
	"А как тут свет включить ? - Кочевник.",
	"*БУЛЬК* - SCP-457.",
	"Я предпочитаю, тентакли знаете-ли, - SCP-035 - Маска Одержимости.",
	"Да придёт мой час, - Всадник Смерти.",
	"Я Кумихо, а не Кумиха, - SCP-953 - Полиморфный Гуманоид.",
	"Тренировки тела - это основа, - Доктор Фостер.",	
];
// Random message order?
// 'true' or 'false'
var l_messagesRandom = true;

// Delay between message changes
// in milliseconds
var l_messagesDelay = 50000;

// Messages fade time
// in milliseconds
var l_messagesFade = 1000;

// Show errors inside Garry's Mod?
// Can be useful for finding errors
// 'true' or 'false'
var l_showErrorsIngame = true;

//==============================================================
//========================== WARNING ===========================
//==============================================================
//============ Do not edit anything below this line ============
//==============================================================
var checkConfigFile = function() {
	return true;
};
