const ul = document.querySelector('ul');
const btn = document.querySelector('button');

function getRandom(max) {
    return Math.round(Math.random() * max);
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const frag = document.createDocumentFragment();
    const render = () => {
        const newDiv = document.createElement('div');
        color(newDiv);
        frag.append(newDiv);
    };
    render();

    ul.append(frag);
});
const divs = document.querySelectorAll('div');
for (const div of divs) {
    color(div);
}

function color(div) {
    setInterval(() => {
        div.style.backgroundColor = `rgb(${getRandom(255)}, 
        ${getRandom(255)},
         ${getRandom(255)})`;
    }, 1000);
}
