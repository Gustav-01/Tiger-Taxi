

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

    console.log('Popup confirmation');
    
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