makeDeck = async (e) => {    
    const commanderDeck = [
        // Lands
        'Command Tower',
        'Evolving Wilds',
        'Terramorphic Expanse',
        'Myriad Landscape',
        'Opal Palace',
        'Path of Ancestry',
        'Reliquary Tower',
        'Rogue\'s Passage',
        'Commander\'s Sphere',
        'Sol Ring',

        // Creatures
        'Solemn Simulacrum',
        'Burnished Hart',
        'Rampant Growth',
        'Kodama\'s Reach',
        'Cultivate',
        'Farhaven Elf',
        'Wood Elves',
        'Coiling Oracle',
        'Elvish Visionary',
        'Mulldrifter',
        'Sakura-Tribe Elder',
        'Yavimaya Elder',

        // Removal and Control
        'Beast Within',
        'Swords to Plowshares',
        'Return to Dust',
        'Path to Exile',
        'Doom Blade',
        'Terminate',
        'Putrefy',
        'Krosan Grip',
        'Counterspell',
        'Negate',

        // Card Draw and Advantage
        'Blue Sun\'s Zenith',
        'Rhystic Study',
        'Mystic Remora',
        'Skullclamp',
        'Harmonize',
        'Read the Bones',
        'Night\'s Whisper',

        // Recursion and Protection
        'Eternal Witness',
        'Reclamation Sage',
        'Whisperwood Elemental',
        'Avenger of Zendikar',
        'Craterhoof Behemoth',
        'Lightning Greaves',
        'Swiftfoot Boots'
    ];

    const cardGrid = document.querySelector('.card-grid');

    commanderDeck.forEach((cardName) => {
        fetch(`https://api.scryfall.com/cards/named?fuzzy=${encodeURIComponent(cardName)}`)
        .then((response) => response.json())
        .then((data) => {
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('card');
            const cardImg = document.createElement('img');
            cardImg.src = data.image_uris.normal;
            cardImg.alt = data.name;
            cardDiv.appendChild(cardImg);
            cardGrid.appendChild(cardDiv);
        });
    });
}