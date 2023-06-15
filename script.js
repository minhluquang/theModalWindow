'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//Open modal function
const openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

//Close modal function
const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

//Listen event of btn
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);
}

//Closem modal event
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//Press "ESC" to close modal
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})