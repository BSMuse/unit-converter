input.addEventListener("input",conversion)

function conversion (e){

    number= e.target.value
    
    meters1.textContent = feet1.textContent = liters1.textContent = gallons1.textContent = kilos1.textContent = pounds1.textContent  = number

    feet2.textContent= (number * 3.28084).toFixed(3)
    meters2.textContent= (number / 3.2808).toFixed(3)
    gallons2.textContent =(number * 0.26417205235815).toFixed(3)
    liters2.textContent =(number * 3.785412).toFixed(3)
    pounds2.textContent =(number * 2.20462).toFixed(3)
    kilos2.textContent =(number * 0.453592).toFixed(3)
}