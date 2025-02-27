let yHP = 200
let ySpeed = 20
let bob = true
const text1 = document.getElementById("Text1")
const b1 = document.getElementById("button1")
const b2 = document.getElementById("button2")
const b3 = document.getElementById("button3")
const b4 = document.getElementById("button4")
const img1 = document.getElementById("image1")
let havesword = false
let defeatedmonster = false
let defeatedbeast = false
let answeredquiz = false
let havebow = false
let defeatsuperman = false
let havekid = false
let beatdragon = false
let havevaria = false
let haveshield = false
let defeatbowser = false

function sleep(milliseconds) { //Stolen from https://stackoverflow.com/questions/16873323/javascript-sleep-wait-before-continuing
    var start = new Date().getTime();
    for (var i = 0; i < 1; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

function restart(){
    b1.removeEventListener('click', start)
    b2.removeEventListener('click', start)
    b3.removeEventListener('click', start)
    b4.removeEventListener('click', start)
    b1.removeEventListener('click', shart)
    b2.removeEventListener('click', shart)
    b3.removeEventListener('click', shart)
    b4.removeEventListener('click', shart)
    b1.removeEventListener('click', lavaroom)
    b2.removeEventListener('click', lavaroom)
    b3.removeEventListener('click', lavaroom)
    b4.removeEventListener('click', lavaroom)
    b1.removeEventListener('click', swordroom)
    b2.removeEventListener('click', swordroom)
    b3.removeEventListener('click', swordroom)
    b4.removeEventListener('click', swordroom)
    b1.removeEventListener('click', monsterroom)
    b2.removeEventListener('click', monsterroom)
    b3.removeEventListener('click', monsterroom)
    b4.removeEventListener('click', monsterroom)
    b1.removeEventListener('click', beastroom)
    b2.removeEventListener('click', beastroom)
    b3.removeEventListener('click', beastroom)
    b4.removeEventListener('click', beastroom)
    b1.removeEventListener('click', answerroom)
    b2.removeEventListener('click', answerroom)
    b3.removeEventListener('click', answerroom)
    b4.removeEventListener('click', answerroom)
    b1.removeEventListener('click', quizroom)
    b2.removeEventListener('click', quizroom)
    b3.removeEventListener('click', quizroom)
    b4.removeEventListener('click', leftchoice)
    b1.removeEventListener('click', leftchoice)
    b2.removeEventListener('click', leftchoice)
    b3.removeEventListener('click', leftchoice)
    b4.removeEventListener('click', quizroom)
    b1.removeEventListener('click', swordtime)
    b2.removeEventListener('click', swordtime)
    b3.removeEventListener('click', swordtime)
    b4.removeEventListener('click', swordtime)
    b1.removeEventListener('click', downchoice)
    b2.removeEventListener('click', downchoice)
    b3.removeEventListener('click', downchoice)
    b4.removeEventListener('click', downchoice)
    b1.removeEventListener('click', monsterfight)
    b2.removeEventListener('click', monsterfight)
    b3.removeEventListener('click', monsterfight)
    b4.removeEventListener('click', monsterfight)
    b1.removeEventListener('click', beastfight)
    b2.removeEventListener('click', beastfight)
    b3.removeEventListener('click', beastfight)
    b4.removeEventListener('click', beastfight)
    b1.removeEventListener('click', takequiz)
    b2.removeEventListener('click', takequiz)
    b3.removeEventListener('click', takequiz)
    b4.removeEventListener('click', takequiz)
    b1.removeEventListener('click', bowroom)
    b2.removeEventListener('click', bowroom)
    b3.removeEventListener('click', bowroom)
    b4.removeEventListener('click', bowroom)
    b1.removeEventListener('click', bowtime)
    b2.removeEventListener('click', bowtime)
    b3.removeEventListener('click', bowtime)
    b4.removeEventListener('click', bowtime)
    b1.removeEventListener('click', supermanroom)
    b2.removeEventListener('click', supermanroom)
    b3.removeEventListener('click', supermanroom)
    b4.removeEventListener('click', supermanroom)
    b1.removeEventListener('click', bowserroom)
    b2.removeEventListener('click', bowserroom)
    b3.removeEventListener('click', bowserroom)
    b4.removeEventListener('click', bowserroom)
    b1.removeEventListener('click', bowserfight)
    b2.removeEventListener('click', bowserfight)
    b3.removeEventListener('click', bowserfight)
    b4.removeEventListener('click', bowserfight)
    b1.removeEventListener('click', bowserwin)
    b2.removeEventListener('click', bowserwin)
    b3.removeEventListener('click', bowserwin)
    b4.removeEventListener('click', bowserwin)
    b1.removeEventListener('click', rightbowser)
    b2.removeEventListener('click', rightbowser)
    b3.removeEventListener('click', rightbowser)
    b4.removeEventListener('click', rightbowser)
    b1.removeEventListener('click', superfight)
    b2.removeEventListener('click', superfight)
    b3.removeEventListener('click', superfight)
    b4.removeEventListener('click', superfight)
    b1.removeEventListener('click', kidroom)
    b2.removeEventListener('click', kidroom)
    b3.removeEventListener('click', kidroom)
    b4.removeEventListener('click', kidroom)
    b1.removeEventListener('click', kidtime)
    b2.removeEventListener('click', kidtime)
    b3.removeEventListener('click', kidtime)
    b4.removeEventListener('click', kidtime)
    b1.removeEventListener('click', dragonroom)
    b2.removeEventListener('click', dragonroom)
    b3.removeEventListener('click', dragonroom)
    b4.removeEventListener('click', dragonroom)
    b1.removeEventListener('click', wizardroom)
    b2.removeEventListener('click', wizardroom)
    b3.removeEventListener('click', wizardroom)
    b4.removeEventListener('click', wizardroom)
    b1.removeEventListener('click', wizardfight)
    b2.removeEventListener('click', wizardfight)
    b3.removeEventListener('click', wizardfight)
    b4.removeEventListener('click', wizardfight)
    b1.removeEventListener('click', variaroom)
    b2.removeEventListener('click', variaroom)
    b3.removeEventListener('click', variaroom)
    b4.removeEventListener('click', variaroom)
    b1.removeEventListener('click', variatime)
    b2.removeEventListener('click', variatime)
    b3.removeEventListener('click', variatime)
    b4.removeEventListener('click', variatime)
    b1.removeEventListener('click', holeroom1)
    b2.removeEventListener('click', holeroom1)
    b3.removeEventListener('click', holeroom1)
    b4.removeEventListener('click', holeroom1)
    b1.removeEventListener('click', holeroom2)
    b2.removeEventListener('click', holeroom2)
    b3.removeEventListener('click', holeroom2)
    b4.removeEventListener('click', holeroom2)
    b1.removeEventListener('click', holeroom3)
    b2.removeEventListener('click', holeroom3)
    b3.removeEventListener('click', holeroom3)
    b4.removeEventListener('click', holeroom3)
    b1.removeEventListener('click', holeroom4)
    b2.removeEventListener('click', holeroom4)
    b3.removeEventListener('click', holeroom4)
    b4.removeEventListener('click', holeroom4)
    b1.removeEventListener('click', holeroom5)
    b2.removeEventListener('click', holeroom5)
    b3.removeEventListener('click', holeroom5)
    b4.removeEventListener('click', holeroom5)
    b1.removeEventListener('click', holeroom6)
    b2.removeEventListener('click', holeroom6)
    b3.removeEventListener('click', holeroom6)
    b4.removeEventListener('click', holeroom6)
    b1.removeEventListener('click', holeroom7)
    b2.removeEventListener('click', holeroom7)
    b3.removeEventListener('click', holeroom7)
    b4.removeEventListener('click', holeroom7)
    b1.removeEventListener('click', holeroom8)
    b2.removeEventListener('click', holeroom8)
    b3.removeEventListener('click', holeroom8)
    b4.removeEventListener('click', holeroom8)
    b1.removeEventListener('click', ending2)
    b2.removeEventListener('click', ending2)
    b3.removeEventListener('click', ending2)
    b4.removeEventListener('click', ending2)
    b1.removeEventListener('click', ending3)
    b2.removeEventListener('click', ending3)
    b3.removeEventListener('click', ending3)
    b4.removeEventListener('click', ending3)
    b1.removeEventListener('click', ending4)
    b2.removeEventListener('click', ending4)
    b3.removeEventListener('click', ending4)
    b4.removeEventListener('click', ending4)
    b1.removeEventListener('click', ending5)
    b2.removeEventListener('click', ending5)
    b3.removeEventListener('click', ending5)
    b4.removeEventListener('click', ending5)
    b1.removeEventListener('click', ending6)
    b2.removeEventListener('click', ending6)
    b3.removeEventListener('click', ending6)
    b4.removeEventListener('click', ending6)
    b1.removeEventListener('click', ending7)
    b2.removeEventListener('click', ending7)
    b3.removeEventListener('click', ending7)
    b4.removeEventListener('click', ending7)
    b1.removeEventListener('click', rightchoice)
    b2.removeEventListener('click', rightchoice)
    b3.removeEventListener('click', rightchoice)
    b4.removeEventListener('click', rightchoice)
    b1.removeEventListener('click', upchoice)
    b2.removeEventListener('click', upchoice)
    b3.removeEventListener('click', upchoice)
    b4.removeEventListener('click', upchoice)
    b1.removeEventListener('click', lavapath)
    b2.removeEventListener('click', lavapath)
    b3.removeEventListener('click', lavapath)
    b4.removeEventListener('click', lavapath)
    b1.removeEventListener('click', shieldroom)
    b2.removeEventListener('click', shieldroom)
    b3.removeEventListener('click', shieldroom)
    b4.removeEventListener('click', shieldroom)
    b1.removeEventListener('click', shieldtime)
    b2.removeEventListener('click', shieldtime)
    b3.removeEventListener('click', shieldtime)
    b4.removeEventListener('click', shieldtime)
    b1.removeEventListener('click', dragonfight)
    b2.removeEventListener('click', dragonfight)
    b3.removeEventListener('click', dragonfight)
    b4.removeEventListener('click', dragonfight)
    b1.removeEventListener('click', antigardnerscene)
    b2.removeEventListener('click', antigardnerscene)
    b3.removeEventListener('click', antigardnerscene)
    b4.removeEventListener('click', antigardnerscene)
    b1.removeEventListener('click', die)
    b2.removeEventListener('click', die)
    b3.removeEventListener('click', die)
    b4.removeEventListener('click', die)
    b1.removeEventListener('click', antireveal)
    b2.removeEventListener('click', antireveal)
    b3.removeEventListener('click', antireveal)
    b4.removeEventListener('click', antireveal)
    b1.removeEventListener('click', networkexam)
    b2.removeEventListener('click', networkexam)
    b3.removeEventListener('click', networkexam)
    b4.removeEventListener('click', networkexam)
}

function shart(){
    img1.src = "Ethan.png"
    text1.innerHTML = "Someone had kidnapped the entire junior programming class, you, the teacher, Mr. Gardner have to find them and save them."
    button1.innerHTML = "Go North"
    button2.innerHTML = "Go West"
    button3.innerHTML = "Go East"
    button4.innerHTML = "Go South"
    console.log("You are returning to the first room")
    restart()
    b1.addEventListener('click', lavaroom)
    b2.addEventListener('click', swordroom)
    b3.addEventListener('click', monsterroom)
    b4.addEventListener('click', quizroom)
    event.preventDefault()
}


function die(){
    text1.innerHTML = "Ending 1: Game Over, you failed to save the children"
    img1.src = "Ethan w_ DED.png"
    button1.innerHTML = "restart"
    button2.innerHTML = ""
    button3.innerHTML = ""
    button4.innerHTML = ""
    console.log("You are ded")
    restart()
    b1.addEventListener('click', start)
    b2.addEventListener('click', die)
    b3.addEventListener('click', die)
    b4.addEventListener('click', die)
    event.preventDefault()
}

function ending2(){
    text1.innerHTML = "Ending 2: You survived due to Varia Suit but the all of the children died."
    img1.src = "Kid Lava.png"
    button1.innerHTML = "restart"
    button2.innerHTML = ""
    button3.innerHTML = ""
    button4.innerHTML = ""
    console.log("You are ded")
    restart()
    b1.addEventListener('click', start)
    b2.addEventListener('click', die)
    b3.addEventListener('click', die)
    b4.addEventListener('click', die)
    event.preventDefault()
}

function ending3(){
    text1.innerHTML = "Ending 3: You found an exit, but you did not save the children nor find out who the kidnapper is."
    img1.src = "Ending3.png"
    button1.innerHTML = "restart"
    button2.innerHTML = ""
    button3.innerHTML = ""
    button4.innerHTML = ""
    console.log("You are at Ending 3")
    restart()
    b1.addEventListener('click', start)
    b2.addEventListener('click', die)
    b3.addEventListener('click', die)
    b4.addEventListener('click', die)
    event.preventDefault()
}

function ending4(){
    text1.innerHTML = "Ending 4: You failed, Mr.Anti-Gardner took over your classroom"
    img1.src = "Ending4.png"
    button1.innerHTML = "restart"
    button2.innerHTML = ""
    button3.innerHTML = ""
    button4.innerHTML = ""
    console.log("You are at Ending 4")
    restart()
    b1.addEventListener('click', start)
    b2.addEventListener('click', die)
    b3.addEventListener('click', die)
    b4.addEventListener('click', die)
    event.preventDefault()
}

function ending5(){
    text1.innerHTML = "Ending 5: You passed, You teach Mr.Anti-Gardner networking as he cries and screams."
    img1.src = "Ending5.png"
    button1.innerHTML = "restart"
    button2.innerHTML = ""
    button3.innerHTML = ""
    button4.innerHTML = ""
    console.log("You are at Ending 5")
    restart()
    b1.addEventListener('click', start)
    b2.addEventListener('click', die)
    b3.addEventListener('click', die)
    b4.addEventListener('click', die)
    event.preventDefault()
}

function ending6(){
    text1.innerHTML = "Ending 6: You entered some kind of classroom, Ms. Williams is there, you are forced to do her personal networking course"
    img1.src = "Ending 6.png"
    button1.innerHTML = "restart"
    button2.innerHTML = ""
    button3.innerHTML = ""
    button4.innerHTML = ""
    console.log("You are at Ending 6")
    restart()
    b1.addEventListener('click', start)
    b2.addEventListener('click', die)
    b3.addEventListener('click', die)
    b4.addEventListener('click', die)
    event.preventDefault()
}

function ending7(){
    text1.innerHTML = "Ending 7: You entered some kind of classroom, Ms. Williams is there, she gave you and all the kids a study guide for her next exam."
    img1.src = "Ending 7.png"
    button1.innerHTML = "restart"
    button2.innerHTML = ""
    button3.innerHTML = ""
    button4.innerHTML = ""
    console.log("You are at Ending 7")
    restart()
    b1.addEventListener('click', start)
    b2.addEventListener('click', die)
    b3.addEventListener('click', die)
    b4.addEventListener('click', die)
    event.preventDefault()
}

function lavaroom(){
    img1.src = "Lava Room.png"
    text1.innerHTML = "You entered the lava room and it's really hot."
    button1.innerHTML = "Try to go through"
    button2.innerHTML = "Go Back"
    button3.innerHTML = ""
    button4.innerHTML = ""
    console.log("You are in the lava room")
    restart()
    if (havevaria == false){
        b1.addEventListener('click', die)
        b2.addEventListener('click', shart)
        b3.addEventListener('click', lavaroom)
        b4.addEventListener('click', lavaroom)
    }
    else{
        if (havekid == false){
            b1.addEventListener('click', lavapath)
            b2.addEventListener('click', shart)
            b3.addEventListener('click', lavaroom)
            b4.addEventListener('click', lavaroom)
        }
        else{
            b1.addEventListener('click', ending2)
            b2.addEventListener('click', shart)
            b3.addEventListener('click', lavaroom)
            b4.addEventListener('click', lavaroom)
        }
    }
    event.preventDefault()
}

function swordroom(){
    if (havesword == false){
        img1.src = "Sword Room.png"
        text1.innerHTML = "You found a sword"
        button1.innerHTML = "Pick it up"
        button2.innerHTML = "Go Forward"
        button3.innerHTML = "Go Back"
        button4.innerHTML = ""
        console.log("You are in the sword room")
        restart()
        b1.addEventListener('click', swordtime)
        b2.addEventListener('click', leftchoice)
        b3.addEventListener('click', shart)
        b4.addEventListener('click', swordroom)
    }
    else{
        img1.src = "Empty Sword Room.png"
        text1.innerHTML = "There is nothing here."
        button1.innerHTML = ""
        button2.innerHTML = "Go Forward"
        button3.innerHTML = "Go Back"
        button4.innerHTML = ""
        console.log("You returned the sword room")
        restart()
        b1.addEventListener('click', swordroom)
        b2.addEventListener('click', leftchoice)
        b3.addEventListener('click', shart)
        b4.addEventListener('click', swordroom)
    }
    event.preventDefault()
}

function bowroom(){
    if (havebow == false){
        img1.src = "Bow Room.png"
        text1.innerHTML = "You found a bow"
        button1.innerHTML = "Go Back"
        button2.innerHTML = ""
        button3.innerHTML = ""
        button4.innerHTML = "Pick it up"
        console.log("You are in the sword room")
        restart()
        b1.addEventListener('click', downchoice)
        b2.addEventListener('click', bowroom)
        b3.addEventListener('click', bowroom)
        b4.addEventListener('click', bowtime)
    }
    else{
        img1.src = "Empty Sword Room.png"
        text1.innerHTML = "There is nothing here."
        button1.innerHTML = "Go Back"
        button2.innerHTML = ""
        button3.innerHTML = ""
        button4.innerHTML = ""
        console.log("You returned the bow room")
        restart()
        b1.addEventListener('click', downchoice)
        b2.addEventListener('click', bowroom)
        b3.addEventListener('click', bowroom)
        b4.addEventListener('click', bowroom)
    }
    event.preventDefault()
}

function shieldroom(){
    if (haveshield == false){
        img1.src = "Shield Room.png"
        text1.innerHTML = "You found a shield"
        button1.innerHTML = "Pick it up"
        button2.innerHTML = ""
        button3.innerHTML = ""
        button4.innerHTML = "Go Back"
        console.log("You are in the shield room")
        restart()
        b1.addEventListener('click', shieldtime)
        b2.addEventListener('click', shieldroom)
        b3.addEventListener('click', shieldroom)
        b4.addEventListener('click', upchoice)
    }
    else{
        img1.src = "Empty Sword Room.png"
        text1.innerHTML = "There is nothing here."
        button1.innerHTML = ""
        button2.innerHTML = ""
        button3.innerHTML = ""
        button4.innerHTML = "Go Back"
        console.log("You returned the shield room")
        restart()
        b1.addEventListener('click', shieldroom)
        b2.addEventListener('click', shieldroom)
        b3.addEventListener('click', shieldroom)
        b4.addEventListener('click', upchoice)
    }
    event.preventDefault()
}

function monsterroom(){
    if (defeatedmonster == false){
        img1.src = "Monster Room.png"
        text1.innerHTML = "You encountered a powerful monster"
        button1.innerHTML = ""
        button2.innerHTML = "Go Back"
        button3.innerHTML = "Try to fight"
        button4.innerHTML = ""
        console.log("You are in the mosnter room")
        restart()
        if (havesword == false){
            console.log(havesword)
            b1.addEventListener('click', monsterroom)
            b2.addEventListener('click', shart)
            b3.addEventListener('click', die)
            b4.addEventListener('click', monsterroom)
        }
        else{
            b1.addEventListener('click', monsterroom)
            b2.addEventListener('click', shart)
            b3.addEventListener('click', monsterfight)
            b4.addEventListener('click', monsterroom) 
        }
    }
    else{
        img1.src = "Re Monster Room.png"
        text1.innerHTML = "There is nothing here."
        button1.innerHTML = ""
        button2.innerHTML = "Go Back"
        button3.innerHTML = "Go Forward"
        button4.innerHTML = ""
        console.log("You returned the monster room")
        restart()
        b1.addEventListener('click', monsterroom)
        b2.addEventListener('click', shart)
        b3.addEventListener('click', rightchoice)
        b4.addEventListener('click', monsterroom)
    }
    event.preventDefault()
}

function quizroom(){
    if (answeredquiz == false){
        img1.src = "Quiz Room.png"
        text1.innerHTML = "The Riddler has a quiz for you"
        button1.innerHTML = "Go Back"
        button2.innerHTML = "Take Quiz"
        button3.innerHTML = "Attack Him"
        button4.innerHTML = ""
        console.log("You are in the quiz room")
        restart()
        b1.addEventListener('click', shart)
        b2.addEventListener('click', takequiz)
        b3.addEventListener('click', die)
        b4.addEventListener('click', quizroom)
    }
    else{
        img1.src = "Re Quiz Room.png"
        text1.innerHTML = "You got all the questions right."
        button1.innerHTML = "Go Back"
        button2.innerHTML = ""
        button3.innerHTML = ""
        button4.innerHTML = "Go Forward"
        console.log("You returned the quiz room")
        restart()
        b1.addEventListener('click', shart)
        b2.addEventListener('click', quizroom)
        b3.addEventListener('click', quizroom)
        b4.addEventListener('click', downchoice)
    }
    event.preventDefault()
}

function beastroom(){
    if (defeatedbeast == false){
        img1.src = "Beast Room.png"
        text1.innerHTML = "You encountered a powerful monster"
        button1.innerHTML = ""
        button2.innerHTML = "Try to fight"
        button3.innerHTML = "Go Back"
        button4.innerHTML = ""
        console.log("You are in the beast room")
        restart()
        if (havesword == false){
            console.log(havesword)
            b1.addEventListener('click', beastroom)
            b2.addEventListener('click', die)
            b3.addEventListener('click', leftchoice)
            b4.addEventListener('click', beastroom)
        }
        else{
            b1.addEventListener('click', beastroom)
            b2.addEventListener('click', beastfight)
            b3.addEventListener('click', leftchoice)
            b4.addEventListener('click', beastroom) 
        }
    }
    else{
        img1.src = "Re Beast Room.png"
        text1.innerHTML = "There is nothing here."
        button1.innerHTML = ""
        button2.innerHTML = "Go Forward"
        button3.innerHTML = "Go Back"
        button4.innerHTML = ""
        console.log("You returned the beast room")
        restart()
        b1.addEventListener('click', beastroom)
        b2.addEventListener('click', answerroom)
        b3.addEventListener('click', leftchoice)
        b4.addEventListener('click', beastroom)
    }
    event.preventDefault()
}

function answerroom(){
    img1.src = "Answer Room.png"
    text1.innerHTML = "It's a quiz answer key. It says 1.366 2.Ross 3.Troy"
        button1.innerHTML = ""
        button2.innerHTML = ""
        button3.innerHTML = "Go Back"
        button4.innerHTML = ""
        restart()
        b1.addEventListener('click', answerroom)
        b2.addEventListener('click', answerroom)
        b3.addEventListener('click', beastroom)
        b4.addEventListener('click', answerroom)
        event.preventDefault()
}

function beastfight(){
    defeatedbeast=true
    img1.src = "Beast Win.png"
    text1.innerHTML = "You defeated the monster"
    console.log("You have defeated the beast.")
    button1.innerHTML = "Stay"
    button2.innerHTML = "Go Forward"
    button3.innerHTML = "Go Back"
    button4.innerHTML = ""
    restart()
    b1.addEventListener('click', beastroom)
    b2.addEventListener('click', answerroom)
    b3.addEventListener('click', leftchoice)
    b4.addEventListener('click', beastfight)
    event.preventDefault()
}

function ganonroom(){
    console.log("Penis")
}

function supermanroom(){
    if (defeatsuperman == false){
        img1.src = "Super Room.png"
        text1.innerHTML = "You encountered superman"
        button1.innerHTML = "Go Back"
        button2.innerHTML = "Try to Fight"
        button3.innerHTML = "Try to Negoiate"
        button4.innerHTML = ""
        console.log("You are in the superman room")
        restart()
        b1.addEventListener('click', downchoice)
        b2.addEventListener('click', die)
        b3.addEventListener('click', superfight)
        b4.addEventListener('click', supermanroom) 
    }
    else{
        img1.src = "Re Super Room.png"
        text1.innerHTML = "Super Man is letting you pass."
        button1.innerHTML = ""
        button2.innerHTML = "Go Back"
        button3.innerHTML = "Go Forward"
        button4.innerHTML = ""
        console.log("You returned the superman room")
        restart()
        b1.addEventListener('click', supermanroom)
        b2.addEventListener('click', downchoice)
        b3.addEventListener('click', kidroom)
        b4.addEventListener('click', supermanroom)
    }
    event.preventDefault()
}

function kidroom(){
    if (havekid == false){
        img1.src = "Kid Room.png"
        text1.innerHTML = "You found the kids"
        button1.innerHTML = "Pick it up"
        button2.innerHTML = ""
        button3.innerHTML = ""
        button4.innerHTML = "Go Back"
        console.log("You are in the kid room")
        restart()
        b1.addEventListener('click', kidtime)
        b2.addEventListener('click', bowroom)
        b3.addEventListener('click', bowroom)
        b4.addEventListener('click', supermanroom)
    }
    else{
        img1.src = "Re Kid Room.png"
        text1.innerHTML = "You have already saved the kids."
        button1.innerHTML = ""
        button2.innerHTML = ""
        button3.innerHTML = ""
        button4.innerHTML = "Go Back"
        console.log("You returned the bow room")
        restart()
        b1.addEventListener('click', bowroom)
        b2.addEventListener('click', bowroom)
        b3.addEventListener('click', bowroom)
        b4.addEventListener('click', supermanroom)
    }
    event.preventDefault()
}

function dragonroom(){
    if (beatdragon == false){
        img1.src = "Dragon Room.png"
        text1.innerHTML = "You enocuntered THE DRAGON"
        button1.innerHTML = ""
        button2.innerHTML = "Go Back"
        button3.innerHTML = "Try to Fight"
        button4.innerHTML = ""
        restart()
        if (havebow == false){
            b1.addEventListener('click', dragonroom)
            b2.addEventListener('click', rightchoice)
            b3.addEventListener('click', die)
            b4.addEventListener('click', dragonroom)
        }
        else{
            b1.addEventListener('click', dragonroom)
            b2.addEventListener('click', rightchoice)
            b3.addEventListener('click', dragonfight)
            b4.addEventListener('click', dragonroom) 
        }
    }
    else{
        img1.src = "Re Dragon.png"
        text1.innerHTML = "There is ... nothing here "
        button1.innerHTML = ""
        button2.innerHTML = "Go Back"
        button3.innerHTML = "Go Foward"
        button4.innerHTML = ""
        restart()
        b1.addEventListener('click', dragonroom)
        b2.addEventListener('click', rightchoice)
        b3.addEventListener('click', variaroom)
        b4.addEventListener('click', dragonroom) 
    }
    event.preventDefault()
}

function variaroom(){
    if (havevaria == false){
        img1.src = "Varia Room.png"
        text1.innerHTML = "You found the varia suit"
        console.log("You entered the varia room")
        restart()
        button1.innerHTML = "Take It"
        button2.innerHTML = "Go Back"
        button3.innerHTML = ""
        button4.innerHTML = ""
        b1.addEventListener('click', variatime)
        b2.addEventListener('click', dragonroom)
        b3.addEventListener('click', variaroom)
        b4.addEventListener('click', variaroom)
    }
    else{
        img1.src = "Re Varia Room.png"
        text1.innerHTML = "You found a hidden tunnel"
        console.log("You entered the varia room again")
        restart()
        button1.innerHTML = ""
        button2.innerHTML = "Go Back"
        button3.innerHTML = ""
        button4.innerHTML = "Go Down"
        b1.addEventListener('click', variaroom)
        b2.addEventListener('click', dragonroom)
        b3.addEventListener('click', variaroom)
        b4.addEventListener('click', holeroom1)
    }
    event.preventDefault()
}

function lavapath(){
    img1.src = "Survive Lava.png"
    text1.innerHTML = "You were able to survive the lava due to the Varia Suit"
    console.log("You are in lavapath")
    button1.innerHTML = "Go Forward"
    button2.innerHTML = ""
    button3.innerHTML = ""
    button4.innerHTML = "Go Back"
    restart()
    b1.addEventListener('click', upchoice)
    b2.addEventListener('click', lavapath)
    b3.addEventListener('click', lavapath)
    b4.addEventListener('click', lavaroom)
    event.preventDefault()
}

function holeroom1(){
    
    img1.src = "Hole Room Start.png"
    text1.innerHTML = "Seems to be the start of some kind of maze"
    console.log("You entered the hole puzzle")
    button1.innerHTML = "Go Back"
    button2.innerHTML = ""
    button3.innerHTML = "Start Puzzle"
    button4.innerHTML = ""
    restart()
    b1.addEventListener('click', variaroom)
    b2.addEventListener('click', holeroom1)
    b3.addEventListener('click', holeroom2)
    b4.addEventListener('click', holeroom1)
    event.preventDefault()
}

function holeroom2(){
    
    img1.src = "Hole Room.png"
    text1.innerHTML = "Where to?"
    console.log("You entered the start of the hole puzzle")
    button1.innerHTML = "North"
    button2.innerHTML = "West"
    button3.innerHTML = "East"
    button4.innerHTML = "South"
    restart()
    b1.addEventListener('click', holeroom1)
    b2.addEventListener('click', holeroom1)
    b3.addEventListener('click', holeroom3)
    b4.addEventListener('click', holeroom1)
    event.preventDefault()
}

function holeroom3(){
    
    img1.src = "Hole Room.png"
    text1.innerHTML = "Where to?"
    console.log("You entered the start of the hole puzzle")
    button1.innerHTML = "North"
    button2.innerHTML = "West"
    button3.innerHTML = "East"
    button4.innerHTML = "South"
    restart()
    b1.addEventListener('click', holeroom4)
    b2.addEventListener('click', holeroom1)
    b3.addEventListener('click', holeroom1)
    b4.addEventListener('click', holeroom1)
    event.preventDefault()
}

function holeroom4(){
    
    img1.src = "Hole Room.png"
    text1.innerHTML = "Where to?"
    console.log("You entered the start of the hole puzzle")
    button1.innerHTML = "North"
    button2.innerHTML = "West"
    button3.innerHTML = "East"
    button4.innerHTML = "South"
    restart()
    b1.addEventListener('click', holeroom1)
    b2.addEventListener('click', holeroom5)
    b3.addEventListener('click', holeroom1)
    b4.addEventListener('click', holeroom1)
    event.preventDefault()
}

function holeroom5(){
    
    img1.src = "Hole Room.png"
    text1.innerHTML = "Where to?"
    console.log("You entered the start of the hole puzzle")
    button1.innerHTML = "North"
    button2.innerHTML = "West"
    button3.innerHTML = "East"
    button4.innerHTML = "South"
    restart()
    b1.addEventListener('click', holeroom1)
    b2.addEventListener('click', holeroom6)
    b3.addEventListener('click', holeroom1)
    b4.addEventListener('click', holeroom1)
    event.preventDefault()
}

function holeroom6(){
    
    img1.src = "Hole Room.png"
    text1.innerHTML = "Where to?"
    console.log("You entered the start of the hole puzzle")
    button1.innerHTML = "North"
    button2.innerHTML = "West"
    button3.innerHTML = "East"
    button4.innerHTML = "South"
    restart()
    b1.addEventListener('click', holeroom1)
    b2.addEventListener('click', holeroom1)
    b3.addEventListener('click', holeroom1)
    b4.addEventListener('click', holeroom7)
    event.preventDefault()
}

function holeroom7(){
    
    img1.src = "Hole Room.png"
    text1.innerHTML = "Where to?"
    console.log("You entered the start of the hole puzzle")
    button1.innerHTML = "North"
    button2.innerHTML = "West"
    button3.innerHTML = "East"
    button4.innerHTML = "South"
    restart()
    b1.addEventListener('click', holeroom1)
    b2.addEventListener('click', holeroom1)
    b3.addEventListener('click', holeroom8)
    b4.addEventListener('click', holeroom1)
    event.preventDefault()
}

function holeroom8(){
    
    img1.src = "Hole Room Final.png"
    text1.innerHTML = "There is a computer describing Ganondorf's evil plan to seize the Island of Koridai"
    console.log("There is a computer describing Ganondorf's evil plan to seize the Island of Koridai")
    button1.innerHTML = "Go Back"
    button2.innerHTML = ""
    button3.innerHTML = ""
    button4.innerHTML = ""
    restart()
    b1.addEventListener('click', holeroom1)
    b2.addEventListener('click', holeroom8)
    b3.addEventListener('click', holeroom8)
    b4.addEventListener('click', holeroom8)
    event.preventDefault()
}

function wizardroom(){
    img1.src = "Wizard Fight.png"
    text1.innerHTML = "You encounted the Mysterious Kindnapper, he has locked your path back."
    console.log("You entered the Wizard Room ")
    button1.innerHTML = ""
    button2.innerHTML = "Fight"
    button3.innerHTML = "Negotitate"
    button4.innerHTML = ""
    restart()
    b1.addEventListener('click', wizardroom)
    b2.addEventListener('click', wizardfight)
    b3.addEventListener('click', antigardnerscene)
    b4.addEventListener('click', wizardroom)
    event.preventDefault()
}

function bowserroom(){
    if (defeatbowser == false){
        img1.src = "Bowser Room_.png"
        text1.innerHTML = "You encounted Bowser, maybe he is guarding an exit."
        console.log("You entered Bowser")
        button1.innerHTML = ""
        button2.innerHTML = "Go Back"
        button3.innerHTML = "Fight"
        button4.innerHTML = ""
        restart()
        if (haveshield == false){
            b1.addEventListener('click', bowserroom)
            b2.addEventListener('click', rightchoice)
            b3.addEventListener('click', die)
            b4.addEventListener('click', bowserroom)
        }
        else{
            b1.addEventListener('click', bowserroom)
            b2.addEventListener('click', rightchoice)
            b3.addEventListener('click', bowserfight)
            b4.addEventListener('click', bowserroom)
        }
    }
    else{
        img1.src = "Bowser Left.png"
        text1.innerHTML = "You can pass the lava using the Varia Suit"
        console.log("You rentered Bowser")
        button1.innerHTML = ""
        button2.innerHTML = "Go Back"
        button3.innerHTML = "Go Forward"
        button4.innerHTML = ""
        restart()
        if (havekid == false){
            b1.addEventListener('click', bowserroom)
            b2.addEventListener('click', rightchoice)
            b3.addEventListener('click', rightbowser)
            b4.addEventListener('click', bowserroom)
        }
        else{
            b1.addEventListener('click', bowserroom)
            b2.addEventListener('click', rightchoice)
            b3.addEventListener('click', ending2)
            b4.addEventListener('click', bowserroom)
        }
    }
    event.preventDefault()

}

function bowserfight(){
    img1.src = "Bowser Fight_.png"
    text1.innerHTML = "You could block Bowser's attacks with your shield now you can walk to the axe and finish him"
    console.log("You entered Bowser Fight")
    button1.innerHTML = ""
    button2.innerHTML = "Go Back"
    button3.innerHTML = "Use the axe"
    button4.innerHTML = ""
    restart()
    b1.addEventListener('click', bowserfight)
    b2.addEventListener('click', rightchoice)
    b3.addEventListener('click', bowserwin)
    b4.addEventListener('click', bowserfight)
    event.preventDefault()
}

function bowserwin(){
    defeatbowser = true
    img1.src = "Bowser Win_.png"
    button1.innerHTML = ""
    button2.innerHTML = "Go Back"
    button3.innerHTML = "Go Forward"
    button4.innerHTML = ""
    text1.innerHTML = "You defeated Bowser"
    console.log("You entered Bowser Fight")
    restart()
    if (havekid == false){
        b1.addEventListener('click', bowserwin)
        b2.addEventListener('click', bowserroom)
        b3.addEventListener('click', ending6)
        b4.addEventListener('click', bowserwin)
    }
    else{
        b1.addEventListener('click', bowserwin)
        b2.addEventListener('click', ending2)
        b3.addEventListener('click', ending7)
        b4.addEventListener('click', bowserwin) 
    }
    event.preventDefault()
}

function rightbowser(){
    img1.src = "Bowser Right.png"
    button1.innerHTML = ""
    button2.innerHTML = "Go Back"
    button3.innerHTML = "Go Forward"
    button4.innerHTML = ""
    text1.innerHTML = "You can go back using the Varia Suit"
    console.log("You entered Bowser Right")
    restart()
    if (havekid == false){
        b1.addEventListener('click', rightbowser)
        b2.addEventListener('click', bowserroom)
        b3.addEventListener('click', ending6)
        b4.addEventListener('click', rightbowser)
    }
    else{
        b1.addEventListener('click', bowserroom)
        b2.addEventListener('click', ending2)
        b3.addEventListener('click', ending7)
        b4.addEventListener('click', bowserroom)
    }
    event.preventDefault()
}

function upchoice(){
    img1.src = "Upward  Split.png"
    text1.innerHTML = "You reached a split path"
    console.log("You entered the upward split path room")
    restart()
    button1.innerHTML = ""
    button2.innerHTML = "Left"
    button3.innerHTML = "Right"
    button4.innerHTML = "Go Back"
    b1.addEventListener('click', upchoice)
    b2.addEventListener('click', shieldroom)
    b3.addEventListener('click', wizardroom)
    b4.addEventListener('click', lavapath)
    event.preventDefault()
}

function rightchoice(){
    img1.src = "Rightward Split.png"
    text1.innerHTML = "You reached a split path"
    console.log("You entered the rightward split path room")
    restart()
    button1.innerHTML = "Left"
    button2.innerHTML = "Go Back"
    button3.innerHTML = ""
    button4.innerHTML = "Right"
    b1.addEventListener('click', dragonroom)
    b2.addEventListener('click', monsterroom)
    b3.addEventListener('click', rightchoice)
    b4.addEventListener('click', bowserroom)
    event.preventDefault()
}

function downchoice(){
    img1.src = "Downward Choice.png"
    text1.innerHTML = "You reached a split path"
    console.log("You entered the downward split path room")
    restart()
    button1.innerHTML = "Go Back"
    button2.innerHTML = "Left"
    button3.innerHTML = "Right"
    button4.innerHTML = ""
    b1.addEventListener('click', quizroom)
    b2.addEventListener('click', bowroom)
    b3.addEventListener('click', supermanroom)
    b4.addEventListener('click', ganonroom)
    event.preventDefault()
}

function leftchoice(){
    img1.src = "Leftward Choice.png"
    text1.innerHTML = "You reached a split path"
    console.log("You entered the leftward split path room")
    restart()
    button1.innerHTML = "Right"
    button2.innerHTML = ""
    button3.innerHTML = "Go Back"
    button4.innerHTML = "Left"
    b1.addEventListener('click', beastroom)
    b2.addEventListener('click', leftchoice)
    b3.addEventListener('click', swordroom)
    b4.addEventListener('click', ganonroom)
    event.preventDefault()
}

function takequiz(){
    let a1 = prompt("What is the national pokedex number of Clampearl?")
    let a2 = prompt("Who is the final character in the friends intro?")
    let a3 = prompt("Who is guilty in Marcus Ceradini's Game?")
    if (a1 == "366"){
        if (a2.toLowerCase() == "ross"){
            if (a3.toLowerCase() == "troy"){
                answeredquiz = true
                quizroom()
            }
            else{
                die()
            }
        }
        else{
            die()
        }
    }
    else{
        die()
    }
    event.preventDefault()
}


function swordtime(){
    havesword=true
    img1.src = "Ethan w_ sword.png"
    text1.innerHTML = "You got the sword"
    console.log("You have obtained the sword.")
    button1.innerHTML = "Stay"
    button2.innerHTML = "Go Forward"
    button3.innerHTML = "Go Back"
    button4.innerHTML = ""
    restart()
    b1.addEventListener('click', swordroom)
    b2.addEventListener('click', leftchoice)
    b3.addEventListener('click', shart)
    b4.addEventListener('click', swordtime)
    event.preventDefault()
}

function monsterfight(){
    defeatedmonster=true
    img1.src = "Defeated Monster.png"
    text1.innerHTML = "You defeated the monster"
    console.log("You have defeated the monster.")
    button1.innerHTML = "Stay"
    button2.innerHTML = "Go Back"
    button3.innerHTML = "Go Forward"
    button4.innerHTML = ""
    restart()
    b1.addEventListener('click', monsterroom)
    b2.addEventListener('click', shart)
    b3.addEventListener('click', rightchoice)
    b4.addEventListener('click', monsterfight)
    event.preventDefault()
}

function superfight(){
    let n1 = prompt("The children are behind this door, what can you offer me?")
    if (n1.toLowerCase() == "peace"){
        defeatsuperman = true
        supermanroom()
    }
    else{
        die()
    }
}

function antigardnerscene(){
    let n4 = prompt("I to you am, Fire to Ice, Fast to Slow, Big to Small, What is the opposite to me?")
    if (n4.toLowerCase() == "me"){
        antireveal()
    }
    else if (n4.toLowerCase() == "gardner"){
        antireveal()
    }
    else if (n4.toLowerCase() == "mr gardner"){
        antireveal()
    }
    else if (n4.toLowerCase() == "mr gardner"){
        antireveal()
    }
    else if (n4.toLowerCase() == "mr. gardner"){
        antireveal()
    }
    else if (n4.toLowerCase() == "ethan gardner"){
       antireveal() 
    }
    else{
        wizardroom()
    }
}

function antireveal(){
    img1.src = "AntiGardner.png"
    text1.innerHTML = '"That is right, I am the opposite of you, Mr. Gardner, I am the Anti-Gardner, all my life I wanted to be a networking teacher, so I kidnapped your students, and I am working on building a classroom where I can teach them Networking 10 times better than you every could, and I can prove it prepare for my networking exam."'
    console.log("You have found out the kidnapper is Mr. Anti-Gardner")
    button1.innerHTML = "Take Exam"
    button2.innerHTML = ""
    button3.innerHTML = ""
    button4.innerHTML = ""
    restart()
    b1.addEventListener('click', networkexam)
    b2.addEventListener('click', antireveal)
    b3.addEventListener('click', antireveal)
    b4.addEventListener('click', antireveal)
    event.preventDefault()
}

function bowtime(){
    havebow=true
    img1.src = "Ethan w_ bow.png"
    text1.innerHTML = "You got the bow"
    console.log("You have got to bow.")
    restart()
    button1.innerHTML = "Go Back"
    button2.innerHTML = ""
    button3.innerHTML = ""
    button4.innerHTML = "Stay"
    b1.addEventListener('click', downchoice)
    b2.addEventListener('click', bowtime)
    b3.addEventListener('click', bowtime)
    b4.addEventListener('click', bowroom)
    event.preventDefault()

}

function dragonfight(){
    beatdragon=true
    img1.src = "Dragon Win.png"
    text1.innerHTML = "You defeated the dragon"
    console.log("You have defeated the dragon.")
    button1.innerHTML = "Stay"
    button2.innerHTML = "Go Back"
    button3.innerHTML = "Go Forward"
    button4.innerHTML = ""
    restart()
    b1.addEventListener('click', dragonroom)
    b2.addEventListener('click', rightchoice)
    b3.addEventListener('click', variaroom)
    b4.addEventListener('click', dragonfight)
    event.preventDefault()
}

function wizardfight(){
    beatdragon=true
    img1.src = "Wizard Win.png"
    text1.innerHTML = "You killed the mysterious kidnapper"
    console.log("You have defeated the wizard.")
    button1.innerHTML = "Go Forward"
    button2.innerHTML = ""
    button3.innerHTML = ""
    button4.innerHTML = ""
    restart()
    b1.addEventListener('click', ending3)
    b2.addEventListener('click', wizardfight)
    b3.addEventListener('click', wizardfight)
    b4.addEventListener('click', wizardfight)
    event.preventDefault()
}

function kidtime(){
    havekid = true
    img1.src = "Kid Room.png"
    text1.innerHTML = "You have rescued the children, now find an exit to get them out."
    restart()
    button1.innerHTML = "Stay"
    button2.innerHTML = ""
    button3.innerHTML = ""
    button4.innerHTML = "Go Back"
    b1.addEventListener('click', kidroom)
    b2.addEventListener('click', bowtime)
    b3.addEventListener('click', bowtime)
    b4.addEventListener('click', supermanroom)
    event.preventDefault()

}

function variatime(){
    havevaria = true
    img1.src = "Varia Suit.png"
    restart()
    button1.innerHTML = "Stay"
    button2.innerHTML = "Go Back"
    button3.innerHTML = ""
    button4.innerHTML = ""
    b1.addEventListener('click', variaroom)
    b2.addEventListener('click', dragonroom)
    b3.addEventListener('click', variatime)
    b4.addEventListener('click', variatime)
    event.preventDefault()
}

function shieldtime(){
    haveshield = true
    img1.src = "Gardner w_ shield.png"
    restart()
    button1.innerHTML = "Stay"
    button2.innerHTML = "Go Back"
    button3.innerHTML = ""
    button4.innerHTML = ""
    b1.addEventListener('click', shieldroom)
    b2.addEventListener('click', upchoice)
    b3.addEventListener('click', shieldtime)
    b4.addEventListener('click', shieldtime)
    event.preventDefault()
}

function networkexam(){
    let percent = 0;
    let examquestions = new Map([
        ["A Network Technitian needs a cost effective solution that can multiplex up to 16 wavelengths on an SFP/SFP+ Interface. Which multiplexing technique should the network technician use?","cwdm"],
        ["A technician who lays cabeling is researching how the maufacturer constructed fiber optic cabling. Which of the following reflects signals back into the wavelengths as efficently as possible so that the light signal travels along the waveguide by multiple internal reflections?","cladding"],
        ["A soultions architect is designing a cable managment solution. Which of the following is the most common wiring distribution?","patch panel"],
        ["A network administrator is setting up connection points for multiple devices to connect. What cannot be configured?","hub"],
        ["A project manager is ordering equipment to set up fiver cabeling in a new building. What tool should will allow him a more permanent join with lower insertion loss?","fusion splicer"]
    ])

    for (question of examquestions){
        let n3 = prompt(question[0])
        if(n3.toLowerCase() == question[1]){
            percent += 20
        }  
    }

    if (percent >= 80){
        console.log("win")
        ending5()
    }
    else{
        console.log("lose")
        ending4()
    }
}


function start(){
    img1.src = "Ethan.png"
    text1.innerHTML = "Someone had kidnapped the entire junior programming class, you, the teacher, Mr. Gardner have to find them and save them."
    button1.innerHTML = "Go North"
    button2.innerHTML = "Go West"
    button3.innerHTML = "Go East"
    button4.innerHTML = "Go South"
    havesword = false
    defeatedmonster = false
    answeredquiz = false
    defeatedbeast = false
    havebow = false
    defeatsuperman = false
    havekid = false
    beatdragon = false
    havevaria = false
    haveshield = false
    defeatbowser = false

    restart()
    console.log("You are in the first room")
    b1.addEventListener('click', lavaroom)
    b2.addEventListener('click', swordroom)
    b3.addEventListener('click', monsterroom)
    b4.addEventListener('click', quizroom)
    event.preventDefault()
}

start()


//start()

