(function() {
    var token = document.cookie.split('; ').find(row => row.startsWith('X-Auth-Token='));
    if (token) {
        alert("Token: " + token.split('=')[1]);
    } else {
        alert("Cookie not found or HttpOnly");
    }
})();
