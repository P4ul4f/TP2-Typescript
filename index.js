// type Person = {
//     name: string;
//     birth_year: string;
//     gender: string;
//     hair_color: string;
//     height: number;
//     homeworld: "https://swapi.py4e.com/api/planets/1/";
//     mass: number;
//     skin_color: string;
//     url: "https://swapi.py4e.com/api/people/1/"
// }
var displayedPeople = [];
function drawTable(people) {
    var tableHTML = '<thead><tr><th><button type="button" class="btn btn-link">Name</button></th><th><button type="button" class="btn btn-link">DDB</button></th><th><button type="button" class="btn btn-link">Gender</button></th><th><button type="button" class="btn btn-link">URL</button></th></tr></thead><tbody>';
    people.forEach(function (p) {
        tableHTML += "<tr><td>".concat(p.name, "</td><td>").concat(p.birth_year, "</td><td>").concat(p.gender, "</td><td>").concat(p.url, "</td></tr>");
    });
    tableHTML += '</tbody>';
    var tableElement = document.querySelector('#tableElement');
    if (tableElement) {
        tableElement.innerHTML = tableHTML;
    }
}
function paginateProducts(page) {
    fetch("https://swapi.py4e.com/api/people/?page=".concat(page))
        .then(function (res) { return res.json(); })
        .then(function (data) {
        displayedPeople = data.results;
        drawTable(data.results);
    });
}
function filterPeople(value) {
    var filteredPeople = displayedPeople.filter(function (p) {
        return p.name.toLowerCase().includes(value.toLowerCase()) ||
            p.birth_year.toLowerCase().includes(value.toLowerCase()) ||
            p.gender.toLowerCase().includes(value.toLowerCase()) ||
            p.url.toLowerCase().includes(value.toLowerCase());
    });
    console.log('filteredPeople', filteredPeople);
}
function sortPeople(prop) {
    if (sortBy[prop]) {
        if (sortBy[prop] === 'asc') {
            sortBy[prop] = 'desc';
        }
        else if (sortBy[prop] = 'desc') {
            sortBy[prop] = null;
        }
        else {
            sortBy[prop] === 'asc';
        }
    }
}
fetch('https://swapi.py4e.com/api/people/')
    .then(function (res) { return res.json(); })
    .then(function (data) {
    displayedPeople = data.results;
    drawTable(data.results);
});
var spinnerElement = document.querySelector('#spinnerContainer');
if (spinnerElement) {
    spinnerElement.style.display = 'none';
}
