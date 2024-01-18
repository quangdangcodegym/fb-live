/*
function test() {
  setTimeout(() => {
    console.log(1); // 1h tiếng
  }, 3000);

  // setInterval(() =>
  console.log(2);
  console.log(3);
}

test();


function httpGetAsync(theUrl, callback) {
  // GỌI API -> ajax , axios, fetch
  var xmlHttpRequest = new XMLHttpRequest();
  xmlHttpRequest.onreadystatechange = function () {
    if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
      callback(xmlHttpRequest);
    }
  };
  xmlHttpRequest.open("GET", theUrl, true);
  xmlHttpRequest.send();
}
// tham số thứ 2: là 1 callback phải là 1 function && phải được thực thi
httpGetAsync("https://picsum.photos/200/300", (data) => {
  console.log(data.responseURL);
});


// ---- VẤN ĐỀ CALLBACK HELL
function httpGetAsync(theUrl, callback) {
  // GỌI API -> ajax , axios, fetch
  var xmlHttpRequest = new XMLHttpRequest();
  xmlHttpRequest.onreadystatechange = function () {
    if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
      callback(xmlHttpRequest);
    }
  };
  xmlHttpRequest.open("GET", theUrl, true);
  xmlHttpRequest.send();
}
// tham số thứ 2: là 1 callback phải là 1 function && phải được thực thi
httpGetAsync("https://picsum.photos/200/300", (data) => {
  console.log(data.responseURL); // url của cái hình
  document.getElementById("img1").src = data.responseURL;
  httpGetAsync("https://picsum.photos/200/300", (data) => {
    document.getElementById("img2").src = data.responseURL;
    httpGetAsync("https://picsum.photos/200/300", (data) => {
      document.getElementById("img3").src = data.responseURL;
    });
  });
});


// -- Tìm hiểu về Promise để thay callback hell
let promise = new Promise((resolve, reject) => {
  // GỌI API
  let a = 10;
  if (a > 1) {
    resolve(1000);
  }
  reject("ERROR");
});

promise
  .then((res) => {
    console.log(res);
    return res + 100; // nó bọc kết quả trong promise
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });


  // -- Xử lý promise
  function httpGetAsync(theUrl, resolve) {
  // GỌI API -> ajax , axios, fetch
  var xmlHttpRequest = new XMLHttpRequest();
  xmlHttpRequest.onreadystatechange = function () {
    if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
      resolve(xmlHttpRequest);
    }
  };
  xmlHttpRequest.open("GET", theUrl, true);
  xmlHttpRequest.send();
}
let promise1 = new Promise((resolve, reject) => {
  httpGetAsync("https://picsum.photos/200/300", resolve);
});

let promise2 = new Promise((resolve, reject) => {
  httpGetAsync("https://picsum.photos/200/300", resolve);
});
let promise3 = new Promise((resolve, reject) => {
  httpGetAsync("https://picsum.photos/200/300", resolve);
});

promise1
  .then((data) => {
    document.getElementById("img1").src = data.responseURL;
    return promise2; // trả ra 1 promise
  })
  .then((data) => {
    document.getElementById("img2").src = data.responseURL;
    return promise3;
  })
  .then((data) => {
    document.getElementById("img3").src = data.responseURL;
  });
*/
function httpGetAsync(theUrl, resolve) {
  // GỌI API -> ajax , axios, fetch
  var xmlHttpRequest = new XMLHttpRequest();
  xmlHttpRequest.onreadystatechange = function () {
    if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
      resolve(xmlHttpRequest);
    }
  };
  xmlHttpRequest.open("GET", theUrl, true);
  xmlHttpRequest.send();
}
let promise1 = new Promise((resolve, reject) => {
  httpGetAsync("https://picsum.photos/200/300", resolve);
});

let promise2 = new Promise((resolve, reject) => {
  httpGetAsync("https://picsum.photos/200/300", resolve);
});
let promise3 = new Promise((resolve, reject) => {
  httpGetAsync("https://picsum.photos/200/300", resolve);
});
// sync : đồng bộ
// async : bất đồng bộ
async function loadImage() {
  let xmlHttpRequest = await promise1;
  document.getElementById("img1").src = xmlHttpRequest.responseURL;
  let xmlHttpRequest2 = await promise2;
  document.getElementById("img2").src = xmlHttpRequest2.responseURL;
  let xmlHttpRequest3 = await promise2;
  document.getElementById("img3").src = xmlHttpRequest3.responseURL;
}

loadImage();
console.log("AAA");
