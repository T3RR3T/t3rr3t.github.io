(function() {
    // 1. 모든 쿠키를 가져옵니다.
    var allCookies = document.cookie;
    
    // 2. 쿠키 문자열에서 X-Auth-Token을 파싱합니다.
    var tokenName = "X-Auth-Token=";
    var decodedCookie = decodeURIComponent(allCookies);
    var cookieArray = decodedCookie.split(';');
    var tokenValue = null;

    for(var i = 0; i < cookieArray.length; i++) {
        var c = cookieArray[i].trim();
        if (c.indexOf(tokenName) === 0) {
            tokenValue = c.substring(tokenName.length, c.length);
            break;
        }
    }

    // 3. 결과 출력
    if (tokenValue) {
        alert("찾은 토큰: " + tokenValue);
    } else {
        // 쿠키는 존재하지만 값이 안 보인다면 HttpOnly 설정 때문일 확률이 높습니다.
        alert("쿠키에서 토큰을 찾을 수 없습니다. (HttpOnly 가능성)");
        console.log("전체 쿠키 목록:", allCookies);
    }
})();
