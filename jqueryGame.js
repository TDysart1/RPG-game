'use strict'
let myChar = 0;


//attack function
function dmgDone() {
    $('.attack').click(function() {

        event.preventDefault();
        let playerAtt = Math.floor(myChar.attack);
        let oppDef = Math.floor(charChosen.defense);
        let total = (playerAtt - oppDef);
        let heaP = charChosen.health - total;



        if (heaP > 0) {
            let currentHP = heaP - total;
            $('.oppHealth').text(`Health:${currentHP}`).change().val();
        }








        // let newHP = currentHP -= total;
        // $('.oppHealth').text(`Health:${newHP}`).change();
        // console.log(newHP);
        // }
        //         alert(`Attack Health is ${heaP}!`);

        //         // $('.oppHealth').change(`<p>${currentHP}</p>`)
        //     } else {
        //         alert('You Died!')
        //     }

        // }
        // if (total <= 0) {
        //     alert(`Block! Health is unchanged!`)

        // }
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
        <button class = 'defend'> DEFEND </button> <p class = 'yourHealth'> Health:${myChar.health}</p>
        <p class = 'oppHealth'> Health:${charChosen.health}</p> </div>`)
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
            <p>Health:${playerStats[0].health} </p>
            <p>Attack:${playerStats[0].attack} </p>
            <p>Defense:${playerStats[0].defense} </p>
            <p>Agility:${playerStats[0].agility} </p></div>`);
                break;
            case playerStats[1].class:
                roguePicked();
                $('.charStats').html(`<div class = 'charCheck'><h2 class = typeChosen> You have selected ${classChosen} !</h2>
                   <h3>${playerStats[1].class}</h3>
                   <p>Health:${playerStats[1].health} </p>
                   <p>Attack:${playerStats[1].attack} </p>
                   <p>Defense:${playerStats[1].defense} </p>
                   <p>Agility:${playerStats[1].agility} </p></div>`);
                break;
            case playerStats[2].class:
                magePicked();
                $('.charStats').html(`<div class = 'charCheck'><h2 class = typeChosen> You have selected ${classChosen} !</h2>
            <h3>${playerStats[2].class}</h3>
            <p>Health:${playerStats[2].health} </p>
            <p>Attack:${playerStats[2].attack} </p>
            <p>Defense:${playerStats[2].defense} </p>
            <p>Agility:${playerStats[2].agility} </p></div>`);
                break;
            case playerStats[3].class:
                hunterPicked();
                $('.charStats').html(`<div class = 'charCheck'><h2 class = typeChosen> You have selected ${classChosen} !</h2>
            <h3>${playerStats[3].class}</h3>
            <p>Health:${playerStats[3].health} </p>
            <p>Attack:${playerStats[3].attack} </p>
            <p>Defense:${playerStats[3].defense} </p>
            <p>Agility:${playerStats[3].agility} </p></div>`);
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