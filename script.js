function namePrinter(name) { // Kiírja a megadott nevet
    console.log(name)
}

function marriedNameGenerator(fianceName, maidenName) { // Összeköti a jövendőbeli és a menyasszony leánykori nevét
    let marriedName = fianceName + maidenName
        return marriedName
}

namePrinter(marriedNameGenerator("Fekete-", "Német Zsófia"))