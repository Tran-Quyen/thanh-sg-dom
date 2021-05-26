// -------------------------------------------
// 6.DOM Events Example (Listener: onEvent())
// 1. Input / select
// 2. Key up / down
// keyup là sau khi ấn và nhấc khỏi phím sẽ được active
// keydown thì khi ấn xuống là kích hoạt
// keypress: active khi giữ nút

// var inputElement = document.querySelector('input[type="text"]');
// console.log(inputElement);

// var inputValue;

// oninput nhập đến đâu lấy đến đấy
// onchange là khi có sự thay đổi và đưa focus ra ngoài ô in put
// inputElement.onchange = function (e) {
//   inputValue = e.target.value;
//   console.log(inputValue);
// };

// onkeyup/down
// inputElement.onkeyup = function (e) {
//   console.log(e.which); //hiện ra mã ASCII của phím vừa ấn

//   switch (e.which) {
//     case 27: //ESC
//       console.log('Exit');
//       break;
//   }
// };

// Với checkbox
// var inputCheckBoxElement = document.querySelector('input[type="checkbox"]');
// console.log(inputCheckBoxElement);

// var isChecked;

// inputCheckBoxElement.onchange = function (e) {
//   isChecked = e.target.checked;
//   console.log(isChecked);
// };

// Với Select
// var selectElement = document.querySelector('select');
// console.log(selectElement);

// var selectValue;

// selectElement.onchange = function (e) {
//   selectValue = e.target.value;
//   console.log(selectValue);
// };

// Listen Document Object - onkeypress: active khi giữ nút
// document.onkeypress = function (e) {
//   switch (e.which) {
//     case 27:
//       console.log('EXIT');
//       break;
//     case 13:
//       console.log('SEND CHAT');
//       break;
//   }
// };
