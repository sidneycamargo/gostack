axios.get('https://api.github.com/users/diego3g')


/*
var minhaPromisse = function() {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users/diego3g');
    xhr.send(null);

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject('Erro na requisição');
        }
      }
    }
  });
}

minhaPromisse()
*/

.then(function(response) {
    console.log(response.data.avatar_url);
  })

  .catch(function(error) {
    console.warn(error);
  })
