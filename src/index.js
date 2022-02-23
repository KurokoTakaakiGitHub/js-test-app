/**
 * テンプレート文字列
 */

// const name = "太郎";
// const age = 18;
// const message = `自分の名前は${name}です。年齢は${age}です`;

// console.log(message);

/**
 * アロー関数
 */

// 従来の書き方
const func1 = function (str) {
  return str;
};

console.log(func1("test1"));

const func2 = (str) => {
  return str;
};

console.log(func2("test2"));

const func3 = (str) => str;

console.log(func3("test3"));

/**
 * 分割代入
 */

const myProfile = {
  name: "太郎",
  age: 20
};

const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です`;
console.log(message1);

const { name, age } = myProfile;
const message2 = `名前は${name}です。年齢は${age}です`;
console.log(message2);

/**
 * デフォルト値
 */

const syHello = (name) => console.log(`こんにちは!${name}さん!`);
syHello();
