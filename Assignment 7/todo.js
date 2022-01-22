var knapp = document.getElementById("knapp")    //henter inn kapp fra HTML
var tasks = []                                  //Oppgaver i array

knapp.addEventListener("click", function addtask() { //Henter inn iput og legger den inni lista
    var input = document.getElementById("feild").value

    var li = document.createElement("li")           //Lager et li for lsta
    var ul = document.getElementById("list")        //Henter inn ul listen

    var checkbox = document.createElement("input") //lager en checkbox
    checkbox.setAttribute("type", "checkbox")       //Setter typen til å være checkbox
    var lable = document.createElement("label")    //Lager en lable
    var tekst = document.createTextNode(input)     //Øegger input inni en node

    lable.appendChild(tekst)
    li.appendChild(checkbox)                        //legger checkbox inni li
    li.appendChild(lable)                            //Legegr inn texten  inni li

    ul.insertBefore(li, ul.childNodes[0])           //Legger inn den nyeste oppgaven først

    tasks.push(input + " " + Date.now())            //Legger inn oppgave og tid inni tasks array
    antallFerdig()                                  //Sjekker hvor mange osm er ferdig

    checkbox.addEventListener("change", function () {//vis en checkbox blir endret
        antallFerdig();                             //Skal vi også sjekke hvor mange som er ferdig
    });
})


function antallFerdig() {                   //Sjekker hvor mange checkboxer det er i dokumentet
    let checkliste = document.querySelectorAll("input[type=\"checkbox\"]")
    let antall  = 0                         //Setter antall til null

    for (i of checkliste) {                 //Går igjennom hele sjekklista
        if (i.checked == true) {
            antall++                        //sjekker antall oppgaver gjort
        }
    }
                                //Skriver ut hvor mange oppgaver som er gjort, og hvor mange som er igjen
    document.getElementById("ferdig").innerHTML = (antall + "/" + checkliste.length + " Ferdig")
}