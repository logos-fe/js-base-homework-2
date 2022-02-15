// 1
// const num = prompt('Your number');

// if (num % 2 === 0) {
//   alert('Even number');
// } else {
//   alert('Odd number');
// }

// 2
// const mess = prompt('Number of days');

// if (mess > 7) {
//   alert(40 * mess - 50);
// } else if (mess > 3 < 7) {
//   alert(40 * mess - 20);
// } else {
//   40 * mess;
// }

// 3
const year = prompt('Year');

if (year < 0) {
  alert('Wrong year');
} else {
  alert(Math.round(year / 100 + 1));
}
