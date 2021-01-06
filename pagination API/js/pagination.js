
let i = 1;

function load(i, e) {
    document.getElementById("table").innerHTML = "";
    fetch(`https://api.instantwebtools.net/v1/passenger?page=${i}&size=${e}`)
        .then(result => result.json())

        .then((json) => {
            console.log(json.totalPages);
            show(json.data)
        })

}
function show(employee) {
    let table = document.getElementById("table");
    let row = "";
    for (let i = 0; i < employee.length; i++) {
        let obj = employee[i];
        console.log(obj);
        row += `<tr>
            <td>${employee[i]._id}</td>
            <td>${employee[i].name}</td>
            <td>${employee[i].trips}</td>
            <td>${employee[i].__v}</td>
             <td>${employee[i].airline.id}</td>
             <td>${employee[i].airline.name}</td>
             <td>${employee[i].airline.country}</td>
             <td>${employee[i].airline.logo}</td>
             <td>${employee[i].airline.established}</td>
             <td>${employee[i].airline.head_quaters}</td>
             <td>${employee[i].airline.slogan}</td>
             <td>${employee[i].airline.website}</td>
        </tr>`
    }
    table.innerHTML += row

}
function mySerach() {
    let filter = document.getElementById('myInput').value.toUpperCase();
    let tbody = document.getElementById("table");
    let tr = tbody.getElementsByTagName('tr');

    for (i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[1].innerText;

        if (td.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}
mySerach();

function next() {


    document.getElementById("first").disabled = false;
    document.getElementById("prev").disabled = false;
    let btnn1 = +document.getElementById("btnn1").innerHTML;
    let btnn2 = +document.getElementById("btnn2").innerHTML;
    let btnn3 = +document.getElementById("btnn3").innerHTML;
    let btnn4 = +document.getElementById("btnn4").innerHTML;
    let btnn5 = +document.getElementById("btnn5").innerHTML;
    document.getElementById("btnn1").innerHTML = btnn1 + 1;
    document.getElementById("btnn2").innerHTML = btnn2 + 1;
    document.getElementById("btnn3").innerHTML = btnn3 + 1;
    document.getElementById("btnn4").innerHTML = btnn4 + 1;
    document.getElementById("btnn5").innerHTML = btnn5 + 1;

    if (document.getElementById("btnn1").style.backgroundColor = "red") {
        let a = document.getElementById("btnn1").innerHTML;
        document.getElementById("btnn2").style = "none";
        document.getElementById("btnn3").style = "none";
        document.getElementById("btnn4").style = "none";
        document.getElementById("btnn5").style = "none";
        load(a, 20);
    }
}

function createbtn() {

    let next = document.getElementById("next");
    next.insertAdjacentHTML("beforebegin", "<button id='btnn1'></button>");
    next.insertAdjacentHTML("beforebegin", "<button id='btnn2'></button>");
    next.insertAdjacentHTML("beforebegin", "<button id='btnn3'></button>");
    next.insertAdjacentHTML("beforebegin", "<button id='btnn4'></button>");
    next.insertAdjacentHTML("beforebegin", "<button id='btnn5'></button>");
    document.getElementById("btnn1").innerHTML = i + 1;
    document.getElementById("btnn2").innerHTML = i + 2;
    document.getElementById("btnn3").innerHTML = i + 3;
    document.getElementById("btnn4").innerHTML = i + 4;
    document.getElementById("btnn5").innerHTML = i + 5;
    console.log(i);
    document.getElementById("btnn1").style.backgroundColor = "red";


}

createbtn();

function prev() {


    let btnn1 = +document.getElementById("btnn1").innerHTML;
    let btnn2 = +document.getElementById("btnn2").innerHTML;
    let btnn3 = +document.getElementById("btnn3").innerHTML;
    let btnn4 = +document.getElementById("btnn4").innerHTML;
    let btnn5 = +document.getElementById("btnn5").innerHTML;

    if (document.getElementById("btnn1").innerHTML > 1) {
        document.getElementById("btnn1").innerHTML = btnn1 - 1;
        document.getElementById("btnn2").innerHTML = btnn2 - 1;
        document.getElementById("btnn3").innerHTML = btnn3 - 1;
        document.getElementById("btnn4").innerHTML = btnn4 - 1;
        document.getElementById("btnn5").innerHTML = btnn5 - 1;

    }

    if (document.getElementById("btnn1").style.backgroundColor = "red") {
        let a = document.getElementById("btnn1").innerHTML;
        document.getElementById("btnn2").style = "none";
        document.getElementById("btnn3").style = "none";
        document.getElementById("btnn4").style = "none";
        document.getElementById("btnn5").style = "none";
        load(a, 20);
    }

}

document.getElementById("btnn1").addEventListener("click", () => {
    let btnText = +document.getElementById("btnn1").innerHTML;
    document.getElementById("btnn1").innerHTML = btnText;
    document.getElementById("btnn2").innerHTML = btnText + 1;
    document.getElementById("btnn3").innerHTML = btnText + 2;
    document.getElementById("btnn4").innerHTML = btnText + 3;
    document.getElementById("btnn5").innerHTML = btnText + 4;
    document.getElementById("first").disabled = false;
    document.getElementById("prev").disabled = false;
    document.getElementById("first").disabled = true;
    document.getElementById("prev").disabled = true;
    load(btnText, 20);

});

document.getElementById("btnn2").addEventListener("click", () => {
    let btnText = +document.getElementById("btnn2").innerHTML;
    document.getElementById("btnn1").innerHTML = btnText;
    document.getElementById("btnn2").innerHTML = btnText + 1;
    document.getElementById("btnn3").innerHTML = btnText + 2;
    document.getElementById("btnn4").innerHTML = btnText + 3;
    document.getElementById("btnn5").innerHTML = btnText + 4;
    document.getElementById("first").disabled = false;
    document.getElementById("prev").disabled = false;
    load(btnText, 20);
});

document.getElementById("btnn3").addEventListener("click", () => {
    let btnText = +document.getElementById("btnn3").innerHTML;
    document.getElementById("btnn1").innerHTML = btnText;
    document.getElementById("btnn2").innerHTML = btnText + 1;
    document.getElementById("btnn3").innerHTML = btnText + 2;
    document.getElementById("btnn4").innerHTML = btnText + 3;
    document.getElementById("btnn5").innerHTML = btnText + 4;
    document.getElementById("first").disabled = false;
    document.getElementById("prev").disabled = false;
    load(btnText, 20);
});

document.getElementById("btnn4").addEventListener("click", () => {
    let btnText = +document.getElementById("btnn4").innerHTML;
    document.getElementById("btnn1").innerHTML = btnText;
    document.getElementById("btnn2").innerHTML = btnText + 1;
    document.getElementById("btnn3").innerHTML = btnText + 2;
    document.getElementById("btnn4").innerHTML = btnText + 3;
    document.getElementById("btnn5").innerHTML = btnText + 4;

    document.getElementById("first").disabled = false;
    document.getElementById("prev").disabled = false;
    load(btnText, 20);
});

document.getElementById("btnn5").addEventListener("click", () => {
    let btnText = +document.getElementById("btnn5").innerHTML;
    document.getElementById("btnn1").innerHTML = btnText;
    document.getElementById("btnn2").innerHTML = btnText + 1;
    document.getElementById("btnn3").innerHTML = btnText + 2;
    document.getElementById("btnn4").innerHTML = btnText + 3;
    document.getElementById("btnn5").innerHTML = btnText + 4;

    document.getElementById("first").disabled = false;
    document.getElementById("prev").disabled = false;
    load(btnText, 20);
});



function first() {
    load(1, 20);
    document.getElementById("first").innerHTML;
    document.getElementById("btnn1").innerHTML = 1;
    document.getElementById("btnn2").innerHTML = 2;
    document.getElementById("btnn3").innerHTML = 3;
    document.getElementById("btnn4").innerHTML = 4;
    document.getElementById("btnn5").innerHTML = 5;


}

function last() {
    load(179, 20);
    document.getElementById("next").disabled = true;
    document.getElementById("last").disabled = true;


    document.getElementById("last").innerHTML;
    document.getElementById("btnn1").innerHTML = 1;
    document.getElementById("btnn2").innerHTML = 2;
    document.getElementById("btnn3").innerHTML = 3;
    document.getElementById("btnn4").innerHTML = 4;
    document.getElementById("btnn5").innerHTML = 5;
}
