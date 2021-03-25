const btn = document.getElementById('btn');

const p = document.getElementById('p');
p.innerText = 0;

btn.addEventListener('click', () => p.innerText = parseInt(p.innerText) + 1);