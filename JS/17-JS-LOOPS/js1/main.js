let artikel = [
    `banane`,
    `brot`,
    `Reis`,
    `Sirup`,
];

// wenn ein artikelCookie gesetzt ist
if(typeof cookie.get(`artikelCookie`) != `undefined`) {
    //lies die Werte darin
let cookieValue = cookie.get(`artikelCookie`);
// mach daraus ein Array (trenne anhang der Beistriche die im String vorkommen)

let artikelArray = cookieValue.split (`,`);

console.log(artikelArray);

artikel = artikelArray
}

for (let i = 0; i < 4; i++) {
   // console.log ( `nr.` + (i+i))
    //console.log(`Nr. {i+i}`)
    // console.log(artikel[i]);
}



function createHtml() {
   // leeren String erzeugen
    let html = ``;
    //Gewünschtes Ergebnis: html = html + `<li>` + `banane` + `</li>`;

    // HTML dynamisch erzeugen

    artikel.forEach (element => {
        // console.log(element);
    
        html = html + `<li><input type="checkbox" value="gekauft">` + element + `</li>`;
    });

    document.getElementById(`ek_list`).innerHTML = html;
}

// beim Laden gleich einmal ausführen
createHtml();


document.getElementById(`new_element`).addEventListener(`keydown`, function(event) {
    // console.log(event.key)

    if(event.key == `Enter` && document.getElementById(`new_element`).value != ``) {
       // console.log(`füge das neue Element dazu und leere das Feld`);

       console.log(document.getElementById(`new_element`).value);
       
       artikel.push(document.getElementById(`new_element`).value);

       document.getElementById(`new_element`).value = ``;

       createHtml();

    }
} ) ;
