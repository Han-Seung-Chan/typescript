// api url
const url = 'https://jsonplaceholder.typicode.com/users';

// dom
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const address = document.querySelector('#address');

// user data
let user = {};

/**
 * @typedef {object} user
 * @property {string} name
 * @property {string} email
 * @property {string} address
 */

/**
 * @returns {promise<user>}
 */

function fetchUser() {
  return axios.get(url);
}
function startApp() {
  fetchUser()
    .then(function (response) {
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      console.log(user);
      username.innerText = user[0].name;
      email.innerText = user[0].email;
      address.innerText = user[0].address.street;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
