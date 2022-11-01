function increaseBalance(x, y) {
  x = x + y;
  return x;
}

//не передана переменная y
function decreaseBalance(x, y) {
x = x - y;
return x;
}

//удалили недостижимый код, вызываем ниже
function divideBalanceByAccounts(x, y) {
  x = x / y;
  return x;
}

function getRestAfterDivision(x, y) {
  x = x % y;
  return x;
}

console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2)); // лишнее значение 4000, передали только 2 параметра x и y
console.log(getRestAfterDivision(7000, 3));
