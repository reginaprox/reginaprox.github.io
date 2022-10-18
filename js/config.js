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
	"https://wallpapersprinted.com/download/1/video_game_4_resident_evil_2_hd_games-HD.jpg",
	"https://www.fonstola.ru/pic/201310/1366x768/fonstola.ru-129131.jpg",
	"https://www.residentevilvillage8.com/wp-content/uploads/2021/05/the-Tragedy-of-ethan-winters-re7-33.jpg",
	"https://residentevil.com.br/wp-content/uploads/2019/02/02-1.jpg",
	"https://cdn.suwalls.com/wallpapers/games/resident-evil-operation-raccoon-city-20191-1920x1080.jpg",
	"https://images7.alphacoders.com/994/thumb-1920-994395.jpg",
	"https://www.emperador.fr/wp-content/uploads/2019/02/002-1920x1080.jpg",
	"https://www.emperador.fr/wp-content/uploads/2019/02/003-1.jpg",
	"https://store-images.s-microsoft.com/image/apps.53559.14200310963607701.070ff03e-7f10-4c0b-89a6-a46c9abe8e01.8142305e-9870-4716-8ee1-7812184cf5d2?mode=scale&q=90&h=1080&w=1920&background=%23FFFFFF"
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
	{youtube: "https://youtu.be/4pZV3UPmXI4", name: "Resident Evil 1 - Safe Room"},
	{youtube: "https://youtu.be/vMz6bhXyNZc", name: "Resident Evil 2 - Safe Room"},
	{youtube: "https://youtu.be/nblPAN7DaVQ", name: "Resident Evil 3 - Safe Room"},
	{youtube: "https://youtu.be/qgnZ9w5ghwE", name: "Resident Evil 4 - Safe Room"},
	{youtube: "https://youtu.be/Gv7LhRRpKKw", name: "Resident Evil 5 - Safe Room"},
];

// Random music order?
// 'true' or 'false'
var l_musicRandom = true;

// Music volume
// Choose a value between 0 (quietest) and 100 (loudest)
var l_musicVolume = 15;

// Enable custom messages?
// 'true' or 'false'
var l_messagesEnabled = true;

// Enter your custom messages below
var l_messages = [
    "Добро пожаловать на сервер Resident Evl | Last Escape | Chapter Two",
    "Resident Evl | Last Escape является спиноффом сюжетного сервера Resident Evl | Raid",
    "Не забудьте вступить в дискорд сервера! В нем находится вся необходимая информация о работоспособности и обновлениях сервера! - /discord",
    "После вступления в игру, не забудьте ознакомиться с внутри-игровыми правилами сервера! - /rules",
    "Некорректное отображение моделей/текстур ? - /content",
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
