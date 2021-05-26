// 1.innerHTMl, outerHTMl Property
// var boxElement = document.querySelector('.box');
// console.log(boxElement);

// boxElement.innerText = '<h1>Heading</h1>'; //cái này chỉ thêm text như ở bài trước
// boxElement.innerHTML = `<h1 title="Heading">New Heading</h1>`; //Setter (Thay đổi nội dung html trong thẻ box)
// console.log(document.querySelector('.box h1'));
// console.log(boxElement.innerHTML); //Getter
// boxElement.outerHTML = '<span>Override Box</span>'; //outerHTML ghi đè vào thẻ gọi tới
// // còn innerHTML là thay đổi nội dung hay các thẻ con của thẻ lấy về
// console.log(boxElement); //vì là biến đã khai báo nên đã được lưu vào vùng mới

// -------------------------------------------
// 2.Node Element Properties
// var boxElement = document.querySelector('.box-2');
// console.log([boxElement]); //[<Element>] => Xem các Node Properties
// console.log(boxElement.firstChild); //trả về con đầu tiên (kể cả là text)
// console.log(boxElement.lastChild); //trả về con cuối (kể cả là text)
// console.log(boxElement.querySelector('h3'));
// // nextElementSibling Element kế tiếp
// console.log(boxElement.nextElementSibling);
// console.log(boxElement.nextElementSibling.nextElementSibling); // Thực hiện nhiều công việc 1 lúc
// // nextSibling trả về Node Properties kế tiếp
// console.log(boxElement.nextSibling);
// console.log(boxElement.nextSibling.nextSibling);
// console.log(boxElement.nextSibling.nextSibling.nextSibling);
// console.log(boxElement.nextSibling.nextSibling.nextSibling.nextSibling);

// -------------------------------------------
// 3.Node Style (is Node Element Properties)
// loại css của nó là css inline dùng cho business
// chứ k0 phải để css nên nếu dùng để css hãy dùng css external
// var boxElement = document.querySelector('.box-3');
// console.log(boxElement.style);

// Single Style
// boxElement.style.width = '100px';
// boxElement.style.height = '200px';
// boxElement.style.backgroundColor = 'red';

// Multi Style (Nên xài cách này)
// Object.assign(boxElement.style, {
//   width: '200px',
//   height: '100px',
//   backgroundColor: 'green',
// });

// Get Properties
// console.log(boxElement.style.width);
// console.log(boxElement.style.backgroundColor);

// background-position => backgroundPosition (camelCase)

// -------------------------------------------
// 4.ClassList Properties (is Node Element Properties)
// add - Thêm class vào element
// contains - kiểm tra xem class có ở trong element này hay k0
// remove - xóa bỏ 1 class khỏi element
// toggle - k0 có class thì thêm còn nếu k0 có thì gỡ bỏ

var boxElement = document.querySelector('.box-4');
// console.log(boxElement.classList); //DOMTokenList
// console.log(boxElement.style);
// console.log(boxElement.classList.length); //lấy độ dài của ClassList
// console.log(boxElement.classList[0]); //lấy class đầu tiên
// console.log(boxElement.classList.value); //lấy ra value của class

// add
// boxElement.classList.add('red');
// boxElement.classList.add('red', 'blue', 'green'); //thêm nhiều class

// contains
// console.log(boxElement.classList.contains('red'));
// console.log(boxElement.classList.contains('orange'));

// remove
// Sau 3s remove cho dễ nhìn
// setTimeout(() => {
//   boxElement.classList.remove('red'); //remove here
// }, 3000);
// boxElement.classList.remove('red', 'candy', 'blue'); //xóa nhiều class

// toggle - Ứng dụng làm chức năng bật tắt
// Sau mỗi 1s tự động thêm và bỏ màu đỏ qua class red
// setInterval(() => {
//   boxElement.classList.toggle('red'); //toggle here
// }, 1000);

// -------------------------------------------
// 5.DOM Events (Listener: onEvent())
// 1_Attribute events (inline trên tag)
// => Viết event trên thẻ thông qua attribute gọi tới method

// 2_Assign event using the element node (Hay sử dụng cách này trong thực tế)
// => Viết các chức năng trong 1 file riêng
// và sử dụng element node để tạo sự kiện

// *Note:Bubble Event xày ra khi sử dụng event vào thẻ con bên trong có 1 hay nhiều thẻ cha
// thì event active sẽ nổi lên từ con lên trên các thẻ cha các thẻ cha cũng sẽ được áp sự kiện

// Event Click và Event MouseOver
// MouseEvent: giúp chúng ta lấy thông tin sau khi thực hiện event (Mouse)
// thông qua tham số event viết tắt: e và dùng target để lấy ra Node Element

var h1Element = document.querySelector('.box-5 h1');
// console.log(h1Element);
// h1Element.onclick = function () {
//   console.log(Math.random());
// };

// Nên xài cách (2)
// var h1Element = document.querySelector('.box-5 h1');
// h1Element.onclick = function () {
//   console.log(h1Element);
// };

// Lấy ra thông tin sự kiện thông qua MouseEvent
// event => viết tắt chữ e
// h1Element.onclick = function (event) {
//   console.log(event); //Lấy ra thông tin của event
//   console.log(event.target); //lấy ra Node Element
// };

// Cách nên xài trong TH này là querySelectorAll + Loop (2)
// var h1NodeList = document.querySelectorAll('.box-5 h1');
// for (var i = 0; i < h1NodeList.length; ++i) {
//   h1NodeList[i].onclick = function (e) {
//     console.log(e.target);
//   };
// }
