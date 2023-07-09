var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = window.innerWidth-7.9;
canvas.height = window.innerHeight-7.9;  

var textSpeed=1000;
var myInterval;

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

function startInterval() {
    myInterval = setTimeout(printFont, textSpeed);
}

//c.fillText("VICTORY!", (canvas.width/2)-80, 50);
function printFont(){
    textSpeed -= 15;
    console.log(textSpeed)

    randFont = Fonts[Math.floor(Math.random() * 70)];

    c.beginPath();
    c.font = "20px " + randFont;
    c.fillStyle = "#FFFFFF";
    c.fillText("Let Me Goooooooo!!!!!", Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height));

    myInterval = setTimeout(printFont, textSpeed);

    if(textSpeed <= -40000){
        clearInterval(myInterval);
        c.clearRect(0, 0, canvas.width,canvas.height)
        c.beginPath();
        c.font = "100px " + randFont;
        c.fillStyle = "#FFFFFF";
        c.fillText("Let Me Goooooooo!!!!", canvas.width/2 - 400, canvas.height/2);

    }
}


startInterval();






