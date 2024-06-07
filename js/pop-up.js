function closePopup() {
    document.getElementById('popup-overlay').style.display = 'none';
}

window.onload = function() {
    document.getElementById('popup-overlay').style.display = 'flex';
}