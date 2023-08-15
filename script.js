let body = document.querySelector('body');
body.style.backgroundColor = 'DarkBlue';

let heading = document.querySelector('h1');
heading.style.textDecoration = 'underline';
heading.style.fontSize = '200%';

let intro = document.querySelector('h2');
intro.innerHTML = "Here are Pokemon's incredible Gen 1 starters!";
intro.style.display = 'flex';
intro.style.justifyContent = 'center';

let image = document.querySelectorAll('img');
for(let i = 0; i < image.length; i++) {
    image[i].style.borderStyle = 'dotted';
    image[i].style.borderColor = 'orange';
    image[i].style.borderWidth = '3px';
}

let bulb = document.getElementById("bulbasaur_container")
bulb.style.backgroundColor = '#388E8E';

let names = document.getElementsByClassName("pokemon_names")
for(let i=0; i < names.length; i++) {
    names[i].style.color = '#FDEEA6';
    names[i].innerHTML += "!"
}

let foot = document.querySelector('footer');
foot.innerHTML = 'All Star Code - DOM Project';
foot.style.textDecoration = 'underline';
foot.style.textDecoration = 'overline';
foot.style.fontSize = '30px';
foot.style.fontSize = 'italic';