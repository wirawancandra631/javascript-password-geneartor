
class PasswordGenerator {
  constructor(inputpassword) {
    this.inputpassword = inputpassword;
    this.word = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "y",
      "z",
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      0,
    ];
  }
  generate() {
    let password = "";
    for (let i = 0; i < 8; i++) {
      let randomNum = Math.floor(Math.random() * this.word.length);
      password += this.word[randomNum];
    }
    this.inputpassword.value = password;
    password = "";
  }
}
const inputResult = document.querySelector("#result-password");
const btnGenerate = document.querySelector("#btn-generate");
const Generator = new PasswordGenerator(inputResult);
btnGenerate.addEventListener("click", function () {
  Generator.generate();
});
