'use strict';

const playerStats = [{
        class: "Warrior",
        health: 300,
        attack: 110,
        defense: 100,
        agility: 2.5

    },

    {
        class: "Rogue",
        health: 175,
        attack: 75,
        defense: 50,
        agility: 4
    },
    {
        class: "Mage",
        health: 100,
        attack: 100,
        defense: 25,
        agility: 1
    },
    {
        class: "Hunter",
        health: 175,
        attack: 75,
        defense: 75,
        agility: 3
    }
];
const charChosen = playerStats[Math.floor(Math.random() * playerStats.length)];