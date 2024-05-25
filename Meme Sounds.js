
// script.js
document.addEventListener('DOMContentLoaded', function() {
    var notification = document.getElementById('notification');
    notification.classList.add('show');
});

document.getElementById('closeNotification').addEventListener('click', function() {
    var notification = document.getElementById('notification');
    notification.classList.remove('show');
});


