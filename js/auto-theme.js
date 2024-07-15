// Function to get the current time in India
function getIndiaTime() {
    const indiaTimeOffset = 5.5 * 60 * 60 * 1000; // IST is UTC+5:30
    const utcTime = new Date().getTime() + (new Date().getTimezoneOffset() * 60000);
    return new Date(utcTime + indiaTimeOffset);
}

// Function to get a cookie by name
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// Function to set a cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

// Function to apply the appropriate mode
function applyMode() {
    const currentHour = getIndiaTime().getHours();
    const savedMode = getCookie('mode');

    if (savedMode) {
        document.body.classList.add(savedMode);
    } else {
        if (currentHour >= 18 || currentHour < 6) {
            document.body.classList.add('dark-mode');
            setCookie('mode', 'dark-mode', 1);
        } else {
            document.body.classList.add('day-mode');
            setCookie('mode', 'day-mode', 1);
        }
    }
}

// Function to switch modes and update the cookie
function switchMode() {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('day-mode');
        setCookie('mode', 'day-mode', 1);
    } else {
        document.body.classList.remove('day-mode');
        document.body.classList.add('dark-mode');
        setCookie('mode', 'dark-mode', 1);
    }
}

// Apply the mode when the page loads
applyMode();
