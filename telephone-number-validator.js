/*
Code developed by William Garcia
Website: https://www.williamgar.com
LinkedIn: https://www.linkedin.com/in/williamgar
GitHub: https://github.com/William-Gar
*/

const telephoneCheck = (str) => {
  let regExp = /^(1\s?)?(\d{3}|\(\d{3}\))(\s|-)?\d{3}(-?|\s?)(\d{4})$/g;
  let test = regExp.test(str);

  return test;

}

console.log(telephoneCheck("2(757)622-7382"));
console.log(telephoneCheck("0 (757) 622-7382"));
console.log(telephoneCheck("(555)5(55?)-5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("1 555-555-5555"));
