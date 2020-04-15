function checaIdade(age) {
  return new Promise(function(resolve, reject) {
    if (age >= 18) {
      resolve('Ok');
    } else {
      reject('menor');
    }
  });
} 

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

inputElement  = document.querySelector('#app input');
buttonElement = document.querySelector("#app button");
buttonElement.onclick = confirmaIdade;

function confirmaIdade() {

  const age = inputElement.value;

  checaIdade(age) 
  .then(function(response) {
      console.log('Maior ou igual a 18');
    })

    .catch(function(error) {
      console.warn('Menor que 18');
    });
}
