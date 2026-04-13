
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

    document.querySelectorAll('.taxi').forEach(taxi => { taxi.style.display = 'block' });

    const plusBtn = document.getElementById('plus');
    const minusBtn = document.getElementById('minus');
    const filterBtn = document.getElementById('filter');

    plusBtn.style.top = '29%';
    minusBtn.style.top = '37%';
    filterBtn.style.display = 'block';
}

function cancelBooking(e) {
    const submitBtn = document.getElementById('submit');
    submitBtn.disabled = false;

    document.querySelectorAll('.taxi').forEach(taxi => { taxi.style.display = 'none' });

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

    const container = document.createElement('div');
    dialog.appendChild(container);

    const p = document.createElement('p');
    p.textContent = 'Namn: Bosse Bredsladd';
    container.appendChild(p);

    const p2 = document.createElement('p');
    p2.textContent = 'Avreseplats: Sjupundsgatan 1';
    container.appendChild(p2);

    const p3 = document.createElement('p');
    p3.textContent = 'Destination: Lärdomgsatan 3';
    container.appendChild(p3);

    const p4 = document.createElement('p');
    p4.textContent = 'Antal passagerare: 4';
    container.appendChild(p4);

    const p5 = document.createElement('p');
    p5.textContent = 'Typ av bil: Lyx';
    container.appendChild(p5);

    const p6 = document.createElement('p');
    p6.textContent = 'Övrig information: Sen till tåget..';
    container.appendChild(p6);

    const doneBtn = document.createElement('button');
    doneBtn.textContent = 'Klar';
    dialog.appendChild(doneBtn);

    document.getElementsByTagName('main')[0].append(dialog);

    dialog.showModal();

    doneBtn.addEventListener('click', () => {
        dialog.close();
        location.reload();
    });

    dialog.addEventListener('cancel', (e) => {
        e.preventDefault();
    });

    dialog.addEventListener('click', (e) => {
        const rect = dialog.getBoundingClientRect();

        if (
            !(e.clientX >= rect.left &&
                e.clientX <= rect.right &&
                e.clientY >= rect.top &&
                e.clientY <= rect.bottom)
        ) {
            e.stopPropagation();
        }
    });
}