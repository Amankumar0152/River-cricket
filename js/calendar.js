const calendar = document.getElementById('calendar');
const eventDateInput = document.getElementById('event-date');
const eventNameInput = document.getElementById('event-name');

const today = new Date();
const events = {};

function buildCalendar() {
    const month = today.getMonth();
    const year = today.getFullYear();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();

    calendar.innerHTML = '';

    for (let i = 1; i <= daysInMonth; i++) {
        const day = document.createElement('div');
        day.className = 'day';
        day.innerText = i;

        const currentDate = new Date(year, month, i);
        if (i === today.getDate()) {
            day.classList.add('today');
        }

        const dateString = currentDate.toISOString().split('T')[0];
        if (events[dateString]) {
            events[dateString].forEach(event => {
                const eventElement = document.createElement('span');
                eventElement.className = 'event';
                eventElement.innerText = event;
                day.appendChild(eventElement);
            });
        }

        calendar.appendChild(day);
    }
}

function addEvent() {
    const eventDate = eventDateInput.value;
    const eventName = eventNameInput.value;

    if (!eventDate || !eventName) {
        alert('Please fill out both fields');
        return;
    }

    if (!events[eventDate]) {
        events[eventDate] = [];
    }

    events[eventDate].push(eventName);
    buildCalendar();
    eventDateInput.value = '';
    eventNameInput.value = '';
}

buildCalendar();
