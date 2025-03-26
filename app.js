let card = document.querySelector('.card');
let toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
    card.classList.toggle('active');
})