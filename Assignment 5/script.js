/* Part 2 */
console.log('PART 2')

for (i = 1; i <= 20; i++) { //Skriver ut tall fra 1 til 20
    console.log(i)
}

/* Part 3 */
console.log('PART 3')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for (i = 0; i < numbers.length; i++) { //Går igjennom numbers arry
    if (numbers[i]%3 === 0 && numbers[i]%5 === 0) { //hvis den er 15
        console.log("eplekake")                     //Skriver den eplekake
    }else if (numbers[i]%3 === 0) {                 //Skriver eple, hvis delelig på 3
        console.log("eple")
    }else if (numbers[i]%5 === 0) {                 //Skriver kake, hvis delelig på 5
        console.log("kake")
    } else {
        console.log(numbers[i])                     //Elers så skrives nummer
    }
}
/* Part 4 */

document.getElementById('title').innerHTML = "Hello Javascript"; //Skriver Hello Javascript

/* Part 5 */
function changeDisplay () { //Fjerner elementet fra siden
    document.getElementById('magic').style.display = "none"
}

function changeVisibility () { //sjuler elementet fra siden
    document.getElementById('magic').style.visibility = "hidden"
    document.getElementById('magic').style.display = "block"
}

function reset () { //Resetter elementet, slik at det blir synlig
    document.getElementById('magic').style.visibility = "visible"
    document.getElementById('magic').style.display = "block"
}

/* Part 6 */
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];
    //Går igjennom array technologies
for (let i = 0; i < technologies.length; i++) {
    let tech = technologies[i]                  //Legger inn teknologi i tech
    let ul = document.getElementById('tech')    //Henter ut ul
    let li = document.createElement('li')       //Lager et nytt 'li' element
    li.appendChild(document.createTextNode(tech))//Legger inn teknologien i listen
    ul.appendChild(li)                           //Legger den inni ul
}

