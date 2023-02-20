
var details = {
    name:'',
    duration: 0,
    rating:0
}

var array = [];
var i = -1;



function register() {

    details = new Object();

    details.name = document.getElementById("mveName").value;
    details.duration = document.getElementById("mveDuration").value;
    details.rating = document.getElementById("mveRating").value;
    i++;
    array.push(details);

    var tableEle = document.getElementById("table");
    var tableRow = document.createElement("tr");
    tableRow.innerHTML = "<td>" + array[i].name + "</td>" + "<td>" + array[i].duration + "</td>" + "<td>" + array[i].rating + "</td>";
    tableEle.append(tableRow);
    console.log(tableEle);
    document.getElementById("mveName").value = '';
    document.getElementById("mveDuration").value = 0;
    document.getElementById("mveRating").value = 0;
}

function deletes() {
    document.getElementById("table").deleteRow(i+1);
    array.pop();
    i--;
    console.log(tableEle);
}
