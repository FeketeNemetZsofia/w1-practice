let claymore = ["Alicia", "Beth", "Clare", "Claudia", "Unnamed", "Cynthia", "Deneve", "Diana", "Elena", "Eliza", "Emelia", "Eva", "Flora", "Galatea", "Helen", "Hilda", "Jean", "Juliana", "Karla", "Kate", "Katea", "Lily", "Lucia", "Matilda", "Miria", "Natalie", "Ophelia", "Pamela", "Queenie", "Rafaela", "Raquel", "Tabitha", "Undine", "Unnamed", "Veronica", "Wendy", "Yuma", "Zelda"]

let statusMember = ["Dead", "Dead", "Alive", "Dead", "Unknown", "Alive", "Alive", "Dead", "Dead", "Dead", "Dead", "Dead", "Dead", "Alive", "Alive", "Dead", "Dead", "Dead", "Dead", "Dead", "Dead", "Dead", "Dead", "Dead", "Alive", "Dead", "Dead", "Dead", "Dead", "Dead", "Dead", "Dead", "Dead", "Dead", "Dead", "Dead", "Alive", "Dead"]

//console.log(claymore.length)
//console.log(statusMember.length) // Checking lenght

/*for (let counter = 0; counter < claymore.length; counter++) {
    console.log(`${claymore[counter]}: ${statusMember[counter]}`) //Matches status with Claymore member
}*/

/*for (let counter = 0; counter < claymore.length; counter++) { // Only shows alive members
    if (statusMember[counter] === "Alive") {
        console.log(claymore[counter])
    }
}*/

for (counter = 0; counter < claymore.length; counter ++) { //Shows who has C in her name
    if (claymore[counter].includes("c")) {
        console.log(`${claymore[counter]} has C in her name`)
    } else {
        console.log(`${claymore[counter]} has no C in her name`)
    }
}