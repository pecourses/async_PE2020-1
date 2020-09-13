"use strict";
/*
const square = document.getElementById('item');
let deg = 0;

setInterval(rotateFun,1000/60);

function rotateFun(){
    square.style.transform = `rotate(${++deg}deg)`;
}

const button = document.getElementsByTagName('button')[0];
button.onclick = function(){
    alert();
};

*/

/*
 Promise (обещание):
 1 ожидание (?) pending
 2 задача решина resolve (fulfilled)
 3 отклонен rejected
 */
/*
const isIhaveEnoughMoney = true;

//promise
const buyNewCar = new Promise((resolve, reject) => {
  if (isIhaveEnoughMoney) {
    const car = {
      model: "Ford",
      color: "black",
      year: 1969,
      price: 61000,
    };
    resolve(car);
  } else {
    const reason = new Error("Unfortunately");
    reject(reason);
  }
});

async function BuyCar(){
    try{
        console.log('before I know how much money I have');
        let mycar = await buyNewCar;
        console.log('after I know');
    } catch(error){
        console.log(error.message);
    }
}

(async () => {
    await BuyCar();
}) ();
*/
/*
// 1 var
 const promise1 = new Promise(myfun1);

 function myfun1(resolve,reject){
     console.log("Hello");
 }
// 2 var
const promise2 = new Promise(
    function(resolve,reject){
        console.log("Hello");
    }
);
*/

/*
const p1 = Promise.resolve(700);
const p2 = Promise.resolve(true);
const p3 = Promise.resolve("700");
const p4 = Promise.resolve(Symbol());
const p5 = Promise.resolve(null);
const p6 = Promise.resolve(undefined);
const p7 = Promise.resolve({});

async function logData() {
  const promiseValue1 = await p1;
  console.log(promiseValue1);
  const promiseValue2 = await p2;
  console.log(promiseValue2);
}

const p8 = Promise.reject(700);

p8
.then(console.log)
.catch(console.error);

async function logData2(){
    try{
        const promiseValue8 = await p8;
        console.log(promiseValue8);
    } catch(e){
        console.error(e);
    }
}
*/


fetch('../../users.json')
.then(response => response.json())
.then(appendUsersToList)
.catch(console.error);

function appendUsersToList(users){
    const usersListElem = document.getElementById('usersList');
    users.forEach(element => {
        user => {
            usersListElem.appendChild(createCard(user));
        }        
    });
}

function createCard(user){
    const userListItem = document.createElement('li');
    usersListElem.setAttribute('id',user.id);
    usersListElem.classList.add('userListItem');
    const userIm = document.createElement('img');
    userIm.setAttribute('src', user.imageSrc);
    const userImgCont = document.createElement('div');
    userImgCont.classList.add('userIm');
    const userFullNameElem = Document.createElement('h3');
    userFullNameElem.classList.add('userFullname');
    userFullNameElem.innerText=`user.name user.surname`;
    return userListItem;
}

