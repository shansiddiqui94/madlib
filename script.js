function madLibs() {
    let player = prompt("Would you like Story1 or Story2");
    if (player === "Story1") {
        storyline1();
    } else {
        storyline2();
    }

    function storyline1() {
        let adjective1 = prompt("type an adjective");
        let general = prompt("type a general place");
        let vehiclename = prompt("type a vehicle name (plural)");
        let game = prompt("type the name of a game");
        let noun1 = prompt("type a plural noun");
        let verb1 = promot("type an 'ing' verb");
        let verb2 = prompt("type another 'ing' verb");
        let food = prompt("type a food name (plural)");
        let Sportname = prompt("type the name of a sport");
        let verb3 = prompt("type another 'ing' verb");
        let emotion = prompt("type an emotion");
        let number = prompt("type a number");

        let madLibs1 = alert(`
            A vacation is when you take a trip to some ${adjective1} place near an amazing ${general}. A good vacation place is one where you can ride  ${vehiclename} or play ${game} or go ${hunting} for ${noun1} I like to spend my time ${verb1} or ${verb2}. When parents go on a vacation, they spend their time eating three ${food} a day. Usually, fathers play ${Sportname} and, mothers spend their time ${verb3}. Adults need vacations more than kids because adults are always very ${emotion} because they have to work ${number} hours every day all year just to afford their vacations!`);
    }

    function storyline2() {
        let adjective2 = prompt("type an adjective");
        let place2 = prompt("type a famous place");
        let noun2 = prompt("type a plural noun");
        let adjective3 = prompt("type another adjective");
        let food2 = prompt("type a food");
        let emotion2 = prompt("type an emotion");
        let verb2 = prompt("type an 'ing' verb");
        let place3 = prompt("type a common place");
        let adjective4 = prompt("type another adjective");
        let noun3 = prompt("type a noun");
        let adjective5 = prompt("type another adjective");
        let noun4 = prompt("type another noun");
        let family2 = prompt("type a family member");
        let adjective6 = prompt("type another adjective");

        let madLibs2 = alert(
            `Today we took a ${adjective2} fieldtrip to ${place2}. They're famous for making ${noun2} and for cooking ${adjective3} ${food2}. Eating all that food made me feel ${emotion2}. Next we enjoyed the local tradition of ${verb2} in the middle of the ${place3}! Finally, we went shopping for souvenirs. I bought a ${adjective4} ${noun3} for myself, and a ${adjective5} ${noun4} for my favorite ${family2}. I'll definitely never forget this ${adjective6} trip!`
        );
    }
}
madLibs();