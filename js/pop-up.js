document.getElementById('close-button').addEventListener('click', function() {
    document.getElementById('message-overlay').style.display = 'none';
    document.cookie = "seenMessage=true; max-age=" + 60*60*24*365 + "; path=/";
});

function getCookie(name) {
    let cookieArr = document.cookie.split(";");
    for (let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");
        if (name === cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

if (getCookie("seenMessage")) {
    document.getElementById('message-overlay').style.display = 'none';
}