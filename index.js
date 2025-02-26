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
    b1.removeEventListener('click', die)
    b2.removeEventListener('click', die)
    b3.removeEventListener('click', die)
    b4.removeEventListener('click', die)
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

function lavaroom(){
    img1.src = "Lava Room.png"
    text1.innerHTML = "You entered the lava room and it's really hot."
    button1.innerHTML = "Go Back"
    button2.innerHTML = "Try to go through"
    button3.innerHTML = ""
    button4.innerHTML = ""
    console.log("You are in the lava room")
    restart()
    b1.addEventListener('click', shart)
    b2.addEventListener('click', die)
    b3.addEventListener('click', lavaroom)
    b4.addEventListener('click', lavaroom)
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
        b3.addEventListener('click', die)
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
        b4.addEventListener('click', die)
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
            b4.addEventListener('click', monsterroom) 
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
        b2.addEventListener('click', die)
        b3.addEventListener('click', leftchoice)
        b4.addEventListener('click', beastroom)
    }
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
    b2.addEventListener('click', die)
    b3.addEventListener('click', leftchoice)
    b4.addEventListener('click', beastfight)
    event.preventDefault()
}

function ganonroom(){
    console.log("Penis")
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
    let a3 = prompt("Who is guilty im Marcus Ceradini's Game?")
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
    b3.addEventListener('click', die)
    b4.addEventListener('click', monsterfight)
    event.preventDefault()
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

