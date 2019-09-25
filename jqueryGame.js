'use strict'

//attack function
function dmgDone() {
    $('.attack').click(function() {
        event.preventDefault();
        let playerAtt = Math.floor(playerStats[0].attack);
        let oppDef = Math.floor(charChosen.defense);
        let total = (playerAtt - oppDef);


        if (total > 0) {
            let heaP = charChosen.health - (total);
            let newHP = heaP;

            if (newHP > 0) {
                let currentHP = newHP -= total;
                console.log(total)
                alert(`Attack Health is ${heaP}!`)

                // $('.oppHealth').change(`<p>${currentHP}</p>`)
            } else {
                alert('You Died!')
            }

        }
        if (total <= 0) {
            alert(`Block! Health is unchanged!`)

        }
        // if (heaP > total) {
        //     --heaP;
        //     console.log(heaP);
        // }


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
        <p>Health:${charChosen.health} </p>
         <p>Attack:${charChosen.attack} </p>
         <p>Defense:${charChosen.defense} </p>
         <p>Agility:${charChosen.agility} </p></section>`);
}

//when you say yes
function arenaBattle() {

    // charStored();
    $('.battleArena').html(`<div class = 'battleStage'> <button class = 'attack'> ATTACK </button> 
        <button class = 'defend'> DEFEND </button> <p class = 'yourHealth'> ${playerStats[0].health}</p>
        <p class = 'oppHealth'> ${charChosen.health}</p> </div>`)
    $('.chooseAns').hide();
    $('.typeChosen').hide();
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

function showStats() {
    let site = null;
    // Warrior Class 
    $('.startPage').on('click', '.Warrior', function(event) {
        $('header').hide();
        $('.Races').hide();
        hideUnhide();
        $('.charStats').html(`<div class = 'charCheck'><h2 class = typeChosen> You have selected ${playerStats[0].class}!</h2>
        <h3>${playerStats[0].class}</h3>
        <p>Health:${playerStats[0].health} </p>
         <p>Attack:${playerStats[0].attack} </p>
         <p>Defense:${playerStats[0].defense} </p>
         <p>Agility:${playerStats[0].agility} </p></div>`);

    });

    //Rogue Class
    $('.startPage').on('click', '.Rogue', function(event) {
        $('header').hide();
        $('.Races').hide();
        hideUnhide();
        $('.charStats').html(`<div class = 'charCheck'><h3> You have selected ${playerStats[1].class}!</h3>
        <h3>${playerStats[1].class}</h3>
        <p>Health:${playerStats[1].health} </p>
         <p>Attack:${playerStats[1].attack} </p>
         <p>Defense:${playerStats[1].defense} </p>
         <p>Agility:${playerStats[1].agility} </p> 
         </div>`);
    });

    //Mage Class
    $('.startPage').on('click', '.Mage', function(event) {
        $('header').hide();
        $('.Races').hide();
        hideUnhide();
        $('.charStats').html(`<div class = 'charCheck'><h3> You have selected ${playerStats[2].class}!</h3>
        <h3>${playerStats[2].class}</h3>
        <p>Health:${playerStats[2].health} </p>
         <p>Attack:${playerStats[2].attack} </p>
         <p>Defense:${playerStats[2].defense} </p>
         <p>Agility:${playerStats[2].agility} </p> 
         </div>`);
    });

    //Hunter Class
    $('.startPage').on('click', '.Hunter', function(event) {
        $('header').hide();
        $('.Races').hide();
        hideUnhide();
        $('.charStats').html(`<div class = 'charCheck'><h3> You have selected ${playerStats[3].class}!</h3>
        <h3>${playerStats[3].class}</h3>
        <p>Health:${playerStats[3].health} </p>
         <p>Attack:${playerStats[3].attack} </p>
         <p>Defense:${playerStats[3].defense} </p>
         <p>Agility:${playerStats[3].agility} </p> 
         </div>`);
    });





};


function startPage() {
    showStats();
    buttonClick();

}
$(startPage);