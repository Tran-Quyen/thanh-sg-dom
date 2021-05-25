/*
  List: For Easy Search
  1.HTML DOM
  2.HTML DOM vs DOM API
  3.Đối tượng Document - Đại diện cho toàn bộ website
  4.Get Element methods
  5.Get Element methods - part 2
  6.Attribute Text & Text Node
*/
//1.HTML DOM
/* Có 3 thành phần
   1. Element (Tag)
   2. Attribute
   3. Text
   *Node
   Cung cấp các quy chuẩn của HTML của W3C và cho chúng ta khả thay đổi trang web
   như thêm,sửa,xóa hay can thiệp vào các element,attribute và text trên trang web
*/

// -------------------------------------------
// 2.HTML DOM vs DOM API
// Javascript cung cấp bộ phương tiện để truy xuất vào HTML DOM
// Browser | Server(NodeJS)
// Browser: HTML -> DOM -> WEB API (API: Application Programing Interface)
// Notification là 1 đối tượng API nằm trong WEB API

// -------------------------------------------
// 3.Đối tượng Document - Đại diện cho toàn bộ website
// console.log(document);
// document.write('Hello Guy!');
// document.write('Hello Guy!');
// document.write('Hello Guy!');

// -------------------------------------------
// 4.Get Element methods
// + ID          +class
// + tag         +CSS selector
// + HTMl collection

// ID: get element by id
// var headingNodeByID = document.getElementById('heading');
// console.log(headingNodeByID); //Nếu null là do sai ID
// console.log({
//   el: headingNodeByID,
// });

// Class: get elements by class name
// var headingNodesByClassName = document.getElementsByClassName('heading'); //trả về HTML collection []
// console.log(headingNodesByClassName); //[] nếu k0 có
// console.log({
//   el: headingNodesByClassName,
// });

// Tag: get elements by tag name
// var headingNodesByTagName = document.getElementsByTagName('p'); //trả về HTML collection []
// console.log(headingNodesByTagName); //[] nếu k0 có
// console.log({
//   el: headingNodesByTagName,
// });

//CSS selector : query selector => lấy về 1 selector thỏa mãn đầu tiên
// var headingNodesQuerySelector = document.querySelector('.box .heading-2:nth-child(2)'); //trả về 1 thằng đầu tiên
// console.log(headingNodesQuerySelector); //null nếu k0 có
// console.log({
//   el: headingNodesQuerySelector,
// });

//query selector all lấy về tất cả selector thỏa mãn
// var headingNodesQuerySelectorAll = document.querySelectorAll('.box .heading-2'); //trả về NodeList []
// console.log(headingNodesQuerySelectorAll); //[] nếu k0 có
// console.log({
//   el: headingNodesQuerySelectorAll,
// });

//Truy cập
// console.log(headingNodesQuerySelectorAll[2]);

//Select form
// console.log(document.forms); //trả về HTML Collection []
// console.log(document.forms[1]); //truy cập vào form thứ 2 trong HTML Collection
// console.log(document.forms.testForm); //truy cập qua form có id là testForm
// console.log(document.forms['form-2']); //nếu dùng dầu - thì xài cách này để truy cập

//Select anchors (a tag) phải đặt name mới xài được
// console.log(document.anchors);
