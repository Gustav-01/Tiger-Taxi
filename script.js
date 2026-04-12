

const form = document.getElementById('bookingForm');
form.addEventListener('submit', (e) => loadResults(e));

const cancelBookingBtn = document.getElementById('cancel');
const confirmBookingBtn = document.getElementById('confirm');

cancelBookingBtn.addEventListener('click', (e) => cancelBooking(e));
confirmBookingBtn.addEventListener('click', (e) => confirmBooking(e));

function loadResults(e) {
    e.preventDefault();

    const submitBtn = document.getElementById('submit');
    submitBtn.disabled = true;

    const resultBox = document.getElementsByClassName('drivers')[0];
    resultBox.style.display = 'block';

    document.querySelectorAll('.taxi').forEach( taxi => {taxi.style.display = 'block'});

    const plusBtn = document.getElementById('plus');
    const minusBtn = document.getElementById('minus');
    const filterBtn = document.getElementById('filter');

    plusBtn.style.top = '27%';
    minusBtn.style.top = '36%';
    filterBtn.style.display = 'block';
}

function cancelBooking(e) {
    const submitBtn = document.getElementById('submit');
    submitBtn.disabled = false;

    const resultBox = document.getElementsByClassName('drivers')[0];
    resultBox.style.display = 'none';
    const plusBtn = document.getElementById('plus');
    const minusBtn = document.getElementById('minus');
    const filterBtn = document.getElementById('filter');

    plusBtn.style.top = '83%';
    minusBtn.style.top = '92%';
    filterBtn.style.display = 'none';
}

function confirmBooking(e) {

    const dialog = document.createElement('dialog');
    dialog.closedBy = 'any';
    dialog.className = 'bookingConfirmation';

    const img = document.createElement('img');
    img.src = 'assets/checkmark.png';
    img.alt = 'Grön checkbock';
    dialog.appendChild(img);

    const h2 = document.createElement('h2');
    h2.textContent = 'Bokning bekräftad'
    dialog.appendChild(h2);

    const p = document.createElement('p');
    p.textContent = 'Information om bokningen';
    dialog.appendChild(p);

    const doneBtn = document.createElement('button');
    doneBtn.textContent = 'Klar';
    dialog.appendChild(doneBtn);

    document.getElementsByTagName('main')[0].append(dialog);

    dialog.showModal();
}