const inputElement = document.querySelector('#app input');
const buttonElement = document.querySelector('#app button');

inputElement.value = '';

buttonElement.onclick = searchUserData;



function searchUserData() {
  //userName = inputElement.nodeValue;

  console.log(inputElement);
}
