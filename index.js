let yHP = 200
let ySpeed = 20
let bob = true
const text1 = document.getElementById("Text1")
const b1 = document.getElementById("button1")
const b2 = document.getElementById("button2")
const b3 = document.getElementById("button3")
const b4 = document.getElementById("button4")
const img1 = document.getElementById("image1")

function shart(){
    img1.src = "Ethan.png"
    text1.innerHTML = "Someone had kidnapped the entire junior programming class, you, the teacher, Mr. Gardner have to find them and save them."
    button1.innerHTML = "Go North"
    button2.innerHTML = "Go West"
    button3.innerHTML = "Go East"
    button4.innerHTML = "Go South"
    b1.addEventListener('click', lavaroom)
    b2.addEventListener('click', swordroom)
    b3.addEventListener('click', die)
    b4.addEventListener('click', die)
    event.preventDefault()
}


function die(){
    text1.innerHTML = "Ending 1: Game Over, you failed to save the children"
    img1.src = "Ethan w_ DED.png"
    button1.innerHTML = "Restart"
    button2.innerHTML = ""
    button3.innerHTML = ""
    button4.innerHTML = ""
    b1.addEventListener('click', shart)
    b2.addEventListener('click', die)
    b3.addEventListener('click', die)
    b4.addEventListener('click', die)
    event.preventDefault()
}

function lavaroom(){
    img1.src = "Lava Room.png"
    text1.innerHTML = "Someone had kidnapped the entire junior programming class, you, the teacher, Mr. Gardner have to find them and save them."
    button1.innerHTML = "Go Back"
    button2.innerHTML = "Try to go through"
    button3.innerHTML = ""
    button4.innerHTML = ""
    b1.addEventListener('click', shart)
    b2.addEventListener('click', die)
    b3.addEventListener('click', lavaroom)
    b4.addEventListener('click', lavaroom)
    event.preventDefault()
}

function swordroom(){
    b1.removeEventListener()
    b2.removeEventListener()
    b3.removeEventListener()
    b4.removeEventListener()
    img1.src = "Sword Room.png"
    text1.innerHTML = "You found a sword"
    button1.innerHTML = "Pick it up"
    button2.innerHTML = "Go Forward"
    button3.innerHTML = "Go Back"
    button4.innerHTML = ""
    b1.addEventListener('click', shart)
    b2.addEventListener('click', die)
    b3.addEventListener('click', swordroom)
    b4.addEventListener('click', swordroom)
    event.preventDefault()
}

function start(){
    img1.src = "Ethan.png"
    text1.innerHTML = "Someone had kidnapped the entire junior programming class, you, the teacher, Mr. Gardner have to find them and save them."
    button1.innerHTML = "Go North"
    button2.innerHTML = "Go West"
    button3.innerHTML = "Go East"
    button4.innerHTML = "Go South"
    b1.addEventListener('click', lavaroom)
    b2.addEventListener('click', swordroom)
    b3.addEventListener('click', die)
    b4.addEventListener('click', die)
    event.preventDefault()
}

start()


//start()

