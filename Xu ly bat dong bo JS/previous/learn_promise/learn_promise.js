/*
function test() {

    // đồng bộ chạy theo thứ tự trên xuống: đang trong cùng 1 luồng
    // bất đồng bộ: fetch, ajax, axios, setInterval
    setTimeout(() => {                  // luồng khác: 
        console.log(1);
    }, 30000);
    console.log(2);
    console.log(3);
}
// test();


setInterval(() => {
    console.log(Math.random() + "aaa");

}, 1000);



function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            callback(xmlHttp);
        }

    }
    xmlHttp.open('GET', theUrl, true);
    xmlHttp.send();
}
httpGetAsync("https://picsum.photos/200/300", (data) => {
    console.log(data.responseURL);
})


function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            callback(xmlHttp);
        }

    }
    xmlHttp.open('GET', theUrl, true);
    xmlHttp.send();
}
httpGetAsync("https://picsum.photos/200/300", (data) => {
    console.log(data);
    document.getElementById("img1").src = data.responseURL;
    httpGetAsync("https://picsum.photos/200/300", (data) => {
        document.getElementById("img2").src = data.responseURL;
        httpGetAsync("https://picsum.photos/200/300", (data) => {
            document.getElementById("img3").src = data.responseURL;
        });
    });
})

let promise1 = new Promise((resolve, reject) => {

    let a = 10;
    if (a > 1000) {
        resolve(1000);
    }
    reject("Error")
})

promise1.then((res) => {
    console.log(res);
})

function httpGetAsync(theUrl, resolve) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            console.log("xmlHttp", xmlHttp);
            resolve(xmlHttp);
        }
    }
    xmlHttp.open('GET', theUrl, true);
    xmlHttp.send();
}

let promise1 = new Promise((resolve, reject) => {
    httpGetAsync("https://picsum.photos/200/300", resolve)
})
let promise2 = new Promise((resolve, reject) => {
    httpGetAsync("https://picsum.photos/200/300", resolve)
})
let promise3 = new Promise((resolve, reject) => {
    httpGetAsync("https://picsum.photos/200/300", resolve)
})

promise1.then((res) => {
    document.getElementById("img1").src = res.responseURL;
    return promise2;
}).then((res) => {
    document.getElementById("img2").src = res.responseURL;
    return promise3;
}).then((res) => {
    document.getElementById("img3").src = res.responseURL;
})


async function getImage() {
    let s1 = await promise1;
    document.getElementById("img1").src = s1.responseURL;
    let s2 = await promise2;
    document.getElementById("img2").src = s2.responseURL;
    let s3 = await promise3;
    document.getElementById("img3").src = s3.responseURL;
}

getImage(); //  5s
*/


function httpGetAsync(theUrl, resolve, reject) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            if (xmlHttp.status == 200) {
                resolve(xmlHttp);
            } else {
                reject("ERRorr.............")
            }

        }
    }
    xmlHttp.open('GET', theUrl, true);
    xmlHttp.send();
}

let promise1 = new Promise((resolve, reject) => {
    httpGetAsync("https://picsum.photos/200/300", resolve, reject)
})
let promise2 = new Promise((resolve, reject) => {
    httpGetAsync("https://picsumllllllll.photos/200/300", resolve, reject)
})
let promise3 = new Promise((resolve, reject) => {
    httpGetAsync("https://picsum.photos/200/300", resolve, reject)
})

promise1.then((res) => {
    document.getElementById("img1").src = res.responseURL;
    return promise2;
}).then((res) => {
    document.getElementById("img2").src = res.responseURL;
    return promise3;
}).then((res) => {
    document.getElementById("img3").src = res.responseURL;
}).catch((err) => {
    console.log(err);
})
