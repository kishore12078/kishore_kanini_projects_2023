
var game = {
    word: "Kishore",
    cow: 0,
    bull: 0
}

var array = [];
var k = -1;
function compares() {
    var tableEle = document.getElementById("output-table");
    var existing_word = document.getElementById("old").value;
    var new_word = document.getElementById("new").value;
    new_word = new_word.toLowerCase();

    let bull_count = 0;
    let cow_count = 0;

    //for (let i = 0; i < new_word.length; i++) {
    //    if (existing_word.charAt(i) == new_word.charAt(i)) {
    //        cow_count++;
    //        new_word.charAt(i)='.';
    //        existing_word.charAt(i)='.';
    //    }
    //}
    //for (let i = 0; i < existing_word.length; i++) {
    //    for (let j = 0; j < new_word.length; j++) {
    //        if (i != j && existing_word.charAt(i) != '.' && new_word.charAt(j) != '.') {
    //            if (existing_word.charAt(i) == new_word.charAt(j)) {
    //                bull_count++;
    //                new_word.charAt(j) ='.';
    //                existing_word.charAt(i) ='.';
    //            }
    //        }
    //    }
    //}

    for (let i = 0; i < existing_word.length; i++) {
        for (let j = 0; j < new_word.length; j++) {
            if (existing_word.charAt(i) == new_word.charAt(j)
                && i == j) {
                cow_count++;
                break;
            }
            if (existing_word.charAt(i) == new_word.charAt(j)
                && i != j) {
                bull_count++;
                break;
            }
        }
    }

    game = new Object();
    game.word = new_word;
    game.cow = cow_count;
    game.bull = bull_count;
    k++;
    array.push(game);


    var row = document.createElement("tr");
    row.innerHTML = "<td>" + array[k].word + "</td>" + "<td>" + array[k].cow + "</td>" + "<td>" + array[k].bull + "</td>"
    tableEle.append(row);

}
function clears() {
    document.getElementById("old").value = '';
    document.getElementById("new").value = '';
}



