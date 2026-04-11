

const form = document.getElementById('bookingForm');
form.addEventListener('submit', (e) => loadResults(e));

const cancelBookingBtn = document.getElementById('cancel');
const confirmBookingBtn = document.getElementById('confirm');

cancelBookingBtn.addEventListener('click', (e) => cancelBookingBtn(e));
confirmBookingBtn.addEventListener('click', (e) => confirmBooking(e));

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

function cancelBooking(e) {

}

function confirmBooking(e) {
    const dialog = document.createElement('dialog');

    //Todo fill out dialog
}