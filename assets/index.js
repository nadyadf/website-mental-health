const quotes = [
    "<q>Make a peace of mind a priority.</q>",
    "<q>If you want to be successful, you must respect one rule - Never lie to yourself. </q> <br>  -Paulo Coelho",
    "<q>Where the head goes, the body follows. Perception precedes action. Right action follows the right perspective.</q>",
    "<q>Never explain, Your friends won't need it. And haters will continue to hate. </q> <br>  -Paulo Coelho",
    "<q>Be a good person, but don't waste your time proving it.</q>"
];

function rndText() {
    const rannum = Math.floor(Math.random()*quotes.length);
    document.getElementById('quotes').innerHTML = quotes[rannum];
}

onload = function() { rndText();  }