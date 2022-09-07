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
	"https://i.playground.ru/p/vsHx-zMH1h0XLyOJZADUaA.jpeg",
	"https://picua.org/images/2018/11/12/f25e8f74e6012172e7dd60cc8919e73b.jpg",
	"https://phonoteka.org/uploads/posts/2021-05/1622206155_20-phonoteka_org-p-peshchera-fentezi-art-krasivo-22.jpg",
	"https://www.free-wallpapers.su/data/media/25/big/fan0534.jpg",
	"https://cdna.artstation.com/p/assets/images/images/020/774/572/large/jessica-julien-img-0592.jpg?1569126637",
	"dnd6.jpg",
	"dnd7.jpg",
	"dnd8.jpg"
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
	{youtube: "https://youtu.be/ysU94a6pnK4?list=PL6FE892C35C4D403D", name: "WoW - Wraith of the Lich Kin - Assault On New Avalon"},
	{youtube: "https://youtu.be/_1XKOJN_Rp8?list=PL6FE892C35C4D403D", name: "WoW - Wraith of the Lich Kin - Main Title"},
	{youtube: "https://youtu.be/kFR7n2hXpfY", name: "World of Warcraft - Sylvanas' Theme"},
	{youtube: "https://youtu.be/l1XRcw3nLS0?list=PLuX1dXf1Zu0k0JpNCoN-AealD5q-6CkNg", name: "World of Warcraft - A Call to Arms"},
	{youtube: "https://youtu.be/_x0CNTlvqfs", name: "World of Warcraft - Demon Hunter Theme."},
	{youtube: "https://youtu.be/mf7Pw9frMs8?list=PLuX1dXf1Zu0k0JpNCoN-AealD5q-6CkNg", name: "Divinity: Original Sin 2 - Crazy Troubled Senses"},
	{youtube: "https://youtu.be/MSYHm0lmc2k?list=PLwNcU6UOEFazOK4bMAcl1o7O1v1FTsK83", name: "Tyranny - Terratus"},
	{youtube: "https://youtu.be/j-FLHbjdljk?list=PLwNcU6UOEFazOK4bMAcl1o7O1v1FTsK83", name: "Tyranny - Pillars in the Sky"},
	{youtube: "https://youtu.be/nVzQAh_3r4A?list=PLwNcU6UOEFazOK4bMAcl1o7O1v1FTsK83", name: "Tyranny - Fatebinder"},
	{youtube: "https://youtu.be/VmGJX4_fin0?list=PLwNcU6UOEFazOK4bMAcl1o7O1v1FTsK83", name: "Tyranny - Spires"},
	{youtube: "https://youtu.be/wUWEZ47-elQ?list=PL49BFE8EC46EB1047", name: "Fable: The Lost Chapters - Fable Theme"},
	{youtube: "https://youtu.be/D90X7_XJnKk?list=PL49BFE8EC46EB1047", name: "Fable: The Lost Chapters - Temple of Light"},
];

// Random music order?
// 'true' or 'false'
var l_musicRandom = true;

// Music volume
// Choose a value between 0 (quietest) and 100 (loudest)
var l_musicVolume = 10;

// Enable custom messages?
// 'true' or 'false'
var l_messagesEnabled = true;

// Enter your custom messages below
var l_messages = [
    "Добро пожаловать на сервер Dungeon and Dragons | Chapter One",
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
