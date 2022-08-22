"use strict";
//1
let promise = new Promise(function (resolve, reject) {
      setTimeout(() => resolve("done"), 5000);
    //   setTimeout(() => reject("Error"), 5000);
    });
    
    console.log(promise);
    promise
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        console.log("Promise was finished!");
      });
//2
async function getNumber() {
try {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done"), 5000);
        // setTimeout(() => reject("Error"), 5000);
        });
    
        let result = await promise;
        console.log(result);
}
catch (err) {
    console.log(err);
}
finally{
    console.log("Promise was finished!");
    };
}
getNumber();
