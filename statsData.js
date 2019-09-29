'use strict';

const playerStats = [{
        class: 'Warrior',
        image: 'W.png',
        health: 300,
        attack: 15,
        mana: 0,
        agility: 7,
        speed: 25

    },

    {
        class: 'Rogue',
        image: 'R.png',
        health: 175,
        attack: 25,
        mana: 0,
        agility: 7,
        speed: 75
    },
    {
        class: 'Mage',
        image: 'M.png',
        health: 100,
        attack: 30,
        mana: 4,
        agility: 1,
        speed: 50
    },
    {
        class: 'Hunter',
        image: 'H.png',
        health: 175,
        attack: 20,
        mana: 2,
        agility: 3,
        speed: 75
    }
];
const charChosen = playerStats[Math.floor(Math.random() * playerStats.length)];