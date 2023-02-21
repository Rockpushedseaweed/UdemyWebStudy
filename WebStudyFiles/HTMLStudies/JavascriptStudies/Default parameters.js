Default parameters

function rollie(numSides){
    if(numSides === undefined){
        numSides = 6;
    }
    return Math.floor(Math.random()*numSides) + 1 
}


function rollie(numSides = 6){
    return Math.floor(Math.random()*numSides) + 1 
}

function greet(msg, person){
    console.log(`${msg}, ${person}!`)
}