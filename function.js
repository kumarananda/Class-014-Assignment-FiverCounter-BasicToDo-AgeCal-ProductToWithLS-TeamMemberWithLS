
/* 001 Order Counter Start  */
function zero(valeu) {
    return valeu < 10 ? '0'+ valeu : valeu;
}
/* 001 Order Counter End  */




// 004 Product ToDo with LocalStorage Start
/**
 * 
 * @param {*} key 
 * @param {*} arry 
 */
function sendDataToLS(key, arry) {
    let data = JSON.stringify(arry);
    localStorage.setItem(key, data)
};
/**
 * 
 * @param {*} key 
 * @returns 
 */
function getItemFromLS(key) {
    let data = localStorage.getItem(key)
    return data ? JSON.parse(data) : false;
    
}

// 004 Product ToDo with LocalStorage End

// 005 Product ToDo with LocalStorage Start
// allready called on 004

// /**
//  * 
//  * @param {*} key 
//  * @param {*} arry 
//  */
//  function sendDataToLS(key, arry) {
//     let data = JSON.stringify(arry);
//     localStorage.setItem(key, data)
// };
// /**
//  * 
//  * @param {*} key 
//  * @returns 
//  */
// function getItemFromLS(key) {
//     let data = localStorage.getItem(key)
//     return data ? JSON.parse(data) : false;
    
// };



// 005 Product ToDo with LocalStorage End