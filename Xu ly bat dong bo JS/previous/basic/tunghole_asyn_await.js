/*
function test() {
    // thay vào để thấy sự bất đồng bộ: setTimeout(() => console.log('1'), 0);

    console.log(1);
    console.log(2);
    console.log(3);
}
test();

//--------------------------------------------------- Callback là gì
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
})

//--------------------------------------------------- Minh họa callback hell
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

    document.getElementById("img_1").setAttribute("src", data.responseURL);

    httpGetAsync("https://picsum.photos/200/300", (data) => {
        document.getElementById("img_2").setAttribute("src", data.responseURL);
        httpGetAsync("https://picsum.photos/200/300", (data) => {
            document.getElementById("img_3").setAttribute("src", data.responseURL);
        });
    });
})


//-------------------------------------------------------------- Promiss
const promise = new Promise((resolve, reject) => {
    let condition = false;
    if (condition) {
        setTimeout(() => {
            resolve('Success');
        }, 3000);
    } else {
        reject('Error');
    }
});

promise.then((data) => {
    console.log(data);
}).catch((dataError) => {
    console.log(dataError);
});

//-------------------------------------------------------------- Promise resolve, reject with API
function httpGetAsync(theUrl, resolve) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            resolve(xmlHttp);
        }

    }
    xmlHttp.open('GET', theUrl, true);
    xmlHttp.send();
}

const promise1 = new Promise((resolve, reject) => {
    httpGetAsync("https://picsum.photos/200/300", resolve)
});

const promise2 = new Promise((resolve, reject) => {
    httpGetAsync("https://picsum.photos/200/300", resolve)
});
const promise3 = new Promise((resolve, reject) => {
    httpGetAsync("https://picsum.photos/200/300", resolve)
});

promise1
    .then((data) => {
        console.log(data);
        document.getElementById("img_1").setAttribute("src", data.responseURL);

        return promise2;
    })
    .then((data) => {
        console.log(data);
        document.getElementById("img_2").setAttribute("src", data.responseURL);

        return promise3;
    })
    .then((data) => {
        document.getElementById("img_3").setAttribute("src", data.responseURL);
    })
    .catch((err) => {
        console.log(err);
    });



//--------------------------------------------------------- Async await Promise
function httpGetAsync(theUrl, resolve) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            // resolve(xmlHttp);
        }

    }
    xmlHttp.open('GET', theUrl, true);
    xmlHttp.send();
}

const promise1 = new Promise((resolve, reject) => {
    httpGetAsync("https://picsum.photos/200/300", resolve)
});

const promise2 = new Promise((resolve, reject) => {
    httpGetAsync("https://picsum.photos/200/300", resolve)
});
const promise3 = new Promise((resolve, reject) => {
    httpGetAsync("https://picsum.photos/200/300", resolve)
});


const excuteAsync = async () => {
    const response1 = await promise1;
    console.log(response1);
    document.getElementById("img_1").setAttribute("src", response1.responseURL);
    const response2 = await promise2;
    console.log(response2);
    document.getElementById("img_2").setAttribute("src", response2.responseURL);
    const response3 = await promise3;
    console.log(response3);
    document.getElementById("img_3").setAttribute("src", response3.responseURL);
}

excuteAsync();


//--------------------------------------------------------- Async await Promise vấn đề
function httpGetAsync(theUrl, resolve, reject) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            // resolve(xmlHttp);
            reject("ERROR:  Cannot resolve");
        }

    }
    xmlHttp.open('GET', theUrl, true);
    xmlHttp.send();
}

const promise1 = new Promise((resolve, reject) => {
    httpGetAsync("https://picsum.photos/200/300", resolve, reject);
});

const promise2 = new Promise((resolve, reject) => {
    httpGetAsync("https://picsum.photos/200/300", resolve, reject);
});
const promise3 = new Promise((resolve, reject) => {
    httpGetAsync("https://picsum.photos/200/300", resolve, reject);
});


const excuteAsync = async () => {
    try {
        const response1 = await promise1;
        console.log(response1);
        document.getElementById("img_1").setAttribute("src", response1.responseURL);
        const response2 = await promise2;
        console.log(response2);
        document.getElementById("img_2").setAttribute("src", response2.responseURL);
        const response3 = await promise3;
        console.log(response3);
        document.getElementById("img_3").setAttribute("src", response3.responseURL);
    } catch (e) {
        console.log(e);
    }

}

excuteAsync();
*/






// --------------------------------------------------------------- Async await Promise cải tiến


function httpGetAsync(theUrl) {
    return new Promise((resolve, reject) => {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4) {
                if (xmlHttp.status == 200) {
                    resolve(xmlHttp);
                } else {
                    reject("ERROR: Cannot resolve");
                }
            }
        }
        xmlHttp.open('GET', theUrl, true);
        xmlHttp.send();
    });
}

const promise1 = httpGetAsync("https://picsum.photos/200/300");
const promise2 = httpGetAsync("https://picsum.photosh/200/300");
const promise3 = httpGetAsync("https://picsum.photosh/200/300");

const executeAsync = async () => {
    try {
        const response1 = await promise1;
        console.log(response1);
        document.getElementById("img_1").setAttribute("src", response1.responseURL);

        const response2 = await promise2;
        console.log(response2);
        document.getElementById("img_2").setAttribute("src", response2.responseURL);

        const response3 = await promise3;
        console.log(response3);
        document.getElementById("img_3").setAttribute("src", response3.responseURL);
    } catch (error) {
        console.error(error);
    }
}

executeAsync();
