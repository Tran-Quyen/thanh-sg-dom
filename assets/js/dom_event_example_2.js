// -------------------------------------------
// 7. DOM Event
// 1.preventDefault
// 2.stopPropagation - ngăn chặn hành vi lan truyền (nổi bọt)

// Có thể dùng document.anchors nhưng thẻ a phải có name mới dùng được
// var aElements = document.links;
// console.log(aElements);

// Check href
// for (var i = 0; i < aElements.length; ++i) {
//   aElements[i].onclick = function (e) {
//     // Nếu href bắt đầu bằng chuỗi trong ngoặc
//     if (e.target.href.startsWith('https://www.codecademy.com/')) {
//       e.preventDefault(); //thì bỏ đi hành vi mặc định của browser trên html
//     }
//   };
// }

// Sử dụng trong thanh tìm kiếm (preventDefault)
// var ulElement = document.querySelector('ul');
// ulElement.onmousedown = function (e) {
//   e.preventDefault();
// };
// ulElement.onclick = function (e) {
//   console.log(e.target);
// };

// stopPropagation
// document.querySelector('div').onclick = function () {
//   console.log('DIV');
// };

// Xử lý hiện tượng nổi bọt bằng stopPropagation
// document.querySelector('button').onclick = function (e) {
//   e.stopPropagation(); //giúp event tránh nổi bọt hay lan truyền
//   console.log('Click Me!');
// };
