<script>
  var xhr = new XMLHttpRequest();
  xhr.open('GET', window.location.href, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      var token = xhr.getResponseHeader('X-Auth-Token');
      if (token) {
        alert(token);
      }
    }
  };
  xhr.send(null);
</script>