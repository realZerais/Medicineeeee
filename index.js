var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;  

var textSpeed=882;
var myInterval;
var audio = new Audio('Zild - Medisina (Official Video).mp3');
audio.currentTime = 200;

var conversation = 
[
    "-Hi",
    "",
    "",
    "",
    "",
    "-Ikaw nanaman haha",
    "",
    "",
    "",
    "",
    "-Oo nga eh haha kumusta",
    "",
    "",
    "",
    "",
    "-Eto busy sa kung ano ano haha",
    "",
    "",
    "",
    "",
    "-Sorry kung nangungulit ako",
    "",
    "",
    "",
    "",
    "-Ano bang meron?",
    "",
    "",
    "",
    "",
    "-Hindi ka nawawala sa isip ko",
    "",
    "",
    "",
    "",
    "",
    "",
    "-Hindi mo naman ako mahal, malungkot ka lang",
    "",
    "",
    "",
    "",
    "-Bakit ganyan nanaman?",
    "",
    "",
    "",
    "",
    "-Kinakawawa lang natin sarili natin",
    "",
    "",
    "",
    "",
    "-Ayoko na",
    "",
    "",
    "",
    "",
    "",
    "-Lagi mo naman yan sinasabi",
    "",
    "",
    "",
    "",
    "",
    "-Paulit ulit lang naman tayo diba?",
    "",
    "",
    "",
    "",
    "",
]

var conversationHeight = 20;
let index=0;
const Fonts = [
    "Arial",
    "Helvetica",
    "Comic Sans MS",
    "Courier New",
    "Lucida Sans",
    "Impact",
    "Georgia",
    "Bookman",
    "Times New Roman",
    "Trebuchet MS",
    "Verdana",
    "Franklin Gothic Medium",
    "Arial Narrow",
    "Garamond",
    "Baskerville",
    "Century Gothic",
    "Palatino",
    "Didot",
    "Rockwell",
    "Copperplate",
    "Abracadabra",
    "Agony",
    "Alien Encounter",
    "Amnesia",
    "Ancient Curse",
    "Apparition",
    "Asylum",
    "Banshee",
    "Bat Wings",
    "Black Widow",
    "Blood Lust",
    "Boneshaker",
    "Boogeyman",
    "Cemetery Gates",
    "Chainsaw Massacre",
    "Cobwebbed",
    "Corpse Bride",
    "Creepshow",
    "Crypt Keeper",
    "Cursed Scroll",
    "Dark Carnival",
    "Dark Shadows",
    "Death Drips",
    "Demon Eyes",
    "Despair",
    "Dracula's Coffin",
    "Eerie Whisper",
    "Evil Clown",
    "Fear Factory",
    "Foggy Night",
    "Frankenfont",
    "Funeral March",
    "Ghost Town",
    "Ghoul Gaze",
    "Gravestone",
    "Grim Reaper",
    "Haunted House",
    "Hellfire",
    "Hocus Pocus",
    "Insidious",
    "Jack-O-Lantern",
    "Lurking Shadows",
    "Mad Scientist",
    "Midnight Howl",
    "Moonlight Serenade",
    "Mummy Wrap",
    "Nightmare",
    "Occult Ritual",
    "Ominous Storm",
    "Phantom Fingers",
];

randFont = Fonts[Math.floor(Math.random() * 70)];
c.beginPath();
c.font = "3vw " + randFont;
c.fillStyle = "#FFFFFF";
c.fillText("(Tap the screen and turn the volume up...enjoy)", 10, 100);




function startInterval() {
    myInterval = setTimeout(printFont, textSpeed);
}

function printText(){
    randFont = Fonts[Math.floor(Math.random() * 70)];
    c.beginPath();
    c.font = "2vw " + randFont;
    c.fillStyle = "#FFFFFF";
    c.fillText("Let Me Goooooooo!!!!!", Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height));

}


function printFont(){
    audio.play();
    
    console.log(textSpeed);
    console.log(audio.currentTime);

   
    if(audio.currentTime > 207 && audio.currentTime <209){
        c.beginPath();
        c.clearRect(0, 0, canvas.width,canvas.height);
    }
    if(audio.currentTime > 212){

        c.beginPath();
        c.font = "2.5vw dasjk";
        c.fillStyle = "#FFFFFF";
        c.fillText(conversation[index], 10, conversationHeight);
        conversationHeight+=7;
        index++;
    }
   
    if(audio.currentTime > 250){
        printText();
    }
    if(audio.currentTime > 257){
        textSpeed =441;
    }
    if(audio.currentTime > 263){
        textSpeed =220;
    }
    if(audio.currentTime > 265){
        textSpeed =50;
    }
    if(audio.currentTime > 268){
        textSpeed =-111;
    }
    if(audio.currentTime >= 270){
        textSpeed =110;
        c.clearRect(0, 0, canvas.width,canvas.height)
        c.font = "4vw " + randFont;
        c.fillStyle = "#FF0000";
        c.fillText("I LOVE YOU MY MEDICINEEEEE!!!!", 100, canvas.height/2);
    }

    if(audio.currentTime >= 277){
        textSpeed =110;
        c.clearRect(0, 0, canvas.width,canvas.height)
        c.font = "4vw " + randFont;
        c.fillStyle = "#FF0000";
        c.fillText("MAHAL KITA MY MEDICINE!!!!", 100, canvas.height/2);
    }
    if(audio.currentTime >= 284){
        textSpeed =110;
        c.clearRect(0, 0, canvas.width,canvas.height)
        c.font = "4vw " + randFont;
        c.fillStyle = "#FF0000";
        c.fillText("I LOVE YOU MY MEDICINEEEEE!!!!", 100, canvas.height/2);
    }
    if(audio.currentTime >= 292){
        textSpeed =110;
        c.clearRect(0, 0, canvas.width,canvas.height)
        c.font = "4vw " + randFont;
        c.fillStyle = "#FF0000";
        c.fillText("MAHAL KITA MY MEDICINE!!!!", 100 , canvas.height/2);
    }
    if(audio.currentTime >= 298){
        c.clearRect(0, 0, canvas.width,canvas.height)
        c.font = "1vw " + randFont;
        c.fillStyle = "#FF0000";
        c.fillText("MADE BY: DAVE SIAREZ", 100, canvas.height/2);
    }
    if(audio.currentTime >= 304){
        c.clearRect(0, 0, canvas.width,canvas.height)
    }

    
    myInterval = setTimeout(printFont, textSpeed);
  
}


startInterval();
