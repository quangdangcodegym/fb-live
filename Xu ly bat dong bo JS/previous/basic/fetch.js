/*

https://viblo.asia/p/tim-hieu-fetch-api-p1-bWrZngbrlxw


// API OKI: https://picsum.photosww/200/300
fetch("https://picsum.photos/200/300")
    .then(function (response1) {
        console.log("response1 ", response1);
        document.getElementById("img_1").setAttribute("src", response1.url);

        return fetch("https://picsum.photos/200/300");
    })
    .then(function (response2) {
        document.getElementById("img_2").setAttribute("src", response2.url);

        return fetch("https://picsum.photos/200/300");
    })
    .then(function (response3) {
        document.getElementById("img_3").setAttribute("src", response3.url);
    }).catch(function (error) {
        console.log("CATCH: " + error);
    })
    ;

*/

fetch("https://picsum.photos/200/300")
    .then(function (response1) {
        console.log("response1 ", response1);
        document.getElementById("img_1").setAttribute("src", response1.url);

        return fetch("https://images.unsplash.com/photo-151055788018222-3d4d3cba35a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    })
    .then(function (response2) {
        console.log("response2 ", response2);
        document.getElementById("img_2").setAttribute("src", response2.url);

        return fetch("https://picsum.photos/200/300");
    })
    .catch(function (err) {
        console.log("ERROR: " + err);
    })
    .then(function (response3) {
        document.getElementById("img_3").setAttribute("src", response3.url);
    }).catch(function (error) {
        console.log("CATCH: " + error);
    })
    ;