/*
//------------------------------------- setTimeout make callback hell
setTimeout(function () {
    console.log(1);
    setTimeout(function () {
        console.log(2);
        setTimeout(function () {
            console.log(3);
        }, 3000)
    }, 1000)
}, 2000);

//------------------------------------- Create Promise
const promise = new Promise(
    function (resolve, reject) {
        // logic

        let number = 5;
        if (number >= 5) {
            return resolve(0)
        }
        return reject("Thất bại");
    }
)

promise
    .then(function (data) {
        console.log(++data);
        return data;
    })
    .then(function (data) {
        console.log(++data);
        return data;
    })
    .then(function (data) {
        console.log(++data);
        return data;
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        console.log("done");
    })


    //---------------------------------------------------------------- Test promise nếu đã dùng onreject thì ko vào catch
const promise = new Promise(
    function (resolve, reject) {
        let number = -2;            // test để vào rejected
        if (number >= 5) {
            return resolve(0)
        }
        return reject("Thất bại");
    }
)
promise
    .then(function (data) {
    }, function (err) {
        console.log("Onreject message" + err);
        return err;
    })
    .catch(function (err) {
        console.log("Catch message" + err);
    });


//---------------------------------------------------------------- Return promise in then
const promise = new Promise(
    function (resolve, reject) {
        // logic

        let number = 5;
        if (number >= 5) {
            return resolve(0)
        }
        return reject("Thất bại");
    }
)

promise
    .then(function (data) {
        console.log(++data);
        return new Promise(function (resolve, reject) { resolve(data) });
    })
    .then(function (data) {
        console.log(++data);
        return data;
    })
    .then(function (data) {
        console.log(++data);
        return data;
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        console.log("done");
    })
    */
/*
const promise = new Promise(
    function (resolve, reject) {
        // logic

        let number = 5;
        if (number >= 5) {
            return resolve(0)
        }
        return reject("Thất bại");
    }
)

promise
    .then(function (data) {
        console.log(++data);
        return new Promise(function (resolve, reject) { resolve(data) });
    })
    .then(function (data) {
        console.log(++data);
        return data;
    })
    .then(function (data) {
        console.log(++data);
        return data;
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        console.log("done");
    })

    */