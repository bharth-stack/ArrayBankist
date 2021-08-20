"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const display = function (data) {
  containerMovements.innerHTML = "";
  data.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const addData = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}€</div>
  </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", addData);
  });
};


const userName = accnts => {
  accnts.forEach(acc => {
    acc.userName = acc.owner
      .toLowerCase()
      .split(" ")
      .map(name => {
        return name[0];
      })
      .join("");
  });
};
userName(accounts);
const Withdrawls = data => {
  const data1 = data.filter(money => {
    return money < 0;
  });
  return data1;
};


const deposit = data => {
  const data1 = data.filter(money => {
    return money > 0;
  });
  return data1;
};
const balance = data => {
 data.balance = data.movements.reduce((startingData, conData) => {
    return startingData + conData;
  }, 0);

  labelBalance.textContent = `${data.balance}€`;
  return data.balance;
};
const calcDisplaySummary = dataACC => {
  const incomes = dataACC.movements
    .filter(data1 => {
      return data1 > 0;
    })
    .reduce((accu, data3) => {
      return accu + data3;
    }, 0);
  labelSumIn.textContent = `${incomes}€`;
  const used = dataACC.movements
    .filter(data1 => {
      return data1 < 0;
    })
    .reduce((accu, data1) => {
      return accu + data1;
    }, 0);
  labelSumOut.textContent = `${Math.abs(used)}€`;
  const interest = dataACC.movements
    .filter(data1 => {
      return data1 > 0;
    })
    .map(data => {
      return (data * dataACC.interestRate ) / 100;
    })
    .filter(data1 => {
      return data1 >= 1;
    })
    .reduce((accu, data) => {
      return accu + data;
    }, 0);
  labelSumInterest.textContent = `${interest}€`;
};
const update=(acco)=>{
  display(acco.movements);
  Withdrawls(acco.movements);
  deposit(acco.movements);
  calcDisplaySummary(acco);
  balance(acco);

}
let acco;
btnLogin.addEventListener('click', (e)=>{
  e.preventDefault();
  acco=accounts.find((data)=>{
    return data.userName===inputLoginUsername.value
  });
  if(acco.pin===Number(inputLoginPin.value)){
    inputLoginUsername.value=inputLoginPin.value="";
    inputLoginPin.blur();
      containerApp.style.opacity=100;
      labelWelcome.textContent=`Welcome back,${acco.owner.split(' ')[0]}`
    update(acco);
   }
})
btnTransfer.addEventListener('click',(e)=>{
  e.preventDefault();
  const amount=Number(inputTransferAmount.value);
  const transfer=accounts.find((data)=>{
   return data.userName===inputTransferTo.value
  });
  if(amount>0 && transfer&&acco.balance>=amount&&transfer.userName!==acco.userName){
    inputTransferAmount.value=inputTransferTo.value="";
   acco.movements.push(-amount);
   transfer.movements.push(amount);
   update(acco);
  }
})







// for(const data of accounts){
//   if(data.owner==="Jessica Davis"){
//     console.log(data);
//   }
// }
// const eurISD = 1.1;
// const moi = account1.movements
//   .filter(data => data > 0)
//   .map(data => {
//     return data * eurISD;
//   })
//   .reduce((accu, data) => {
//     return accu + data;
//   }, 0);
// console.log(moi);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// //slice methods

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// console.log(array.slice(2));
// console.log(array.slice(4, 8));
// console.log(array.slice(-6));
// console.log(array.slice(-1));
// console.log(array.slice(2, -6));

// //Splice

// // console.log(array.splice(6));
// // console.log(array.splice(7));
// // console.log(array);
// console.log(array.splice(2, 3));

// // REverse

// const array_1 = [5, 4, 3, 2, 1, 0];
// console.log(array_1.reverse());
// console.log(array_1);

