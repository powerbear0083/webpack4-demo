import moment from 'moment'
const getUserModule = () => import(/* webpackChunkName: "usersAPI" */"./common/userAPI");

import './index.sass'
console.log('----------------Hello Webpack', );

// const fancyFunc = () => {
//     return [1, 2];
//   }

//   const [a, b] = fancyFunc()

//   getUsers().then(json => console.log(json))
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    getUserModule().then(({ getUsers }) => {
      getUsers().then(json => console.log(json));
    });
  });