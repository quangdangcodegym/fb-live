/*

https://kungfutech.edu.vn/bai-viet/javascript/toan-tu-nullish-coalescing-trong-javascript#%E1%BB%A9ng-d%E1%BB%A5ng-c%E1%BB%A7a-to%C3%A1n-t%E1%BB%AD-nullish-coalescing
Trong trường hợp này nó đang được sử dụng để gán giá trị mặc định. 
Nếu a có giá trị falsy (ví dụ: undefined, null, 0, false, "",...), 
thì biểu thức a || "default value" sẽ trả về "default value" và gán vào a. 
Ngược lại, nếu a có giá trị truthy, thì giá trị của a sẽ được giữ nguyên. 
Sau đó, giá trị của a được in ra bằng console.log(a).

let a;
a = a || "default value";
console.log(a);


###
Trong đoạn mã JavaScript bạn đã cung cấp, có sử dụng toán tử ??, 
còn được gọi là "nullish coalescing operator". 
Đây là một phần của chuẩn ECMAScript 2020 (ES11).
Toán tử ?? được sử dụng để kiểm tra giá trị của biến hoặc biểu thức và 
trả về giá trị bên phải của nó nếu giá trị bên trái là null hoặc undefined. 
Nếu giá trị bên trái không phải là null hoặc undefined, thì toán tử trả về giá trị bên trái.

let name;               //null hoặc undefined. 
console.log(name ?? "Người dùng ẩn danh");

*/



