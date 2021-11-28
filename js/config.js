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
        "stalker.jpeg",
        "stalker2.jpeg",
        "stalker3.jpeg",
        "stalker4.jpeg",
        "stalker5.jpeg",
        "stalker6.jpeg",
        "stalker7.jpeg"
];

// (Image-background only)
// Random background images order?
// 'true' or 'false'
var l_bgImagesRandom = true;

// (Image-background only)
// Delay between background images changes
// in milliseconds
var l_bgImageDuration = 20000;

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
	{youtube: "https://youtu.be/urK8zFwa-4c", name: "Stalker OST - Dirge for the Planet (Gingertail Cover)"},
];

// Random music order?
// 'true' or 'false'
var l_musicRandom = false;

// Music volume
// Choose a value between 0 (quietest) and 100 (loudest)
var l_musicVolume = 4;

// Enable custom messages?
// 'true' or 'false'
var l_messagesEnabled = true;

// Enter your custom messages below
var l_messages = [
	"Приветствуем вас на проекте посвященный всленной S.T.A.L.K.E.R! Устраивайся по удобнее сталкер.",
	"Проект был создан совместно с Proxima и Mother Guillotine.",
	"Цель проекта - обеспечеие приятного/лампового и веселого времяпрепровождении на сервере.",
	"Наше сплоченное и дружное коммьюнити, с радостью примет вас и поможет в случае возникновение игровых проблем.",
	"Обязательно ознакомьтесь с внутри-игровыми правилами сервера и вступите в дискорд сервера, для получения информации об тех.работах и обновлениях.",
	"Администрация проекта желает вам приятной игры на проекте S.T.A.L.K.E.R Heart of North.",
	"Если вы потерялись или вам нужна помощь, обратитесь за помощью к другим сталкерам или воспользуйтесь общим OOC чатом c помощью команды - //",
	"На сервере вы можете вступить в такие группировки как Монолит, Наёмники, Долг, Свобода, Военные, Бандиты или Чистое Небо.",
	"Благодарим вас за игру на нашем сервере, спасибо!",
	"Решение принимаемые вами на сервере, влияют на его историю, делайте выбор с умом!",
	"Сталкер, добро пожаловать в зону. Держи ноги в тепле и прикрывай спины другим сталкерам.",
	"Псс... услышишь шепот в голове, уноси ноги.",
	"Женщины в зоне редкость, поговаривают, якобы их зона оберегает, да так что не пускает к себе.",
	"Болт - это сила! Болт - это аргумент!",
];

// Random message order?
// 'true' or 'false'
var l_messagesRandom = true;

// Delay between message changes
// in milliseconds
var l_messagesDelay = 30000;

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