// //concact
// const array_alpha = ['z', 'y', 'x', 'w', 'v'];
// console.log(array_alpha.concat(array_1));
// console.log(array_alpha);

// // join
// console.log(array_alpha.join(','));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const [key, data] of movements.entries()) {
//   if (data > 0) {
//     console.log(`you deposited ${key} ${data}$`);
//   } else if (data < 0) {
//     console.log(`you withdrawn ${key} ${Math.abs(data)}$`);
//   }
// }
// console.log('👉🏻👉🏻👉🏻👉🏻👉🏻👉🏻👉🏻👉🏻👉🏻👉🏻👉🏻👉🏻👉🏻👉🏻👉🏻👉🏻👉🏻👉🏻👉🏻👉🏻');
// movements.forEach(function (data, index, value) {
//   if (data > 0) {
//     console.log(`you deposited ${index} ${data}$`);
//   } else if (data < 0) {
//     console.log(`you withdrawn ${index} ${Math.abs(data)}$`);
//   }
// });

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
// currencies.forEach(function (data, index) {
//   console.log(`${index}: ${data}`);
// });
// const setData = new Set([
//   1, 2, 3, 4, 1, 2, 3, 4, 1, 3, 8, 68867, 757, 46, 3, 5, 2, 7, 5, 58,
// ]);
// setData.forEach(function (data, index) {
//   console.log(data, index);
// });

// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
// const dogsData = {
//   Julia_sdata1: [3, 5, 2, 12, 7],
//   Kate_sdata1: [4, 1, 15, 8, 3],
//   Julia_sdata2: [9, 16, 6, 8, 3],
//   Kate_sdata2: [10, 5, 6, 1, 4],
// };
// const checkDogs = data => {
//   data.forEach((age, i) => {
//     if (age < 3) {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//     } else if (age >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
//     }
//   });
// };
// const arrayChanger = (julia, kate) => {
//   const shallowArray = julia.slice(1, -2);
//   console.log(julia);
//   const modifiedArray = shallowArray.concat(kate);
//   checkDogs(modifiedArray);
// };
// arrayChanger(dogsData.Julia_sdata1, dogsData.Kate_sdata1);
// console.log('🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶');
// arrayChanger(dogsData.Julia_sdata2, dogsData.Kate_sdata2);

// const cususd = 1.1;
// const money = account1.movements.map(buck => {
//   return buck * cususd;
// });
// money.map(buck => {
//   console.log(buck);
// });

// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
// const dogData = {
//   DATA1: [5, 2, 4, 1, 15, 8, 3],
//   DATA2: [16, 6, 10, 5, 6, 1, 4],
// };

// const calcAverageHumanAge = data => {
//   const dogAge = data.map(age => {
//     return age > 2 ? age * 4 + 16 : age * 2;
//   });
//   const dogAge2 = dogAge.filter(age => {
//     return age >= 18;
//   });
//   const avg = dogAge2.reduce((acc, age) => {
//     return (acc = acc + age);
//   }, 0);
//   return avg / dogAge2.length;
// };
// console.log(dogData.DATA1);
// console.log(calcAverageHumanAge(dogData.DATA1));
// console.log(calcAverageHumanAge(dogData.DATA2));

// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
// const dogData = {
//   DATA1: [5, 2, 4, 1, 15, 8, 3],
//   DATA2: [16, 6, 10, 5, 6, 1, 4],
// };
// const calcAverageHumanAge = data => {
// let aveg=0;
//   const dogAge = data
//     .map(age => {
//       return age > 2 ? age * 4 + 16 : age * 2;
//     })
//     .filter(age => {
//       return age >= 18;
//     })
//     .reduce((acc, age) => {      
//       aveg++;
//       return acc=acc+age;    
//     }, 0);
//   return dogAge/aveg;
// };

// console.log(dogData.DATA1);
// console.log(calcAverageHumanAge(dogData.DATA1));
// console.log(calcAverageHumanAge(dogData.DATA2));
