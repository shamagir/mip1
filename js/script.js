function classToggle() {
    document.querySelector('#unroll').classList.toggle('hidden');
}
document.querySelector('#unroll').addEventListener('click', classToggle);
document.querySelector('#roll').addEventListener('click', classToggle);