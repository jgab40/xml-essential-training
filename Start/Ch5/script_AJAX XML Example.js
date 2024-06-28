// show album information when the user clicks on a CD
const xhttp = new XMLHttpRequest();
let cd;
xhttp.onload = function () {
    const xmlDoc = xhttp.responseXML;
    cd = xmlDoc.getElementsByTagName("CD");
    loadDoc();
}
xhttp.open("GET", "cd_catalog.xml");
xhttp.send();
function loadDoc() {
    let table = `<tr><th>ARTIST</th><th>TITLE</th></tr>`;
    for (let i = 0; i < cd.length; i++) {
        table += `<tr onclick="displayCD(${i})"><td>`;
        table += `${cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue}`;
        table += `</td><td>`;
        table += `${cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue}`;
        table += `${cd[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue}`;
        table += `</td></tr>`;  
    }
    console.log(table);
    document.getElementById("demo").innerHTML = table;
}
function displayCD(i) {
    let artistText;
    let titleText;
    let yearText;
    artistText = `Artist: ${cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue}`;
    titleText = `Title: ${cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue}`;
    yearText = `Year: ${cd[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue}`;

    console.log(`${artistText}<br>
        ${titleText}<br>
        ${yearText}`);
    document.getElementById("showCD").innerHTML = `${artistText}<br>
        ${titleText}<br>
        ${yearText}`;
}