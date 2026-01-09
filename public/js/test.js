<script>
  var xhr = new XMLHttpRequest();
  // 1. 현재 페이지의 URL로 GET 요청을 보냅니다.
  xhr.open('GET', window.location.href, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      // 2. 응답 헤더에서 X-Auth-Token을 가져옵니다.
      var token = xhr.getResponseHeader('X-Auth-Token');
      if (token) {
        alert('조회된 토큰: ' + token);
      } else {
        alert('헤더에 토큰이 없거나 접근이 제한되었습니다.');
      }
    }
  };
  xhr.send(null);
</script>
