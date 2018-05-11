var people = document.getElementById('peopleResult');
var people2 = document.getElementById('peopleResult2');
var people3 = document.getElementById('peopleResult3');

function reqListener(){
var data = JSON.parse(this.responseText);
console.log(data.name);
people.innerHTML = data.name;
};

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", 'https://swapi.co/api/people/1/');
oReq.send();

function reqListener2(){
    var data2 = JSON.parse(this.responseText);
    console.log(data2.name);
    people2.innerHTML = data2.name;
    };

    var oReq2 = new XMLHttpRequest();
oReq2.addEventListener("load", reqListener2);
oReq2.open("GET", 'https://swapi.co/api/people/4/');
oReq2.send();

function reqListener3(){
    var data3 = JSON.parse(this.responseText);
    console.log(data3.name);
    people3.innerHTML = data3.name;
    };

    var oReq3 = new XMLHttpRequest();
oReq3.addEventListener("load", reqListener3);
oReq3.open("GET", 'https://swapi.co/api/people/5/');
oReq3.send();