

const form = document.getElementById('bookingForm');
form.addEventListener('submit', (e) => loadResults(e));

function loadResults(e) {
    e.preventDefault();

    const resultBox = document.getElementsByClassName('drivers')[0];
    resultBox.style.display = 'block';

    const plusBtn = document.getElementById('plus');
    const minusBtn = document.getElementById('minus');
    const filterBtn = document.getElementById('filter');

    plusBtn.style.top = '33%';
    minusBtn.style.top = '42%';
    filterBtn.style.display = 'block';
}