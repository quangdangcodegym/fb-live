// import Helper, { power } from "./myLib.js";

import power, { sum, power } from "./myLib1.js";

/*
// Lưu ý khi dùng import phải tạo file package.json
{
    "type": "module",
        "scripts": {
        "start": "node module.js"
    }
}

Cách 2: tạo file module.html khi nhúng file module.js thì 
*/
console.log(myLib.power(5, 5));