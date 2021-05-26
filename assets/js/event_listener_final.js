// -------------------------------------------
// 8. Event Listener
/*
  1. Event Listener (!= DOM Event)
  Tìm hiểu trước:
  2. JSON
  3. Promise
  4. Fetch
  5. DOM Location
  6. Local Storage
  7. Session storage
  8. Coding convention
  9. Best Practices
  10. Mistakes
  11. Performance
*/

// 1. Xử lý nhiều việc khi 1 event xảy ra
// 2. Lắng nghe / Hủy bỏ lẳng nghe

// var btn = document.getElementById('btn');

// console.log(btn);
/// DOM Event: Lắng nghe thông qua gán function vào event thông qua equal operator (=)
// btn.onclick = function (e) {
//   // Xử lý nhiều việc khi 1 event xảy ra
//   // Viec 1
//   console.log('Viec 1');

//   // Viec 2
//   console.log('Viec 2');

//   // Viec 3
//   alert('Viec 3');
// };

// DOM Event: Hủy bỏ lắng nghe sau 3s
// K0 thể hủy bỏ riêng từng công việc bên trong dễ dàng
// setTimeout(() => {
//   btn.onclick = function () {}; // Hủy bỏ lắng nghe (bằng cách gán lại event bằng function trống)
// }, 3000);

//// Event listener: addEventListener('<Event Name>',<function callback>);
// thay cho việc gán onEvent = function như DOM Event
// Event Listener: Lắng Nghe sự kiện
// gọi được nhiều và chạy theo thứ tự
// btn.addEventListener('click', function (e) {
//   console.log('Event 1');
// });

// btn.addEventListener('click', function (e) {
//   console.log('Event 2');
// });

// btn.addEventListener('click', function (e) {
//   console.log('Event 3');
// });

// Sử dụng function bên ngoài
// function viec1() {
//   console.log('Viec 1');
// }

// function viec2() {
//   console.log('Viec 2');
// }

// btn.addEventListener('click', viec1);
// btn.addEventListener('click', viec2);

// Event listener: removeEventListener('<Event Name>',<function callback>);
// Event Listener: Hủy bỏ lắng Nghe sự kiện
// setTimeout(() => {
//   btn.removeEventListener('click', viec1); //remove cụ thể action nào trong Event 1 cách dễ dàng
// }, 3000);

/*
  Khác nhau:
    + DOM Event: gán đi gán lại
    + Event Listener: có thể thêm bớt action 1 cách linh hoạt
  Khi Nào Sử Dụng:
    + DOM Event: Sử dụng trong những case đơn giản khi lắng nghe 1 sự kiện nào đó
    và k0 có nhu cầu gỡ bỏ nó đi (với nhiều action quá thì nên đổi sang Event Listener)
    + Event Listener: Khi nào cần remove 1 hoặc vài action nào đó trong 1 số trường hợp
    để k0 ảnh hưởng đến toàn cục Event
*/
