function reqListener(){
var data = (this.responseText);
console.log(data.name);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener)
oReq.open("GET", 'https://swapi.co/api/people/1/' );
oReq.send();
