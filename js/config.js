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
var l_centerLogo = true;

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
	"vampireend.jpg"
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
var l_bgImageFadeVelocity = 3000;

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
	{youtube: "https://youtu.be/5mpBN03OpaY", name: "Vampire: The Masquerade - Bloodhunt - Feel Nothing"},
];

// Random music order?
// 'true' or 'false'
var l_musicRandom = false;

// Music volume
// Choose a value between 0 (quietest) and 100 (loudest)
var l_musicVolume = 20;

// Enable custom messages?
// 'true' or 'false'
var l_messagesEnabled = true;

// Enter your custom messages below
var l_messages = [
    "Добро пожаловать на сервер Vampire the Masquerade | Blood",
    "Данный сервер основывается на вселенной World of Darkness.",
    "На сервере вы можете стать как сородичем так и обычным гражданским.",
    "Не забывайте заходить в наш дискорд! В нём вы сможете найти информацию об обновления и новости о сервере.",
    "Подходите к созданию персонажа с ответственностью, помните что в первую очередь именно вы будете играть за вашего персонажа.",
    "Сервер базируется на игровом моде NutScript.",
    "- Если я утонченный, это не значит что я педофил, - Вентру.",
    "Убедительная просьба ознакомиться с правилами сервера и уставом, так же обязательно вступите в наш дискорд!",
    "Ты выблядок ебаный, я баристой работал, меня бы уволили если бы я говорил экспрессо, а не эспрессо, - Детектив Некрасов.",
    "Что попало в руки Носферату, уже не вернуть, - Примоген Носферату.",
    "Пора показать этому городу, кто таков Замаев, - Бомж Замаев.",
    "Кто украл мой плащ ?! - Лео Беннет",
    "Ох какой ужас, я поцарапала Ламборджини, теперь придеться покупать новую, - Примоген Тореадоров.",
    "Почему так темно ? - Сестра Селестина.",
    "За проезд передаем, - Шофер Винсент.",
    "ДА СКОЛЬКО МОЖНО ?! - Офицер Пьер.",
    "Может быть изнанка Носферату ужасна, но внутри они просто душки! - Тореадоры о Носферату.",
    "Не уж то в Тореадорах появился натурал ? - Вентру о Тореадорах.",
    "О смотрите, животные из зоопарка сбежали, - Бруха о Гангрелах.",
    "А чё они такие худые, их не кормят ? - Бруха о Носферату.",
    "Мы тебя спасли от крыс и в благородство играть не будем... Починишь нам тачку?, - Полиция Нью-Йорка.",
    "Может быть изнанка Носферату ужаса, но внутри они просто душки! - Тореадоры о Носферату.",
    "Мне подкинули, подкинули лампочки, - Автомеханик Ион",
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
