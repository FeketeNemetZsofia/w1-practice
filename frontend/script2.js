function gameShow(firstPlace, secondPlace) {
    console.log("First place: "+ firstPlace);
    console.log("Second place: "+ secondPlace);
};
gameShow("Nick", "Miles")

function report(result) {
    if (result == "Not Guilty") {
        console.log("CONGRATULATIONS!")
    }
    else {
        console.log("TOO BAD, TRY AGAIN!")
    }
}

report("Not Guilty")