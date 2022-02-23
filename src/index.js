/**
 * const: let 変数定義
 */

// var 宣言は再宣言ができる
// let 再宣言ができない
// const 上書き、再宣言ができない
// objectや配列の場合は上書きできる

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

// const syHello = (name) => console.log(`こんにちは!${name}さん!`);
// syHello();

const syHello = (name = "test") => console.log(`こんにちは!${name}さん!`);
syHello();

/**
 * スプレッド構文（...）
 */

// 配列の展開
const arry1 = [1, 2];
console.log(arry1);
console.log(...arry1);

const funcSpread = (num1, num2) => console.log(num1 + num2);
funcSpread(arry1[0], arry1[1]);
funcSpread(...arry1);

/**
 * まとめる
 */

const arry2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arry3] = arry2;
console.log(num1);
console.log(num2);
console.log(arry3);

/**
 * 配列コピーと結合
 */

const arry4 = [10, 20];
const arry5 = [30, 40];

const arry6 = [...arry4];
const arry7 = [...arry4, ...arry5];
console.log(arry6);
console.log(arry7);

/**
 * mapやfileter
 */

// 従来はfor
const nameArry = ["田中", "山田", "黒子"];

for (let index = 0; index < nameArry.length; index++) {
  console.log(nameArry[index]);
}

// map forの代替
const nameArry2 = nameArry.map((name) => console.log(name));

// filter：抽出 =>条件式
const numArry = [1, 2, 3, 4, 5];
const newNumArry = numArry.filter((num) => num % 2 === 1);
console.log(newNumArry);

/**
 * 三項演算子(条件 ? true: false)
 */

//三項演算子(条件 ? true: false)
const val1 = 1 < 0 ? "trueです" : "falseです";
console.log(val1);

//数値のときに3桁区切りにしたい
const numTest = 1300;
const formattedNum =
  typeof numTest === "number"
    ? numTest.toLocaleString()
    : "数値を入力してください";
console.log(formattedNum);

//合計金額チェック
const numCheck = (num1, num2) => {
  return num1 + num2 > 100 ? true : false;
};
console.log(numCheck(50, 60));

/**
 * 論理演算子の意味(&& ||)
 */

// || 左がfalseなら右側返す (nullはfalse)
const num = 100;
const fee = num || "金額未設定です";
console.log(fee);

// || 左がtrueなら右側返す (nullはfalse)
const numx = 100;
const feex = numx && "何かが設定されました";
console.log(feex);
