import fetch from "node-fetch";
import moment from "moment";




const myPromise = new Promise((resolve, reject) => {

    fetch("https://cat-fact.herokuapp.com/facts/random")
    .then(result => result.json())
    .then(jsonResult => {

        if (moment().subtract(1, 'month') < moment(jsonResult.updatedAt)) {
            resolve(jsonResult.text)
        }

        else {
            reject(Error("old data"))
        }
    });
    

})

myPromise.then(console.log).catch(()=> console.log("try again"));