'use strict'
let myChar = 0;


//player damge calculation
function playerDmgSteps() {
    let baseDmg;
    if (myChar.mana > 0) {
        baseDmg = myChar.attack * myChar.mana / 1;
    } else {
        baseDmg = myChar.attack * myChar.agility / 1;
    }
    let offsetDmg = Math.floor(Math.random() * Math.floor(100));
    let calcOutputDmg = baseDmg + offsetDmg;
    return calcOutputDmg;
}

//enemy damage calculation 
function enemyDmgSteps() {
    let baseDmg;
    if (charChosen.mana > 0) {
        baseDmg = charChosen.attack * charChosen.mana / 1;
    } else {
        baseDmg = charChosen.attack * charChosen.agility / 1;
    }
    let offsetDmg = Math.floor(Math.random() * Math.floor(100));
    let calcOutputDmg = baseDmg + offsetDmg;
    return calcOutputDmg;

}


function DmgSteps() {
    let getPlayerHealth = document.querySelector('.playerHealth');

    let getEnemyHealth = document.querySelector('.oppHealth');
    let playerSpeed = myChar.speed * Math.floor(Math.random() * Math.floor(10));
    let oppSpeed = charChosen.speed * Math.floor(Math.random() * Math.floor(10));


    if (playerSpeed >= oppSpeed) {
        let totalDmg = playerDmgSteps();
        charChosen.health = charChosen.health - totalDmg;
        console.log(charChosen.health)
        alert('GOTTEM ' + totalDmg + ' !' + 'Oppents health ' + charChosen.health + '!')
        getEnemyHealth.innerHTML = 'Opponent Health: ' + charChosen.health;
        if (charChosen.health <= 0) {
            alert('You won refresh to play agian!');
            $('.attack').hide()
            $('.battleStage'.show("<button class = 'refresh'> Refresh </button>"));
            $('.refresh').click(location.reload());
            getEnemyHealth.innerHTML = 'Opponent Health: 0';
        } else {
            getEnemyHealth.innerHTML = 'Opponent Health: ' + charChosen.health;
        }
    } else if (oppSpeed > playerSpeed) {
        //enemy attacks since still alive
        let totalDmg = enemyDmgSteps();

        myChar.health = myChar.health - totalDmg;
        console.log(myChar.health)
        alert('They hit ' + totalDmg + ' !' + 'your health ' + myChar.health + '!')
        getPlayerHealth.innerHTML = 'Player Health: ' + myChar.health;
        if (myChar.health <= 0) {
            alert('You lost refresh to play agian!');
            $('.attack').hide()
            $('.battleStage'.show("<button class = 'refresh'> Refresh </button>"));
            $('.refresh').click(location.reload());
            getPlayerHealth.innerHTML = 'Player Health: 0';
        } else {
            getPlayerHealth.innerHTML = 'Player Health: ' + myChar.health;
        }
    }

}











//attack function
function dmgDone() {
    $('.attack').click(function() {
        event.preventDefault();
        DmgSteps();




    })
}


//defend function

//hide yes or no 
function hideUnhide() {
    $('.battleArena').show().html(`<div class = chooseAns> <p> 'Are you sure?' </p> <button class='yes'>Yes</button> <button class = 'no'>No</button></div>`);
    buttonClick();
}
//random character selection
function randomChar() {

    console.log(charChosen);
    $('.battleArena').after(`<section class = 'opponent'><h3 class = 'oppChoosen'>  ${charChosen.class} </h3>
         
         <p>Attack:${charChosen.attack} </p>
         <p>Mana:${charChosen.mana} </p>
         <p>Agility:${charChosen.agility} </p>
         <p>Speed:${charChosen.speed} </p></section>`);
}

//when you say yes
function arenaBattle() {

    // charStored();
    $('.battleArena').html(`<div class = 'battleStage'> <p class = 'playerHealth'> Player Health:${myChar.health}</p> <button class = 'attack'> ATTACK </button>
        <p class = 'oppHealth'> Opponent Health:${charChosen.health}</p> </div>`)
    $('.chooseAns').hide();
    $('.typeChosen').hide();
    $('.charHealth').hide();
    $('.myCharHealth').hide();
    randomChar();
    dmgDone();
}

function buttonClick() {
    $('.yes').click(function(event) {
        arenaBattle();
    })
    $('.no').click(function(event) {
        location.reload();
    })
}




function verify() {
    let site = null;
    $('.btnSelect').on('click', '.startBttn', function(event) {
        console.log('button clicked')
        const classChosen = ($('.classPicked :selected').val())
            //how do we take the class value selected and set it equal to the correct array[]?
        function warriorPicked() {
            myChar = playerStats[0];
        }

        function roguePicked() {
            myChar = playerStats[1];
        }

        function magePicked() {
            myChar = playerStats[2];
        }

        function hunterPicked() {
            myChar = playerStats[3];
        }

        console.log(classChosen)
        switch (classChosen) {
            case playerStats[0].class:
                warriorPicked();
                $('.charStats').html(`<div class = 'charCheck'><h2 class = typeChosen> You have selected ${classChosen} !</h2>
            <h3>${playerStats[0].class}</h3>
            <p class = 'myCharHealth'>Health:${playerStats[0].health} </p>
            <p>Attack:${playerStats[0].attack} </p>
            <p>Mana:${playerStats[0].mana} </p>
            <p>Agility:${playerStats[0].agility} </p>
            <p>Speed:${playerStats[0].speed} </p></div>`);
                break;
            case playerStats[1].class:
                roguePicked();
                $('.charStats').html(`<div class = 'charCheck'><h2 class = typeChosen> You have selected ${classChosen} !</h2>
                   <h3>${playerStats[1].class}</h3>
                   <p class = 'myCharHealth'>Health:${playerStats[1].health} </p>
                   <p>Attack:${playerStats[1].attack} </p>
                   <p>Mana:${playerStats[1].mana} </p> 
                   <p>Agility:${playerStats[1].agility} </p>
                   <p>Speed:${playerStats[1].speed} </p></div>`);
                break;
            case playerStats[2].class:
                magePicked();
                $('.charStats').html(`<div class = 'charCheck'><h2 class = typeChosen> You have selected ${classChosen} !</h2>
            <h3>${playerStats[2].class}</h3>
            <p class = 'myCharHealth'>Health:${playerStats[2].health} </p>
            <p>Attack:${playerStats[2].attack} </p>
            <p>Mana:${playerStats[2].mana} </p>
            <p>Agility:${playerStats[2].agility} </p>
            <p>Speed:${playerStats[2].speed} </p></div>`);
                break;
            case playerStats[3].class:
                hunterPicked();
                $('.charStats').html(`<div class = 'charCheck'><h2 class = typeChosen> You have selected ${classChosen} !</h2>
            <h3>${playerStats[3].class}</h3>
            <p class = 'myCharHealth'>Health:${playerStats[3].health} </p>
            <p>Attack:${playerStats[3].attack} </p>
            <p>Mana:${playerStats[3].mana} </p>
            <p>Agility:${playerStats[3].agility} </p>
            <p>Speed:${playerStats[3].speed} </p></div>`);
                break;
        }
        $('header').hide();
        $('.Races').hide();
        $('.classPicked').hide();
        $('.btnSelect').hide();
        hideUnhide();

    })

}








function startPage() {
    verify();
    buttonClick();

}
$(startPage);